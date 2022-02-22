function myFunction() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];
    let targetSheet = ss.getSheetByName("Email2_J4");
    var lastRow = sheet.getLastRow();
    var lastRowTS = targetSheet.getLastRow();
    var range = sheet.getRange(lastRow,1, 1, 3);
    var values = range.getValues();
    
    // Print values from a 3x3 box.
    for (var row in values) {
      for (var col in values[row]) {
        Logger.log(values[row][col]);
      }
    }
  
    targetSheet.getRange(lastRowTS +1, 1, 1, 3).setValues(values);
  }
  
  function onEdit(e) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var cell = ss.getActiveCell();
    var column = ss.getActiveCell().getColumn();
    var new_value = ss.getActiveCell().getValue();
    var oldValue = cell.oldValue;
    
    if (column == 9 && new_value =='X'&& oldValue !=='string') {
      myFunction();
    }
  }