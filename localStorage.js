// let lis = document.querySelectorAll("ul li");
// // let myDiv = document.querySelector(".experiment");
// let m = document.getElementsByClassName("experiment")[0];
// // console.log(m);
// // console.log(myDiv);

// if(window.localStorage.getItem("color")){
//   // [1]add color to div
//   m.style.backgroundColor = window.localStorage.getItem("color");
//   // [2]remove active class from all lis
//   for(let i=0;i<lis.length;i++){
//     lis[i].classList.remove("active");
//   }
//   // add active class to current color
//   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }


// for(let i=0;i<lis.length;i++){
//   lis[i].addEventListener("click",function(e){
//     // console.log(e.currentTarget.dataset.color);
//     // remove active class from all lis
//     for(let i=0;i<lis.length;i++){
//       lis[i].classList.remove("active");
//     }
//     // add active class to currebt element 
//     e.currentTarget.classList.add("active");
//     // add current color to localstorage 
//     window.localStorage.setItem("color",e.target.getAttribute("data-color"));
//     // change div background color
//     m.style.backgroundColor = window.localStorage.getItem("color");
//   });
// };

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if(window.localStorage.getItem("color")){
  exp.style.backgroundColor = window.localStorage.getItem("color");
  for(let i=0;i<lis.length;i++){
    lis[i].classList.remove("active");
  }
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")
}


for(let i=0;i<lis.length;i++){
  lis[i].addEventListener("click", function(e){
    for(let i=0;i<lis.length;i++){
      lis[i].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color",lis[i].getAttribute("data-color"));
    exp.style.backgroundColor = window.localStorage.getItem("color");
  })
}