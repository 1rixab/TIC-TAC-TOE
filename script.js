let pbox1 = document.getElementById("playbox1");
let pbox2 = document.getElementById("playbox2");
let pbox3 = document.getElementById("playbox3");
let pbox4 = document.getElementById("playbox4");
let pbox5 = document.getElementById("playbox5");
let pbox6 = document.getElementById("playbox6");
let pbox7 = document.getElementById("playbox7");
let pbox8 = document.getElementById("playbox8");
let pbox9 = document.getElementById("playbox9");
let pboxs = document.querySelectorAll(".child2grid");
let bton1 = document.getElementById("btnp1");
let bton2 = document.getElementById("btnp2");
let bton3 = document.getElementById("btnp3");
let bton4 = document.getElementById("btnp4");
let bton5 = document.getElementById("btnp5");
let bton6 = document.getElementById("btnp6");
let bton7 = document.getElementById("btnp7");
let bton8 = document.getElementById("btnp8");
let bton9 = document.getElementById("btnp9");
let buttonsele = document.querySelectorAll(".btnes");
let result = document.getElementById("resultmsg");
let flag = "";
let gamedata = [];
let Owin = "O WINNER!!!";
let Xwin = "X WINNER!!!";

let printResult = (statement) => {
  result.innerText = statement;
  result.style.display = "block";
  
};

function checkwnr() {
  if (
    gamedata.includes("1O") &&
    gamedata.includes("2O") &&
    gamedata.includes("3O")
  )
    printResult(Owin);
  else if (
    gamedata.includes("1X") &&
    gamedata.includes("2X") &&
    gamedata.includes("3X")
  )
    printResult(Xwin);
  else if (
    gamedata.includes("1O") &&
    gamedata.includes("4O") &&
    gamedata.includes("7O")
  )
    printResult(Owin);
  else if (
    gamedata.includes("1X") &&
    gamedata.includes("4X") &&
    gamedata.includes("7X")
  )
    printResult(Xwin);
  else if (
    gamedata.includes("2O") &&
    gamedata.includes("5O") &&
    gamedata.includes("8O")
  )
    printResult(Owin);
  else if (
    gamedata.includes("2X") &&
    gamedata.includes("5X") &&
    gamedata.includes("8X")
  )
    printResult(Xwin);
  else if (
    gamedata.includes("3O") &&
    gamedata.includes("6O") &&
    gamedata.includes("9O")
  )
    printResult(Owin);
  else if (
    gamedata.includes("3X") &&
    gamedata.includes("6X") &&
    gamedata.includes("9X")
  )
    printResult(Xwin);
  else if (
    gamedata.includes("4O") &&
    gamedata.includes("5O") &&
    gamedata.includes("6O")
  )
    printResult(Owin);
  else if (
    gamedata.includes("4X") &&
    gamedata.includes("5X") &&
    gamedata.includes("6X")
  )
    printResult(Xwin);
  else if (
    gamedata.includes("7O") &&
    gamedata.includes("8O") &&
    gamedata.includes("9O")
  )
    printResult(Owin);
  else if (
    gamedata.includes("7X") &&
    gamedata.includes("8X") &&
    gamedata.includes("9X")
  )
    printResult(Xwin);
  else if (
    gamedata.includes("1O") &&
    gamedata.includes("5O") &&
    gamedata.includes("9O")
  )
    printResult(Owin);
  else if (
    gamedata.includes("1X") &&
    gamedata.includes("5X") &&
    gamedata.includes("9X")
  )
    printResult(Xwin);
  else if (
    gamedata.includes("3O") &&
    gamedata.includes("5O") &&
    gamedata.includes("7O")
  )
    printResult(Owin);
  else if (
    gamedata.includes("3X") &&
    gamedata.includes("5X") &&
    gamedata.includes("7X")
  )
    printResult(Xwin);
}

function transfer(bts) {
  let creates = document.createElement("i");
  creates.className = "fa-regular fa-circle";
  bts.appendChild(creates);
  gamedata.push(flag + "O");
  // console.log(gamedata)
  flag = "";
  checkwnr();
}
function transfer2(bts) {
  let creates = document.createElement("i");
  creates.className = "fa-solid fa-xmark";
  bts.appendChild(creates);
  gamedata.push(flag + "X");
  // console.log(gamedata);
  flag = "";
  checkwnr();
}
pboxs.forEach((box2) => {
  box2.addEventListener("click", () => {
    if (box2 === pbox1) {
      bton1.click();
    } else if (box2 === pbox2) bton2.click();
    else if (box2 === pbox3) bton3.click();
    else if (box2 === pbox4) bton4.click();
    else if (box2 === pbox5) bton5.click();
    else if (box2 === pbox6) bton6.click();
    else if (box2 === pbox7) bton7.click();
    else if (box2 === pbox8) bton8.click();
    else if (box2 === pbox9) bton9.click();
  });
});

let clip = 1;

buttonsele.forEach((box) => {
  box.addEventListener("click", () => {
    if (clip === 1) {
      clip = 2;

      if (box === bton1) {
        flag = 1;
        transfer(pbox1);
        bton1.disabled = true;
      } else if (box === bton2) {
        flag = 2;
        transfer(pbox2);
        bton2.disabled = true;
      } else if (box === bton3) {
        flag = 3;
        transfer(pbox3);
        bton3.disabled = true;
      } else if (box === bton4) {
        flag = 4;
        transfer(pbox4);
        bton4.disabled = true;
      } else if (box === bton5) {
        flag = 5;
        transfer(pbox5);
        bton5.disabled = true;
      } else if (box === bton6) {
        flag = 6;
        transfer(pbox6);
        bton6.disabled = true;
      } else if (box === bton7) {
        flag = 7;
        transfer(pbox7);
        bton7.disabled = true;
      } else if (box === bton8) {
        flag = 8;
        transfer(pbox8);
        bton8.disabled = true;
      } else if (box === bton9) {
        flag = 9;
        transfer(pbox9);
        bton9.disabled = true;
      }
    } else {
      if (box === bton1) {
        flag = 1;
        transfer2(pbox1);
        bton1.disabled = true;
      } else if (box === bton2) {
        flag = 2;
        transfer2(pbox2);
        bton2.disabled = true;
      } else if (box === bton3) {
        flag = 3;
        transfer2(pbox3);
        bton3.disabled = true;
      } else if (box === bton4) {
        flag = 4;
        transfer2(pbox4);
        bton4.disabled = true;
      } else if (box === bton5) {
        flag = 5;
        transfer2(pbox5);
        bton5.disabled = true;
      } else if (box === bton6) {
        flag = 6;
        transfer2(pbox6);
        bton6.disabled = true;
      } else if (box === bton7) {
        flag = 7;
        transfer2(pbox7);
        bton7.disabled = true;
      } else if (box === bton8) {
        flag = 8;
        transfer2(pbox8);
        bton8.disabled = true;
      } else if (box === bton9) {
        flag = 9;
        transfer2(pbox9);
        bton9.disabled = true;
      }
      clip = 1;
    }
  });
});
