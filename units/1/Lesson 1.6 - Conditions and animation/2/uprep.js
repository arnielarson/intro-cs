function calculateEnrollmentForYear(year) {
    return year.grade10 + year.grade11 + year.grade12;
}

function calculateSchoolClassificationForEnrollment(enrollment) {
    if (enrollment >= 1304) {
        return "4A";
    } else if (enrollment >= 1086 && enrollment <= 1303) {
        return "3A";
    } else if (enrollment >= 513 && enrollment <= 1085) {
        return "2A";
    } else if (enrollment >= 208 && enrollment <= 512) {
        return "1A";
    } else if (enrollment >= 93 && enrollment <= 207) {
        return "2B";
    } else if (enrollment >= 0 && enrollment <= 92) {
        return "1B";
    } else {
        return undefined;    
    }
}

function calculateSchoolClassificationForYear(year) {
    var enrollment = calculateEnrollmentForYear(year);
    return calculateSchoolClassificationForEnrollment(enrollment);
}

function calculateSchoolClassification() {
    testSchoolClassification();
    
    var thisYear = {
        grade10: 81,
        grade11: 79,
        grade12: 76
    };
    
    var clasification = calculateSchoolClassificationForYear(thisYear);
}

function assert(condition) {
    if (condition != true) {
        debugger;
    }
}

function testSchoolClassification() {
    var testYear = {
        grade10: 1,
        grade11: 2,
        grade12: 3
    };
    var testEnrollment = calculateEnrollmentForYear(testYear);
    assert(testEnrollment == 6);
    
    var test4A = calculateSchoolClassificationForEnrollment(1304);
    assert(test4A == "4A");
    
    var test3A = calculateSchoolClassificationForEnrollment(1086);
    assert(test3A == "3A");
    
    var test2A = calculateSchoolClassificationForEnrollment(513);
    assert(test2A == "2A");
    
    var test1A = calculateSchoolClassificationForEnrollment(208);
    assert(test1A == "1A");
    
    var test2B = calculateSchoolClassificationForEnrollment(93);
    assert(test2B == "2B");
    
    var test1B = calculateSchoolClassificationForEnrollment(0);
    assert(test1B == "1B");
    
    var testNegative = calculateSchoolClassificationForEnrollment(-1);
    assert(testNegative == undefined);
}

