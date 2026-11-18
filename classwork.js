/*
========================================================
       JAVASCRIPT BEGINNER CLASSWORK
       PROJECT: SCHOOL MANAGEMENT SYSTEM
========================================================

STUDENT NAME: __________________________

INSTRUCTIONS:
1. Read each question carefully.
2. Write your JavaScript solution below each question.
3. Use console.log() to display your answers.
4. Do not delete the existing data.
5. Do not hardcode answers when you can access them
   from the existing objects and arrays.
6. Run your file with Node.js to see your results.

TOPICS:
- Arrays
- Objects
- Nested Objects
- String Methods
- Number Methods
- Object Methods
- Array Methods
========================================================
*/


// ======================================================
// SECTION 1: SCHOOL INFORMATION
// ======================================================

const schoolLMS = {
    platformInfo: {
        name: "EdTech Horizon",
        version: "4.2.1",
        activeEnvironment: "production",
        maintenanceMode: false
    },

    institution: {
        id: "INST-9021",
        name: "Global Tech Academy",
        accredited: true,

        location: {
            city: "Lagos",
            country: "Nigeria",
            postalCode: "101241"
        }
    }
};


// QUESTION 1:
// Print the name of the learning platform.
console.log(schoolLMS.platformInfo.name)


// QUESTION 2:
// Print the version of the learning platform.
console.log(schoolLMS.platformInfo.version)


// QUESTION 3:
// Print the city where the institution is located.
console.log(schoolLMS.institution.location.city)


// QUESTION 4:
// Print the institution's name and country.
console.log(schoolLMS.institution.name)
console.log(schoolLMS.institution.location.country)


// QUESTION 5:
// Print the institution's accreditation status.
console.log(schoolLMS.institution.accredited)


// QUESTION 6:
// Print the maintenance mode status.
console.log(schoolLMS.platformInfo.maintenanceMode)


// ======================================================
// SECTION 2: STUDENT INFORMATION
// ======================================================

const student = {
    name: "DIVINE",
    email: "  DIVINE@GMAIL.COM  ",
    age: 20,

    personalInfo: {
        gender: "Male",
        country: " NIGERIA ",
        state: "LAGOS"
    },

    academicInfo: {
        course: "JAVASCRIPT",
        level: "Beginner",
        score: 85.5678,
        isGraduated: false
    },

    courses: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js"
    ]
};


// QUESTION 7:
// Print the student's name.
console.log(student.name)


// QUESTION 8:
// Print the student's age and gender.
console.log(student.age)
console.log(student.personalInfo.gender)


// QUESTION 9:
// Print the student's country and state.
console.log(student.personalInfo.country)
console.log(student.personalInfo.state)


// QUESTION 10:
// Print the student's academic course and level.
console.log(student.academicInfo.course)
console.log(student.academicInfo.level)


// QUESTION 11:
// Print the student's third course from the courses array.
console.log(student.courses.react)


// QUESTION 12:
// Print the total number of courses the student is learning.
console.log(student.courses)


// QUESTION 13:
// Convert the student's name to lowercase and print it.
console.log(student.name.toLocaleLowerCase())


// QUESTION 14:
// Convert the student's email to lowercase,
// then remove the unnecessary spaces around it.
// Print the cleaned email.
console.log(student.email.toLowerCase().trim())

// QUESTION 15:
// Convert the student's country to lowercase
// and remove unnecessary spaces.
// Print the result.
console.log(student.personalInfo.country.toLocaleLowerCase())



// QUESTION 16:
// Convert the student's academic course to lowercase.
// Print the result.
console.log(student.academicInfo.course.toLowerCase())


// QUESTION 17:
// Check whether the student's email contains "@gmail.com".
// Print the result.
console.log(student.email.toLocaleLowerCase().trim().includes("@gmail.com"));


// QUESTION 18:
// Check whether the student's name starts with "DIV".
// Print the result.
console.log(student.name.startsWith("DIV"));


// ======================================================
// SECTION 3: STUDENT RECORDS
// ======================================================

const students = [
    {
        id: "STU001",
        name: "JOHN",
        email: "john@gmail.com",
        age: 20,
        course: "JavaScript",
        score: 75.4567,
        isActive: true
    },

    {
        id: "STU002",
        name: "SARAH",
        email: "sarah@gmail.com",
        age: 22,
        course: "Python",
        score: 89.6789,
        isActive: true
    },

    {
        id: "STU003",
        name: "DAVID",
        email: "david@gmail.com",
        age: 19,
        course: "React",
        score: 45.2345,
        isActive: false
    },

    {
        id: "STU004",
        name: "MARY",
        email: "mary@gmail.com",
        age: 24,
        course: "Node.js",
        score: 92.5678,
        isActive: true
    },

    {
        id: "STU005",
        name: "PETER",
        email: "peter@gmail.com",
        age: 18,
        course: "JavaScript",
        score: 55.6789,
        isActive: true
    }
];


// QUESTION 19:
// Print the name of the first student.
console.log(students[0].name);


// QUESTION 20:
// Print the email address of Sarah.
console.log(students[1].email);


// QUESTION 21:
// Print the course David is learning.
console.log(students[2].course)


// QUESTION 22:
// Print the total number of students in the school.
console.log(students.length);


// QUESTION 23:
// Print the names of all the students.
// Use forEach() to loop through the students array.



// QUESTION 24:
// Print the names of all students in lowercase.
// Use map() to create a new arr


// QUESTION 25:
// Find all students whose scores are greater than 70.
// Use filter().


// QUESTION 26:
// Find the student whose ID is "STU004".
// Use find().


// QUESTION 27:
// Check whether at least one student has a score
// greater than 90.
// Use some().


// QUESTION 28:
// Check whether every student is at least 18 years old.
// Use every().


// ======================================================
// SECTION 4: NUMBER METHODS AND SCORE PROCESSING
// ======================================================


// QUESTION 29:
// Print Sarah's score with exactly two decimal places.
// Use toFixed().
console.log(students[0]score.tofixed(2));


// QUESTION 30:
// Calculate the total score of all five students.
// Use reduce().

// BONUS:
// Calculate the average score of all five students
// and print the result to two decimal places.


// ======================================================
// SECTION 5: OBJECT METHODS
// ======================================================


// QUESTION 31:
// Print all the property names in the student object.
// Use Object.keys().


// QUESTION 32:
// Print all the property values in the student object.
// Use Object.values().


// QUESTION 33:
// Print all the key-value pairs in the student object.
// Use Object.entries().


// ======================================================
// SECTION 6: FINAL PROJECT CHALLENGE
// ======================================================

/*
Your task is to generate a simple student report.

Using the students array:

1. Print the school's name.
2. Print the total number of students.
3. Print the name of every student in lowercase.
4. Find all active students.
5. Find students who scored 70 or above.
6. Calculate the average score of all students.
7. Display the highest-scoring student.
8. Display the lowest-scoring student.

Use the appropriate objects, arrays, string methods,
number methods and array methods.

Display your final report using console.log().

BONUS:
Create a message that looks like this:

========================================
       GLOBAL TECH ACADEMY
          STUDENT REPORT
========================================

Total Students: 5
Active Students: 4
Highest Scorer: Mary
Lowest Scorer: David

========================================
*/


// WRITE YOUR FINAL PROJECT SOLUTION BELOW:





// ======================================================
// END OF CLASSWORK
// ======================================================