/**
 * Google Apps Script Backend for Trivia Mastery
 * 
 * INSTRUCTIONS:
 * 1. Go to sheets.google.com and create a new blank spreadsheet.
 * 2. Rename the first sheet tab (at the bottom) to "Scores"
 * 3. In the top menu, go to "Extensions" > "Apps Script".
 * 4. Paste this code into Code.gs (replacing everything).
 * 5. Click the Save icon (floppy disk).
 * 6. Click the blue "Deploy" button at the top right -> "New deployment".
 * 7. Click the gear icon next to "Select type" -> Check "Web app".
 * 8. Details:
 *      Description: Trivia Backend
 *      Execute as: "Me"
 *      Who has access: "Anyone"
 * 9. Click "Deploy". Authorize permissions if prompted (Advanced -> Go to Project Name).
 * 10. Copy the "Web app URL" and paste it into app.js in the variable GAS_URL.
 */

var SHEET_NAME = "Scores";

// Handle GET requests (e.g. fetching the top players for the leaderboard preview)
function doGet(e) {
  var action = e.parameter.action;
  if(action === 'getTop') {
    return ContentService.createTextOutput(JSON.stringify(getTopPlayers()))
      .setMimeType(ContentService.MimeType.JSON);
  }
  return ContentService.createTextOutput("Trivia Backend is Active.");
}

// Handle POST requests from the game when simulation finishes
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    // Fallback if timestamp missing
    var dateString = data.timestamp ? new Date(data.timestamp).toLocaleString() : new Date().toLocaleString();
    
    // We expect: data.language, data.totalTimeMs, data.totalErrors, data.errorIncidence
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    if(!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
      // Setup headers if new
      sheet.appendRow(["Timestamp", "Language", "Total Time (ms)", "Errors", "Error Incidence (%)"]);
    }
    
    // Append the new run
    sheet.appendRow([
      dateString,
      data.language,
      data.totalTimeMs,
      data.totalErrors,
      data.errorIncidence
    ]);
    
    // Calculate global rank based on totalTimeMs
    // Lower time is better (assuming they all answered correctly, which the game enforces).
    var rank = calculateGlobalRank(data.totalTimeMs);
    
    var response = {
      status: "success",
      position: rank,
      message: "Data saved successfully"
    };
    
    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({"status": "error", "message": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Helper: Calculate the rank of the current time
function calculateGlobalRank(newTimeMs) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  var data = sheet.getDataRange().getValues();
  
  if(data.length <= 1) return 1; // Only header and this entry
  
  var times = [];
  // Skip header (row 0), extract all valid totalTimeMs (col 2)
  for(var i = 1; i < data.length; i++) {
    var ms = parseInt(data[i][2]);
    if(!isNaN(ms)) {
      times.push(ms);
    }
  }
  
  // Sort times ascending
  times.sort(function(a, b){ return a - b });
  
  // Find position
  var rank = 1;
  for(var j = 0; j < times.length; j++) {
    if(newTimeMs > times[j]) {
      rank++;
    } else {
      break;
    }
  }
  
  return rank;
}

// Helper: Get top 3 players
function getTopPlayers() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if(!sheet) return [];
  var data = sheet.getDataRange().getValues();
  
  if(data.length <= 1) return [];
  
  var records = [];
  // Grab timestamp and time
  for(var i = 1; i < data.length; i++) {
    var ms = parseInt(data[i][2]);
    if(!isNaN(ms)) {
      records.push({
        id: "Player " + i,
        time: ms,
        formattedTime: formatTime(ms)
      });
    }
  }
  
  records.sort(function(a, b){ return a.time - b.time });
  return records.slice(0, 3);
}

function formatTime(ms) {
    var elapsed = Math.floor(ms / 1000);
    var m = String(Math.floor(elapsed / 60)).padStart(2, '0');
    var s = String(elapsed % 60).padStart(2, '0');
    return m + ":" + s;
}
