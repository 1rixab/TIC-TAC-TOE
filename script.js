// let inputnumber1 = document.getElementById("btn1")
// let inputnumber2 = document.getElementById("btn2")
// let gobtn1 = document.getElementById("btn12")
// let gobtn2 = document.getElementById("btn22")
let pbox1 = document.getElementById("playbox1")
let pbox2 = document.getElementById("playbox2")
let pbox3 = document.getElementById("playbox3")
let pbox4 = document.getElementById("playbox4")
let pbox5 = document.getElementById("playbox5")
let pbox6 = document.getElementById("playbox6")
let pbox7 = document.getElementById("playbox7")
let pbox8 = document.getElementById("playbox8")
let pbox9 = document.getElementById("playbox9")
let pboxs = document.querySelectorAll(".child2grid");


let clip = 1;
pboxs.forEach((box) => {
  box.addEventListener("click", () =>{
    if(clip === 1){
      clip = 2;
      let creates = document.createElement("i");
      creates.className = "fa-regular fa-circle";
      box.appendChild(creates);
    }else{
      clip = 1;
      let creates = document.createElement("i");
      creates.className = "fa-solid fa-xmark";
      box.appendChild(creates);
    }
  })
})





// pbox1.addEventListener("dblclick", function () {
//   let creates = document.createElement("i");
//   creates.className = "fa-regular fa-circle";
//   pbox1.appendChild(creates);
// });
// pbox2.addEventListener("dblclick", function () {
//   let creates = document.createElement("i");
//   creates.className = "fa-regular fa-circle";
//   pbox2.appendChild(creates);
// });
// pbox3.addEventListener("dblclick", function () {
//   let creates = document.createElement("i");
//   creates.className = "fa-regular fa-circle";
//   pbox3.appendChild(creates);
// });
// pbox4.addEventListener("dblclick", function () {
//   let creates = document.createElement("i");
//   creates.className = "fa-regular fa-circle";
//   pbox4.appendChild(creates);
// });
// pbox5.addEventListener("dblclick", function () {
//   let creates = document.createElement("i");
//   creates.className = "fa-regular fa-circle";
//   pbox5.appendChild(creates);
// });
// pbox6.addEventListener("dblclick", function () {
//   let creates = document.createElement("i");
//   creates.className = "fa-regular fa-circle";
//   pbox6.appendChild(creates);
// });
// pbox7.addEventListener("dblclick", function () {
//   let creates = document.createElement("i");
//   creates.className = "fa-regular fa-circle";
//   pbox7.appendChild(creates);
// });
// pbox8.addEventListener("dblclick", function () {
//   let creates = document.createElement("i");
//   creates.className = "fa-regular fa-circle";
//   pbox8.appendChild(creates);
// });
// pbox9.addEventListener("dblclick", function () {
//   let creates = document.createElement("i");
//   creates.className = "fa-regular fa-circle";
//   pbox9.appendChild(creates);
// });


//     pbox1.addEventListener("sglclick", function () {
//       let creates = document.createElement("i");
//       creates.className = "fa-solid fa-xmark";
//       pbox1.appendChild(creates);
//     });
//     pbox2.addEventListener("singleclick", function () {
//       let creates = document.createElement("i");
//       creates.className = "fa-solid fa-xmark";
//       pbox2.appendChild(creates);
//     });
//     pbox3.addEventListener("singleclick", function () {
//       let creates = document.createElement("i");
//       creates.className = "fa-solid fa-xmark";
//       pbox3.appendChild(creates);
//     });
//     pbox4.addEventListener("singleclick", function () {
//       let creates = document.createElement("i");
//       creates.className = "fa-solid fa-xmark";
//       pbox4.appendChild(creates);
//     });
//     pbox5.addEventListener("singleclick", function () {
//       let creates = document.createElement("i");
//       creates.className = "fa-solid fa-xmark";
//       pbox5.appendChild(creates);
//     });
//     pbox6.addEventListener("singleclick", function () {
//       let creates = document.createElement("i");
//       creates.className = "fa-solid fa-xmark";
//       pbox6.appendChild(creates);
//     });
//     pbox7.addEventListener("singleclick", function () {
//       let creates = document.createElement("i");
//       creates.className = "fa-solid fa-xmark";
//       pbox7.appendChild(creates);
//     });
//     pbox8.addEventListener("singleclick", function () {
//       let creates = document.createElement("i");
//       creates.className = "fa-solid fa-xmark";
//       pbox8.appendChild(creates);
//     });
//     pbox9.addEventListener("singleclick", function () {
//       let creates = document.createElement("i");
//       creates.className = "fa-solid fa-xmark";
//       pbox9.appendChild(creates);
//     });
  




