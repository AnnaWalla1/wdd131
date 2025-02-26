import {aCourse} from './courses.mjs';
//   console.log(aCourse.section[1].roomNum);


  aCourse.enrollStudent();
  
  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
  });