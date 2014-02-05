function calculateChangeInClassSize(lastYear, thisYear) {
    return {
        grade7: thisYear.grade7 - lastYear.grade6,
        grade8: thisYear.grade8 - lastYear.grade7,
        grade9: thisYear.grade9 - lastYear.grade8,
        grade10: thisYear.grade10 - lastYear.grade9,
        grade11: thisYear.grade11 - lastYear.grade10,
        grade12: thisYear.grade12 - lastYear.grade11
    };
}

function isChangeTooLarge(change) {
    return change < -4 || change > 4;
}

function calculateChangesThatAreTooLarge(changes) {
    return {
        grade7: isChangeTooLarge(changes.grade7),
        grade8: isChangeTooLarge(changes.grade8),
        grade9: isChangeTooLarge(changes.grade9),
        grade10: isChangeTooLarge(changes.grade10),
        grade11: isChangeTooLarge(changes.grade11),
        grade12: isChangeTooLarge(changes.grade12)
    };
}

function calculateSchoolGrowth() {
    testSchoolGrowth();
    
    var thisYear = {
        grade7: 74,
        grade8: 74,
        grade9: 82,
        grade10: 81,
        grade11: 79,
        grade12: 76
    };
    
    var lastYear = {
        grade6: 65,
        grade7: 70,
        grade8: 72,
        grade9: 80,
        grade10: 80,
        grade11: 80
    };
    
    var changes = calculateChangeInClassSize(lastYear, thisYear);
    var tooLargeChanges = calculateChangesThatAreTooLarge(changes);
}

function assert(condition) {
    if (condition != true) {
        debugger;
    }
}

function testSchoolGrowth() {
    var positiveChange1 = isChangeTooLarge(4);
    assert(positiveChange1 == false);
    
    var positiveChange2 = isChangeTooLarge(5);
    assert(positiveChange2 == true);
    
    var negativeChange1 = isChangeTooLarge(-4);
    assert(negativeChange1 == false);
    
    var negativeChange2 = isChangeTooLarge(-5);
    assert(negativeChange2 == true);
    
    var testThisYear = {
        grade7: 1,
        grade8: 2,
        grade9: 3,
        grade10: 4,
        grade11: 5,
        grade12: 6
    };
    
    var testLastYear = {
        grade6: 1,
        grade7: 1,
        grade8: 1,
        grade9: 1,
        grade10: 1,
        grade11: 1
    };
    
    var changes = calculateChangeInClassSize(testLastYear, testThisYear);
    assert(changes.grade7 == 0);
    assert(changes.grade8 == 1);
    assert(changes.grade9 == 2);
    assert(changes.grade10 == 3);
    assert(changes.grade11 == 4);
    assert(changes.grade12 == 5);
    
    var tooLargeChanges = calculateChangesThatAreTooLarge(changes);
    assert(tooLargeChanges.grade7 == false);
    assert(tooLargeChanges.grade8 == false);
    assert(tooLargeChanges.grade9 == false);
    assert(tooLargeChanges.grade10 == false);
    assert(tooLargeChanges.grade11 == false);
    assert(tooLargeChanges.grade12 == true);
}
