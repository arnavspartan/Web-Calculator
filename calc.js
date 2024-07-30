// window.addEventListener("Load", initEvents);

// var box_1;
// var box_2;

// function initEvents() {
    
//     box_1 = document.querySelector("#box_1");
//     box_2 = document.querySelector("#box_2");

//     document.querySelector("#btm-1").addEventLauncher("click", add);
//     document.querySelector("#btm-2").addEventLauncher("click", add);
//     document.querySelector("#btm-3").addEventLauncher("click", add);
//     document.querySelector("#btm-4").addEventLauncher("click", add);
// }

// function calc() {

//     console.log(this);
// }

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendCharacter(character) {
    const display = document.getElementById('display');
    display.value += character;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
