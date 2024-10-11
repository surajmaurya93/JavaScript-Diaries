// Code 1

const t1 = performance.now()
for (i=1; i<=100; i++){
    let para = document.createElement("p");
    para.textContent = "This Is Para" + i;
    document.body.appendChild(para)
}
const t2 = performance.now()
console.log("This Time Taken By Code Execute: " + (t2-t1));
//outpur: 1.3999999985098839


//Code 2

const t3 = performance.now()
let mydiv = document.createElement("div")

for(i=1; i<=100; i++){
    let para = document.createElement("p");
    para.textContent = "This Is Para" + i;
    mydiv.appendChild(para);
}

document.body.appendChild(mydiv);
const t4 = performance.now()

console.log("This Time Taken By Code Execute: " + (t4-t3));

//outpur: 0.6999999955296516


// Best Code

const t5 = performance.now()
let fragment = document.createDocumentFragment();

for(i=1; i<=100; i++){
    let para = document.createElement("p") 
    para.textContent = "This Is Para" + i + "abc";
    //No reflow and No repaint for the below line
    fragment.appendChild(para); 
}


//the below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment);
const t6 = performance.now()

console.log("This Time Taken By Code Execute: " + (t6-t5));

//outpur: 0.7000000029802322