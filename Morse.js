var translations = {
    "-_": "a",
    "_---": "b",
    "_-_-": "c",
    "_--": "d",
    "-": "e",
    "--_-": "f",
    "__-": "g",
    "----": "h",
    "--": "i",
    "-___": "j",
    "_-_": "k",
    "-_--": "l",
    "__": "m",
    "_-": "n",
    "___": "o",
    "-__-": "p",
    "__-_": "q",
    "-_-": "r",
    "---": "s",
    "_": "t",
    "--_": "u",
    "---_": "v",
    "-__": "w",
    "_--_": "x",
    "_-__": "y",
    "__--": "z"
}

var keyDownTime;
var keyUpTime;
var timePressed;
var translationArea = document.getElementById("translationArea");
var code = "";
var timer;

function translateText(code) {
    return translations[code];
}

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 32) {
        keyUpTime = 0;
        keyDownTime = 0;

        keyDownTime = Date.now();

        setTimeout(function() {
            clearInterval(timer);
        }, 1);
    } else if (e.keyCode == 90) {
        if (translations[code] === undefined) {} else {
            translationArea.textContent += translateText(code);
        }
        console.log(translateText(code));
        code = "";
        clearInterval(timer);
    }
})

document.addEventListener("keyup", function(e) {
    if (e.keyCode == 32) {
        keyUpTime = Date.now();
        timePressed = keyUpTime - keyDownTime;
        if (timePressed < 150) {
            code += "-";
        } else {
            code += "_";
        }

        timer = setInterval(function() {
            if (translations[code] === undefined) {} else {
                translationArea.textContent += translateText(code);
            }
            console.log(translateText(code));
            code = "";
            clearInterval(timer);
        }, 1400);
    } else if (e.keyCode == 90) {
        console.log(translateText(code));
        code = "";
        clearInterval(timer);
    }
});
