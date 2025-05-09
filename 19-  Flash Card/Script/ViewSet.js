let sets = [];

window.onload = function () {
    sets = JSON.parse(localStorage.getItem("Sets")) || [];
    print(sets);
};

function print(sets) {
    let newHTML = "";
    if (sets && sets.length > 0) {
        sets.forEach((object, index) => {
            newHTML += `<div class="mainBox">
                    <button onclick="view(${index})" class="name">${object}</button>
                    <button onclick="del(${index})" class="del">×</button>
                </div>`;
        });
    }
    document.querySelector(".main").innerHTML = newHTML;
}

function addSet() {
    let setName = prompt("Enter Set Name:", "");
    if (setName && setName.trim()) {
        setName = setName.trim();
        sets = JSON.parse(localStorage.getItem("Sets")) || [];
        if (!sets.includes(setName)) {
            sets.push(setName);
            localStorage.setItem("Sets", JSON.stringify(sets));
            print(sets);
        } else {
            alert("A set with this name already exists!");
        }
    }
}

function del(index) {
    sets = JSON.parse(localStorage.getItem("Sets")) || [];
    let warning = confirm(`🗑 Delete '${sets[index]}' Permanently?`);
    if (warning) {
        sets.splice(index, 1);
        localStorage.setItem("Sets", JSON.stringify(sets));
        print(sets);
    }
}

function view(index) {
    let selectedSet = [];
    sets = JSON.parse(localStorage.getItem("Sets")) || [];
    let key = sets[index].trim();
    let cards = JSON.parse(localStorage.getItem("CardInfo")) || [];
    cards.forEach((object) => {
        if (key === object.fileName.trim()) {
            selectedSet.push(object);
        }
    });
    sessionStorage.setItem("sessionSet", JSON.stringify(selectedSet));
    window.location.href = "ViewCards.html";
}

function home() {
    window.location.href = "Home.html";
}
