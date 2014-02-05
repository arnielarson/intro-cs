function setGrade(name, value) {
    var container = document.getElementById(name);
    container.textContent = value;    
}

function start() {
    var year = {
        grade6: 66,
        grade7: 74,
        grade8: 74,
        grade9: 82,
        grade10: 81,
        grade11: 79,
        grade12: 76
    };    
    
    setGrade("grade6", year.grade6);
    setGrade("grade7", year.grade7);
    setGrade("grade8", year.grade8);
    setGrade("grade9", year.grade9);
    setGrade("grade10", year.grade10);
    setGrade("grade11", year.grade11);
    setGrade("grade12", year.grade12);
}   

