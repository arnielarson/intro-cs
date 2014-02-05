function calculateAverageMiddleSchoolStudentsForYear(grade6, grade7, grade8) {
    var totalStudents;
    totalStudents = grade6 + grade7 + grade8;
    return totalStudents / 3; 
}

function calculateAverageUpperSchoolStudentsForYear(grade9, grade10, grade11, grade12) {
    var totalStudents;
    totalStudents = grade9 + grade10 + grade11 + grade12;
    return totalStudents / 4;
}

function calculateAverageStudentsForYear(grade6, grade7, grade8, grade9,
    grade10, grade11, grade12) {
    var totalStudents;
    totalStudents = grade6 + grade7 + grade8 + grade9 +
        grade10 + grade11 + grade12;
    return totalStudents / 7;
}

function calculateAverageStudents() {
    var thisYearGrade6 = 66;
    
    var thisYearGrade7 = 74;
    
    var thisYearGrade8 = 74;
    
    var thisYearGrade9 = 82;
    
    var thisYearGrade10 = 81;
    
    var thisYearGrade11 = 79;
    
    var thisYearGrade12 = 76;

    var thisYearAverageStudents = calculateAverageStudentsForYear(
        thisYearGrade6, thisYearGrade7, thisYearGrade8, thisYearGrade9,
        thisYearGrade10, thisYearGrade11, thisYearGrade12);
    
    var thisYearAverageMiddleSchoolStudents = calculateAverageMiddleSchoolStudentsForYear(
        thisYearGrade6, thisYearGrade7, thisYearGrade8);
    
    var thisYearAverageUpperSchoolStudents = calculateAverageUpperSchoolStudentsForYear(
        thisYearGrade9, thisYearGrade10, thisYearGrade11, thisYearGrade12);
    
    var lastYearGrade6 = 65;
    
    var lastYearGrade7 = 70;
    
    var lastYearGrade8 = 72;
    
    var lastYearGrade9 = 80;
    
    var lastYearGrade10 = 80;
    
    var lastYearGrade11 = 80;
    
    var lastYearGrade12 = 67;
    
    var lastYearAverageStudents = calculateAverageStudentsForYear(
        lastYearGrade6, lastYearGrade7, lastYearGrade8, lastYearGrade9,
        lastYearGrade10, lastYearGrade11, lastYearGrade12);
    
    var lastYearAverageMiddleSchoolStudents = calculateAverageMiddleSchoolStudentsForYear(
        lastYearGrade6, lastYearGrade7, lastYearGrade8);
    
    var lastYearAverageUpperSchoolStudents = calculateAverageUpperSchoolStudentsForYear(
        lastYearGrade9, lastYearGrade10, lastYearGrade11, lastYearGrade12);
}


