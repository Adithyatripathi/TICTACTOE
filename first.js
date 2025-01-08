let button = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let adi = document.querySelector(".win-hide");
let msges = document.querySelector("#msges");
let i = true;
const winner = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

button.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (i === true) {
            btn.innerText = "X";
            i = false;
        } else {
            btn.innerText = "O";
            i = true;
        }
        btn.disabled = true;
        winnerfun();
    });
});

const resetgame = () => {
    i = true;
    enablebutton();
    adi.classList.add("hide");
    msges.innerText = "";
};

let draw = () => {
    msges.innerText = `THE GAME IS DRAW`;
    adi.classList.remove("hide");
};

let showwinner = (WINN) => {
    msges.innerText = `Congratulations ${WINN}, YOU WIN`;
    adi.classList.remove("hide");
    stopbutton();
};

const stopbutton = () => {
    for (let b of button) {
        b.disabled = true;
    }
};

const enablebutton = () => {
    for (let b of button) {
        b.disabled = false;
        b.innerText = "";
    }
};

const winnerfun = () => {
    let isDraw = true;
    for (let pattern of winner) {
        let pos1 = button[pattern[0] - 1].innerText;
        let pos2 = button[pattern[1] - 1].innerText;
        let pos3 = button[pattern[2] - 1].innerText;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "" && pos1 === pos2 && pos2 === pos3) {
            showwinner(pos1);
            return;
        }
    }
    // Check for draw
    for (let b of button) {
        if (b.innerText === "") {
            isDraw = false;
            break;
        }
    }
    if (isDraw) {
        draw();
    }
};

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
