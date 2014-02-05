var tokenTypes = {
    eof : "eof",
    whitespace: "whitespace",
    number: "number",
    plus: "plus",
    minus: "minus",
    times: "times",
    divide: "divide",
    error: "error",
    leftParen: "leftParen",
    rightParen: "rightParen",
};

var operators = {
    add: function(node) {
        return node.left.operator(node.left) + node.right.operator(node.right);
    },
    subtract: function (node) {
        return node.left.operator(node.left) - node.right.operator(node.right);
    },
    multiply: function (node) {
        return node.left.operator(node.left) * node.right.operator(node.right);
    },
    divide: function (node) {
        return node.left.operator(node.left) / node.right.operator(node.right);
    },
    error: function (node) {
        return "error";
    },
    number: function (node) {
        return node.value;
    },
}

function isDigit(code) {
    return code >= 48 && code <= 57; // 0 .. 9
}

function isWhitespace(code) {
    return code == 32 || code == 9; // space, tab
}

function skipWhitespace(input) {
    for (;;) {
        if (input.index >= input.text.length) {
            break;
        }
        var code = input.text.charCodeAt(input.index);
        if (!isWhitespace(code)) {
            break;
        }
        input.index = input.index + 1;
    }
}

function scanToken(input) {
    skipWhitespace(input);
    if (input.index == input.text.length) {
        return undefined;
    }
    var code = input.text.charCodeAt(input.index);
    if (isDigit(code)) {
        return scanNumber(input);
    }
    if (code == 43) { // +
        input.index = input.index + 1;
        return { type: tokenTypes.plus };
    }
    
    if (code == 45) { // -
        input.index = input.index + 1;
        return { type: tokenTypes.minus };
    }
    
    if (code == 47) { // /
        input.index = input.index + 1;
        return { type: tokenTypes.divide };
    }
    
    if (code == 42) { // *
        input.index = input.index + 1;
        return { type: tokenTypes.times };
    }
    
    if (code == 40) { // (
        input.index = input.index + 1;
        return { type: tokenTypes.leftParen };
    }
    
    if (code == 41) { // )
        input.index = input.index + 1;
        return { type: tokenTypes.rightParen };
    }
    
    var ch = input.charAt(input.index);
    return { type: tokenTypes.error, value: ch };
}

function scanNumber(input) {
    var value = 0;
    for (;;) {
        var code = input.text.charCodeAt(input.index);
        if (!isDigit(code)) {
            break;
        }
        var digit = code - 48;
        value = value * 10 + digit;
        input.index = input.index + 1;
    }
    return { type: tokenTypes.number, value: value };
}

function scan(expression) {
    var input = {text: expression, index: 0 };
    var tokens = [];
    for (;;) {
        var token = scanToken(input);
        if (token == undefined) {
            break;
        }
        if (token.type != tokenTypes.whitespace) {
            tokens[tokens.length] = token;
        }        
    }
    tokens[tokens.length] = { type: tokenTypes.eof };
    return tokens;
}

function peekToken(scanner) {
    return scanner.tokens[scanner.index];
}

function anyToken(scanner) {
    return scanner.tokens[scanner.index].type != tokenTypes.eof;
}

function consumeToken(scanner) {
    var token = scanner.tokens[scanner.index];
    scanner.index = scanner.index + 1;
    return token;
}

function parseExpression(scanner) {
    var tree = parseAdditionAndSubtraction(scanner);
    if (anyToken(scanner)) {
        return { operator: operators.error };
    }
    return tree;
}

function parseAdditionAndSubtraction(scanner) {
    var right;
    var left = parseMultiplicationAndDivision(scanner);
    for (;;) {
        var token = peekToken(scanner);
        if (token.type == tokenTypes.plus) {
            token = consumeToken(scanner);
            right = parseMultiplicationAndDivision(scanner);
            left = { operator: operators.add, left: left, right: right };
        } else if (token.type == tokenTypes.minus) {
            token = consumeToken(scanner);
            right = parseMultiplicationAndDivision(scanner);
            left = { operator: operators.subtract, left: left, right: right };
        }
        else {
            break;
        }
    }
    return left;
}

function parseMultiplicationAndDivision(scanner) {
    var right;
    var left = parseParensOrNumber(scanner);
    for (;;) {
        var token = peekToken(scanner);
        if (token.type == tokenTypes.times) {
            token = consumeToken(scanner);
            right = parseParensOrNumber(scanner);
            left = { operator: operators.multiply, left: left, right: right };
        } else if (token.type == tokenTypes.divide) {
            token = consumeToken(scanner);
            right = parseParensOrNumber(scanner);
            left = { operator: operators.divide, left: left, right: right };
        } else {            
            break;
        }
    }
    return left;
}

function parseParensOrNumber(scanner) {
    var token = peekToken(scanner);
    if (token.type == tokenTypes.leftParen) {
        return parseParens(scanner);
    }
    return parseNumber(scanner);
}

function parseParens(scanner) {
    var token = consumeToken(scanner);
    var tree = parseAdditionAndSubtraction(scanner);
    var token = consumeToken(scanner);
    if (token.type != tokenTypes.rightParen) {
        return { operator: operators.error };
    }
    return tree;
}

function parseNumber(scanner) {
    var token = consumeToken(scanner);
    if (token.type != tokenTypes.number) {
        return { operator: operators.error };
    }
    return { operator: operators.number, value: token.value };
}

function evaluate(expression) {
    var tokens = scan(expression);
    var scanner = { tokens: tokens, index: 0 };
    var tree = parseExpression(scanner);
    var value = tree.operator(tree);
    return value;
}

function start() {
    var expression = " 8+2 * 3 / (4 - (3*3 - 10 + 1)) - 7";
    var answer = evaluate(expression);
    document.getElementById("expression").textContent = expression;
    document.getElementById("answer").textContent = answer;
}
