function myFunction() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];
    let targetSheet = ss.getSheets()[1];
    var cell = sheet.getActiveCell();
    var selectRow = cell.getRow();
    var lastRowTS = targetSheet.getLastRow();
    var range = sheet.getRange(selectRow, 1, 1, 3);
    var values = range.getValues();

    // Print values from a 3x3 box.
    for (var row in values) {
        for (var col in values[row]) {
            Logger.log(values[row][col]);
        }
    }

    targetSheet.getRange(lastRowTS + 1, 1, 1, 3).setValues(values);
}

function myFunction_J4() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[1];
    let targetSheet = ss.getSheets()[2];
    var cell = sheet.getActiveCell();
    var selectRow = cell.getRow();
    var lastRowTS = targetSheet.getLastRow();
    var range = sheet.getRange(selectRow, 1, 1, 3);
    var values = range.getValues();

    // Print values from a 3x3 box.
    for (var row in values) {
        for (var col in values[row]) {
            Logger.log(values[row][col]);
        }
    }

    targetSheet.getRange(lastRowTS + 1, 1, 1, 3).setValues(values);
}

function myFunction_J9() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[2];
    let targetSheet = ss.getSheets()[3];
    var cell = sheet.getActiveCell();
    var selectRow = cell.getRow();
    var lastRowTS = targetSheet.getLastRow();
    var range = sheet.getRange(selectRow, 1, 1, 3);
    var values = range.getValues();

    // Print values from a 3x3 box.
    for (var row in values) {
        for (var col in values[row]) {
            Logger.log(values[row][col]);
        }
    }

    targetSheet.getRange(lastRowTS + 1, 1, 1, 3).setValues(values);
}


function onEdit(e) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var cell = ss.getActiveCell();
    var column = ss.getActiveCell().getColumn();
    var new_value = ss.getActiveCell().getValue();
    var oldValue = cell.oldValue;

    if ((sheet = ss.getSheets()[0]) && column == 9 && new_value == 'X' && oldValue !== 'string') {
        myFunction();
    }

    if ((sheet = ss.getSheets()[1]) && column == 5 && new_value == 'X' && oldValue !== 'string') {
        myFunction_J4();
    }

    if ((sheet = ss.getSheets()[2]) && column == 4 && new_value == 'X' && oldValue !== 'string') {
        myFunction_J9();
    }
}
