//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return <li>${step}</li>//the html string made from step
}
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml// set the innerHTML

let grades =["A","B","A","C"]
let point;
let gpaPoints =grades.map(function(grade){
  switch (grade){
      case "A":
        point = 4;
        break;
      case "B":
        point = 3;
        break;
      case "C":
        point=2;
        break;

  }
  return point;
})

console.log(gpaPoints);

let totalPoint = gpaPoints.reduce(getTotal);

function getTotal(total, item){
  return total + item;
}
console.log(totalPoint);

let gapAverage = totalPoint/gpaPoints.length;
console.log(gpaAverage);