// spec: http://en.wikipedia.org/wiki/Pig_Latin

var vowels = [
    "a", "A",
    "e", "E",
    "i", "I",
    "o", "O",
    "u", "U",
];

function start() {
    var convert = document.getElementById("convert");
    convert.onclick = onConvert;
}

function onConvert() {
    var input = document.getElementById("input");
    var english = input.value;
    var converted = pigLatin(english);
    var output = document.getElementById("output");
    output.textContent = converted;
}

function pigLatin(sentence) {
    var words = sentence.split(" ");
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        words[i] = convertWord(word);
    }
    return words.join(" ");
}

function convertWord(word) {
    var consonants = countConsonants(word);
    if (consonants == 0) {
        return word + "way";
    }
    var start = word.substr(0, consonants);
    var remain = word.substr(consonants, word.length - consonants);
    var converted = remain + start + "ay";
    return converted;
}

function countConsonants(word) {
    for (var i = 0; i < word.length; i++) {
        var ch = word.charAt(i);
        if (isVowel(ch)) {
            return i;
        }
    }
    return word.length;
}

function isVowel(char) {
    for (var i = 0; i < vowels.length; i++) {
        var vowel = vowels[i];
        if (vowel == char) {
            return true;
        }
    }
    return false;
}