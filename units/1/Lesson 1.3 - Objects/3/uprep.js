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
function adjustYear(year, change) {
    year.grade6 = year.grade6 + change.grade6;
    year.grade7 = year.grade7 + change.grade7;
    year.grade8 = year.grade8 + change.grade8;
    year.grade9 = year.grade9 + change.grade9;
    year.grade10 = year.grade10 + change.grade10;
    year.grade11 = year.grade11 + change.grade11;
    year.grade12 = year.grade12 + change.grade12;
}

function calculateAverageStudents() {
    var year = {
        grade6: 66,
        grade7: 74,
        grade8: 74,
        grade9: 82,
        grade10: 81,
        grade11: 79,
        grade12: 76
    };
    
    var change = {
        grade6: -2,
        grade7: -3,
        grade8: -1,
        grade9: 3,
        grade10: 1,
        grade11: 2,
        grade12: 1
    };    
    
    adjustYear(year, change);
    var nextYearAverages = calculateAverageStudentsForYear(year);    
}