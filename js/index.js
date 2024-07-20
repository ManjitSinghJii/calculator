var result = document.getElementById("result");
var alertP = document.getElementById("alert");

function input(num) {
    result.value += num;
}

function calc() {
    var output = eval(result.value);
    result.value = output;
}

function cancle() {
    result.value = "";
}

function even() {

    var num = result.value;
    if(num%2==0) {
        alertP.innerHTML = num+" is Even Number";
        alertP.style.color = "dodgerblue";
        result.value = "";
    }
    else {
        alertP.innerHTML = num+" is not an Even Number";
        alertP.style.color = "Red";
        result.value = "";
    }
}

function odd() {
    var num = result.value;
    if(num%2==0) {
        alertP.innerHTML = num+" is not an Odd Number";
        alertP.style.color = "red";
        result.value = "";
    }
    else {
        alertP.innerHTML = num+" is an Odd Number";
        alertP.style.color = "dodgerblue";
        result.value = "";
    }
}