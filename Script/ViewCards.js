//window.onload brings value from 1 html to another
window.onload = function () {
    var newHTML = "";
    var memory = JSON.parse(sessionStorage.getItem("sessionSet"));
    memory.forEach((object, index) => {
        newHTML += `<div class="mainBox">
                <div class="head">
                    <div class="name">
                    ${object.fileName}
                    </div>
                    <button onclick="del(${index})">
                    <div class="del">
                    ×</div>
                    </button>
                </div>
                <div class="question">
                    ${object.question}
                </div>
                <div class="answer">
                    ${object.answer}
                </div>
            </div>`;
    });
    document.querySelector(".main").innerHTML = newHTML;
    document.querySelector(".count").innerHTML = memory.length;
    if(memory.length != 0 ){
        document.querySelector(".revise").innerHTML= `<button onclick="revise()">Revise</button>`;
    }
};
function del(index) {
    let Memory = JSON.parse(sessionStorage.getItem("sessionSet"));
    let fileName = Memory[index].fileName;
    let question = Memory[index].question;
    let answer = Memory[index].answer;
    //remove item from sessionStorage
    Memory.splice(index, 1);
    let newArray = Memory;
    sessionStorage.setItem("sessionSet", JSON.stringify(newArray));
    let newMemory = JSON.parse(sessionStorage.getItem("sessionSet"));
    let newHTML = "";
    newMemory.forEach((object, index) => {
        newHTML += `<div class="mainBox">
                <div class="head">
                    <div class="name">
                    ${object.fileName}
                    </div>
                    <button onclick="del(${index})">
                    <div class="del">
                    ×</div>
                    </button>
                </div>
                <div class="question">
                    ${object.question}
                </div>
                <div class="answer">
                    ${object.answer}
                </div>
            </div>`;
    });
    document.querySelector(".main").innerHTML = newHTML;
    document.querySelector(".count").innerHTML = Memory.length;
    if(Memory.length == 0){
        document.querySelector(".revise").innerHTML= "";
    }
    //removes item from localStorage
    let mainMemory = JSON.parse(localStorage.getItem("CardInfo"));
    mainMemory.forEach((object, index) => {
        if (
            object.fileName === fileName &&
            object.question === question &&
            object.answer === answer
        ) {
            mainMemory.splice(index, 1);
            localStorage.setItem("CardInfo", JSON.stringify(mainMemory));
        }
    });
}
function revise(){
    window.location.href="Revise.html";
}
function back() {
    window.location.href = "ViewSet.html";
}
