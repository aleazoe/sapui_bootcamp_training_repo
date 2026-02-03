// SAP UI5 BOOTCAMP
// DAY 3 January 28, 2026
// Introduction to JavaScript 
// Alea Zoe Fadlen <alea.zoe.fadlen@accenture.com>

// Problem #3

var height = 7;
for (var row = 0; row < height; row++) {
    var line = "";

    for (var col = 0; col < height; col++) {
        // Place a star when column matches the row 
        // OR when column matches height-row-1 
        if (col === row || col === (height - row - 1)) {
            line += "* ";
        } else {
            line += "  "; // spaces for alignment
        }
    }
    console.log(line);
}
