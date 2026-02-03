// SAP UI5 BOOTCAMP
// DAY 3 January 28, 2026
// Introduction to JavaScript 
// Alea Zoe Fadlen <alea.zoe.fadlen@accenture.com>

// Problem #2

var height = 5; //height of the triangle
base = height; //base of the triangle
 
//outer loop 
while (base > 0){
    var wildcard = ""
    var height = base;
    //inner loop
    while (height > 0){
        wildcard += "* ";
        height--;
    }
    console.log(wildcard);
    base--;
}
