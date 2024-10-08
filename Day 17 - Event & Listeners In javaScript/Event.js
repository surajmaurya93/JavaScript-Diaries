// function changeText(event){
//     console.log(event);
//     let fpara = document.getElementById("fpara")
//     fpara.textContent = "Suraj Maurya"
// }

// let fpara = document.getElementById("fpara")
// fpara.addEventListener("click", changeText)     //add event listener

// fpara.removeEventListener("click", changeText)   //remove Event listener

// let anchorElement = document.getElementById("fanchor")

// //default behaviour remove kar diya
// anchorElement.addEventListener("click", function(event) {
//     event.preventDefault();
//     anchorElement.textContent = "Click Done Bh ai"
// });

//*************** Avoiding Too Many Listener(First Method) ***************
//all paragraph have different listeners


// let paras = document.querySelectorAll("p");

// for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener("click", function(){
//         alert("You Have Clicked On Para:" + (i+1))
//     })
// }


//*************** Avoiding Too Many Listener(Second Method) ***************
//all paragraph attach in 1 listener


// let paras = document.querySelectorAll("p");

// function alertPara(){
//     alert("You Have Clicked On Para: " + event.target.textContent)
// }

// for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener("click", alertPara);
// }


//*************** Avoiding Too Many Listener(Third Method) ***************
//Direct Add Listener In Div Because All Para Under The Div.


function alertPara(){
    if(event.target.nodeName === 'SPAN'){
        alert("You Have Clicked On Para: " + event.target.textContent)
    }
}

let  mydiv = document.getElementById("wrapper")
document.addEventListener("click", alertPara) 


