function calculateAverageMiddleSchoolStudentsForYear(year) {
    var totalStudents = year.grade6 + year.grade7 + year.grade8;
    return totalStudents / 3; 
}

function calculateAverageUpperSchoolStudentsForYear(year) {
    var totalStudents = year.grade9 + year.grade10 + year.grade11 + year.grade12;
    return totalStudents / 4;
}

function calculateAverageWholeSchoolStudentsForYear(year) {
    var totalStudents = year.grade6 + year.grade7 + year.grade8 + year.grade9 +
        year.grade10 + year.grade11 + year.grade12;
    return totalStudents / 7;
}

function calculateAverageStudentsForYear(year) {
    var middleSchoolAverage = calculateAverageMiddleSchoolStudentsForYear(year);
    var upperSchoolAverage = calculateAverageUpperSchoolStudentsForYear(year);
    var wholeSchoolAverage = calculateAverageWholeSchoolStudentsForYear(year);
    
    return {
        middleSchool: middleSchoolAverage,
        upperSchool: upperSchoolAverage,
        wholeSchool: wholeSchoolAverage
    };
}

function calculateAverageStudents() {
    var thisYear = {
        grade6: 66,
        grade7: 74,
        grade8: 74,
        grade9: 82,
        grade10: 81,
        grade11: 79,
        grade12: 76
    };
    
    var thisYearAverages = calculateAverageStudentsForYear(thisYear);
    
    var lastYear = {
        grade6: 65,
        grade7: 70,
        grade8: 72,
        grade9: 80,
        grade10: 80,
        grade11: 80,
        grade12: 67
    };
    
    var lastYearAverages = calculateAverageStudentsForYear(lastYear);
}