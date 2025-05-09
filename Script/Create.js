let fileName = "";
let question = "";
let imgQuestion = "";
let answer = "";
let imgAnswer = "";
function input() {
    fileName = document.querySelector(".fileName").value;
    question = document.querySelector(".question").value;
    imgQuestion = document.querySelector(".imgQuestion").value;
    answer = document.querySelector(".answer").value;
    imgAnswer = document.querySelector(".imgAnswer").value;
    save();
}
function save() {
    var memory = JSON.parse(localStorage.getItem("CardInfo")) ?? [];
    memory.push({
        fileName: fileName,
        question: question,
        imgQuestion: imgQuestion,
        answer: answer,
        imgAnswer: imgAnswer,
    });
    localStorage.setItem("CardInfo", JSON.stringify(memory));
    remove();
}
function remove() {
    document.querySelector(".fileName").value = "";
    document.querySelector(".question").value = "";
    document.querySelector(".imgQuestion").value = "";
    document.querySelector(".answer").value = "";
    document.querySelector(".imgAnswer").value = "";
}

function home(){
    window.location.href="home.html";
}