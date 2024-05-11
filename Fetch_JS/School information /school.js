const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },  
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};


let sum = 0;
for (let key in school.departments) {
  sum += school.departments[key].teachers;
}
console.log(sum);
// countCalculation
function countcalulation(school) {
  const {
    departments:{
      math : { teachers: mathTeacherscount, students: mathstudentscount },
      science: { teachers: scienceTeachercont, students: sciencestudentscount },
      history: { teachers: historyTeachercont, students: historystudentscount },
      english: { teachers: englishTeachercont, students: englishstudentscount },
    }
  } = school;
  console.log({ mathTeacherscount, mathstudentscount, historyTeachercont, historystudentscount, scienceTeachercont, sciencestudentscount, englishTeachercont, englishstudentscount });
}
console.log(countcalulation(school));


// find top students 
function findtopstudent(school ,courseName){
  const topStudent = school.students.reduce((prev,curr)=>{
    let topscore = curr.scores[courseName] > prev.scores[courseName] ? curr : prev;
    return topscore;
  })
  return topStudent;
}

console.log(findtopstudent(school,"history"));

// Adding new department in the course

let newdepartment={art:{teacher:5, students:50}}
function addnewdpt(school , newdepartment){
  const updateddpt={
    ...school.departments,
    ...newdepartment
  }
  return {
    ...school,
    departments:updateddpt
  }
  console.log("newDats", updateddpt)
}
console.log(addnewdpt(school,newdepartment));

// highestStudentCountDepartment
function highestStudentCountDepartment(school){
  const {
    departments:{
      math : { students: mathstudentscount },
      science: { students: sciencestudentscount },
      history: { students: historystudentscount },
      english: { students: englishstudentscount },
    }
  } = school;
  const highestcount = Math.max(mathstudentscount,sciencestudentscount,historystudentscount,englishstudentscount);
  const highestcountdept = highestcount === mathstudentscount? "math" : highestcount === sciencestudentscount? "science" : highestcount === historystudentscount? "history" : highestcount === englishstudentscount? "english" : "";
  return `highest count dept is ${highestcountdept} with ${highestcount} students`;
}

console.log(highestStudentCountDepartment(school));

// generates a greeting message for a given name and language


function generateGreeting(name, language) {
  let greeting = "";
  if (language === "english") {
    greeting = `Hello, ${name}!`;
  }
  if (language === "spanish") {
    greeting = `Hola, ${name}!`;
  }
  if (language === "french") {
    greeting = `Bonjour, ${name}!`;
  }
  return greeting
}
console.log(generateGreeting("Alice","english"));
console.log(generateGreeting("Bob", "spanish"));
console.log(generateGreeting("Charlie", "french"));