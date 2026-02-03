// SAP UI5 BOOTCAMP
// DAY 3 January 28, 2026
// Introduction to JavaScript 
// Alea Zoe Fadlen <alea.zoe.fadlen@accenture.com>

// Problem #5

color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; 
o = ["st","nd","rd", "th"];
i = color.length;

function ordinal(n) {
  // Use last digit to decide st/nd/rd, else th
  switch (n) {
    case 1: 
      return n + "st";
    case 2: 
      return n + "nd";
    case 3: 
      return n + "rd";
    default: 
      return n + "th";
  }
}

for (var i=0; i < color.length; i++){
    n = i + 1;
    var str = ordinal(n) + " choice is " + color[i] + ".";
    console.log(str);
}
