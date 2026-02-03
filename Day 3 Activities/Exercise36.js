// SAP UI5 BOOTCAMP
// DAY 3 January 28, 2026
// Introduction to JavaScript 
// Alea Zoe Fadlen <alea.zoe.fadlen@accenture.com>

// Problem #6

var record = [{
  "Name": "Gibo",
  "Age": 16,
  "SkillSet": [{ "Skill": "SAP UI5" }, { "Skill": "SAP HANA" }]
}, {
  "Name": "Patrick",
  "Age": 22,
  "SkillSet": [{ "Skill": "SAP UI5" }, { "Skill": "SAP HANA" }, { "Skill": "SAP ABAP" }]
}, {
  "Name": "MJ",
  "Age": 24,
  "SkillSet": [{ "Skill": "SAP HANA" }]
}];

function highest(records) {
  var max = -1, people = [];
  for (var i = 0; i < records.length; i++) {
    var p = records[i];
    var c = Array.isArray(p.SkillSet) ? p.SkillSet.length : 0;
    if (c > max) { 
      max = c; people = [p]; 
    } else if (c === max) { 
      people.push(p); 
    }}
  return people; 
}
var tops = highest(record)

  console.log("Name: " + tops[0].Name);
  console.log("Age: " + tops[0].Age);
