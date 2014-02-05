function minimum(first, second) {
    var firstIsSmaller = first < second;
    if (firstIsSmaller) {
        return first;
    } else {
        return second;
    }
}

function calculateMinimumStudents(year) {
    var minimumStudents = minimum(year.grade6, year.grade7);
    minimumStudents = minimum(minimumStudents, year.grade8);
    minimumStudents = minimum(minimumStudents, year.grade9);
    minimumStudents = minimum(minimumStudents, year.grade10);
    minimumStudents = minimum(minimumStudents, year.grade11);
    minimumStudents = minimum(minimumStudents, year.grade12);
    return minimumStudents;
}

function maximum(first, second) {
    var firstIsSmaller = first < second;
    if (firstIsSmaller) {
        return second;
    } else {
        return first;
    }
}

function calculateMaximumStudents(year) {
    var maximumStudents = maximum(year.grade6, year.grade7);
    maximumStudents = maximum(maximumStudents, year.grade8);
    maximumStudents = maximum(maximumStudents, year.grade9);
    maximumStudents = maximum(maximumStudents, year.grade10);
    maximumStudents = maximum(maximumStudents, year.grade11);
    maximumStudents = maximum(maximumStudents, year.grade12);
    return maximumStudents;
}

function calculateMinimumAndMaximumStudents() {
    var thisYear = {
        grade6: 66,
        grade7: 74,
        grade8: 74,
        grade9: 82,
        grade10: 81,
        grade11: 79,
        grade12: 76
    };
    
    var minimumStudents = calculateMinimumStudents(thisYear);
    
    var maximumStudents = calculateMaximumStudents(thisYear);    
}
