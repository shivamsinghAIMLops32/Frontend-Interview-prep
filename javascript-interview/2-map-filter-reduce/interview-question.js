let students = [
  { name: "John", rollNumber: 1, marks: 80 },
  { name: "Anna", rollNumber: 2, marks: 95 },
  { name: "Borck", rollNumber: 3, marks: 15 },
  { name: "Jacob", rollNumber: 41, marks: 85 },
  { name: "Hillan", rollNumber: 5, marks: 90 },
];

// Return the names of students in capital letters
function getStudentNames(students) {
  return students.map((student) => student.name.toUpperCase());
}

console.log(getStudentNames(students));

// question 2 return name of those students who scored more than 60 marks
function getStudentByScore(students) {
    return students.filter((student) => student.marks > 60).map((student) => student.name);
  }
  
  console.log(getStudentByScore(students));
  

 // question 3 return student with marks more than 60 and rollNumber greater than 15

 function getStudentByMarksAndRoll(students) {
    return students.filter((student)=>student.marks >60 && student.rollNumber > 15).map((student)=> student.name);
  }
  
  console.log(getStudentByMarksAndRoll(students));


  // question 4 return the sum of marks of all students
  function getSumOfMarks(students) {
      return students.reduce((sum, student) => sum + student.marks, 0);
    }
    
    console.log(getSumOfMarks(students));
    
    // question 5 return the sum of marks of all students using reduce
    function getSumOfMarksUsingReduce(students) {
        return students.reduce((sum, student) => sum + student.marks, 0);
      }
      
      console.log(getSumOfMarksUsingReduce(students));
