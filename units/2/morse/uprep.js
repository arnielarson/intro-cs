// spec: http://en.wikipedia.org/wiki/Morse_code

var morse = [
    { letter: "A", code: ".-" },
    { letter: "B", code: "-..." },
    { letter: "C", code: "-.-." },
    { letter: "D", code: "-.." },
    { letter: "E", code: "." },
    { letter: "F", code: "..-." },
    { letter: "G", code: "--." },
    { letter: "H", code: "...." },
    { letter: "I", code: ".." },
    { letter: "J", code: ".---" },
    { letter: "K", code: "-.-" },
    { letter: "L", code: ".-.." },
    { letter: "M", code: "--" },
    { letter: "N", code: "-." },
    { letter: "O", code: "---" },
    { letter: "P", code: ".--." },
    { letter: "Q", code: "--.-" },
    { letter: "R", code: ".-." },
    { letter: "S", code: "..." },
    { letter: "T", code: "-" },
    { letter: "U", code: "..-" },
    { letter: "V", code: "...-" },
    { letter: "W", code: ".--" },
    { letter: "X", code: "-..-" },
    { letter: "Y", code: "-.--" },
    { letter: "Z", code: "--.." },

    { letter: "1", code: ".----" },
    { letter: "2", code: "..---" },
    { letter: "3", code: "...--" },
    { letter: "4", code: "....-" },
    { letter: "5", code: "....." },
    { letter: "6", code: "-...." },
    { letter: "7", code: "--..." },
    { letter: "8", code: "---.." },
    { letter: "9", code: "----." },
    { letter: "0", code: "-----" },
];

function start() {
    var convert = document.getElementById("convert");
    convert.onclick = onConvert;
}

function onConvert() {
    var input = document.getElementById("input");
    var english = input.value;
    var converted = convertSentence(english);
    var output = document.getElementById("output");
    output.innerHTML = converted;
}

function convertSentence(sentence) {
    var words = sentence.split(" ");
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        words[i] = convertWord(word);
    }
    return words.join("<br>");
}

function convertWord(word) {
    var codes = [];
    for (var i = 0; i < word.length; i++) {
        var ch = word.charAt(i);
        var ch2 = word[i];
        var code = findCode(ch);
        codes.push(code);
    }
    return codes.join("&nbsp;&nbsp;&nbsp;&nbsp;");
}

function findCode(ch) {
    for (var i = 0; i < morse.length; i++) {
        var symbol = morse[i];
        if (symbol.letter == ch) {
            return symbol.code;
        }
    }
    return "*";
}