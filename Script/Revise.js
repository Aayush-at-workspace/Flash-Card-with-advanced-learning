let memory = null;
//gets session and local storage
if(!JSON.parse(sessionStorage.getItem("sessionSet"))){
    memory = JSON.parse(localStorage.getItem("CardInfo"));
}else{
    memory = JSON.parse(sessionStorage.getItem("sessionSet"));
}
window.onload = function () {
    working();
};
function working() {
    let upperLimit = 0.0;
    let lowerLimit = 0.0;
    let driver = Math.random();
    let sectionLength = 1 / memory.length;
    if (memory.length == 0) {
        alert("All Cards Revised");
        alert(
            "To continue Add new cards or Refresh the page to start over again"
        );
    }
    memory.forEach((object, index) => {
        lowerLimit = upperLimit;
        upperLimit += sectionLength;
        //use to add new properties to existing object
        object["index"] = index;
        object["lowerLimit"] = lowerLimit;
        object["upperLimit"] = upperLimit;
        if (driver >= lowerLimit && driver < upperLimit) {
            if (object.imgQuestion == "") {
                document.querySelector(".box").innerHTML = `<div class="card2">
                <div class="heading">${object.fileName}</div>
                <div class="question">${object.question}</div>
                <div class="response">
                    <button onclick="decision(1,${object.index})" class="yes">Know</button>
                    <button onclick="decision(0,${object.index})" class="no">Don't Know</button>
                </div>
            </div>`;
            } else {
                document.querySelector(".box").innerHTML = `<div class="card">
                <div class="heading">${object.fileName}</div>
                <div class="image">
                    <img src="${object.imgQuestion}" alt="" />
                </div>
                <div class="question">${object.question}</div>
                <div class="response">
                    <button onclick="decision(1,${object.index})" class="yes">Know</button>
                    <button onclick="decision(0,${object.index})" class="no">Don't Know</button>
                </div>
            </div>`;
            }
        }
    });
}

//decides whether to put card into bin or not
function decision(response, index) {
    let newObject = null;
    memory.forEach((obj, position) => {
        if (position == index) {
            newObject = obj;
        }
    });
    if (response == 1) {
        memory.splice(newObject.index, 1);
    } else {
        memory.push(newObject);
    }
    flip(newObject);
}
function flip(object) {
    let audio= new Audio("Media/Sound.wav");
    audio.play();
    if (object.imgAnswer == "") {
        document.querySelector(".box").innerHTML = `<div class="card2">
                <div class="heading">Answer</div>
                <div class="answer">${object.answer}</div>
                <div class="response2">
                    <button onclick="working()" class="next">Next</button>
                </div>
            </div>`;
    } else {
        document.querySelector(".box").innerHTML = `<div class="card">
                <div class="heading">Answer</div>
                <div class="image">
                    <img src="${object.imgAnswer}" alt="" />
                </div>
                <div class="answer">${object.answer}</div>
                <div class="response2">
                    <button onclick="working()" class="next">Next</button>
                </div>
            </div>`;
    }
}
function home() {
    window.location.href = "Home.html";
}