// gobtn1.addEventListener("click",function(){
//     if(inputnumber1.value == 1){
//         let createO = document.createElement("i");
//         createO.className = "fa-regular fa-circle";
//         pbox1.appendChild(createO)
//         inputnumber1.value = ""
//     }
//     else if(inputnumber1.value == 2){
//          let createO = document.createElement("i");
//          createO.className = "fa-regular fa-circle";
//          pbox2.appendChild(createO);
//          inputnumber1.value = "";
        

//     }
//     else if (inputnumber1.value == 3) {
//       let createO = document.createElement("i");createO.className = "fa-regular fa-circle";
//       pbox3.appendChild(createO);
//       inputnumber1.value = "";
//     }
//     else if (inputnumber1.value == 4) {
//       let createO = document.createElement("i");
//       createO.className = "fa-regular fa-circle";
//       pbox4.appendChild(createO);
//       inputnumber1.value = "";
//     } 
//     else if (inputnumber1.value == 5) {
//       let createO = document.createElement("i");
//       createO.className = "fa-regular fa-circle";
//       pbox5.appendChild(createO);
//       inputnumber1.value = "";
//     } 
//     else if (inputnumber1.value == 6) {
//       let createO = document.createElement("i");
//       createO.className = "fa-regular fa-circle";
//       pbox6.appendChild(createO);
//       inputnumber1.value = "";
//     } 
//     else if (inputnumber1.value == 7) {
//       let createO = document.createElement("i");
//       createO.className = "fa-regular fa-circle";
//       pbox7.appendChild(createO);
//       inputnumber1.value = "";
//     } 
//     else if (inputnumber1.value == 8) {
//       let createO = document.createElement("i");
//       createO.className = "fa-regular fa-circle";
//       pbox8.appendChild(createO);
//       inputnumber1.value = "";
//     }
//     else if (inputnumber1.value == 9) {
//       let createO = document.createElement("i");
//       createO.className = "fa-regular fa-circle";
//       pbox9.appendChild(createO);
//       inputnumber1.value = "";
//     } 
//     else {
//       console.log("halo");
//     }
// })


// gobtn2.addEventListener("click", function () {
//   if (inputnumber2.value == 1) {
//     let createX = document.createElement("i");
//     createX.className = "fa-solid fa-xmark";
//     pbox1.appendChild(createX);
//     inputnumber2.value = "";
//   } 
//   else if (inputnumber2.value == 2) {
//     let createX = document.createElement("i");
//     createX.className = "fa-solid fa-xmark";
//     pbox2.appendChild(createX);
//     inputnumber2.value = "";
//   } else if (inputnumber2.value == 3) {
//     let createX = document.createElement("i");
//     createX.className = "fa-solid fa-xmark";
//     pbox3.appendChild(createX);
//     inputnumber2.value = "";
//   } else if (inputnumber2.value == 4) {
//     let createX = document.createElement("i");
//     createX.className = "fa-solid fa-xmark";
//     pbox4.appendChild(createX);
//     inputnumber2.value = "";
//   } else if (inputnumber2.value == 5) {
//     let createX = document.createElement("i");
//     createX.className = "fa-solid fa-xmark";
//     pbox5.appendChild(createX);
//     inputnumber2.value = "";
//   } else if (inputnumber2.value == 6) {
//     let createX = document.createElement("i");
//     createX.className = "fa-solid fa-xmark";
//     pbox6.appendChild(createX);
//     inputnumber2.value = "";
//   } else if (inputnumber2.value == 7) {
//     let createX = document.createElement("i");
//     createX.className = "fa-solid fa-xmark";
//     pbox7.appendChild(createX);
//     inputnumber2.value = "";
//   } else if (inputnumber2.value == 8) {
//     let createX = document.createElement("i");
//     createX.className = "fa-solid fa-xmark";
//     pbox8.appendChild(createX);
//     inputnumber2.value = "";
//   } else if (inputnumber2.value == 9) {
//     let createX = document.createElement("i");
//     createX.className = "fa-solid fa-xmark";
//     pbox9.appendChild(createX);
//     inputnumber2.value = "";
//   } 
//   else {
//     console.log("halo");
//   }
// });


