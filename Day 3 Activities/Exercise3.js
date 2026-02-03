// SAP UI5 BOOTCAMP
// DAY 3 January 28, 2026
// Introduction to JavaScript 
// Alea Zoe Fadlen <alea.zoe.fadlen@accenture.com>

// Problem #1

// input number (1 to 999)
var number = "9";
len = number.length;

var ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine" ];
var teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen" ];
var tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety" ];

h = Math.floor(number / 100);
wordsH = ones[h] + " Hundred";
r = number % 100;
if (r < 10){
    wordsO = ones[r];
    wordsCombined = wordsO;
} else if (r < 20) {
    mod1 = r % 10;
    wordsT1 = teens[mod1];
    wordsCombined = wordsT1;
} else {
    o = Math.floor(r / 10);
    wordsT2 = tens[o];
    m = r % 10;
    if (m != 0){
        wordsO1 = ones[m];
        wordsCombined = wordsT2 + " " + wordsO1;
    } else {
         wordsCombined = wordsT2;
    }
}

if (len === 3) {
    console.log(wordsH + " " + wordsCombined); 
} else if (len === 2) {
    console.log(wordsCombined);
} else if (len === 1) {
    console.log(wordsCombined);
} else {
    console.log(number +" is out of range.");
}
