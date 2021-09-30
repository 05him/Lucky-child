let dob= document.querySelector("#dob");
let lucky= document.querySelector("#lucky");
let btn = document.querySelector("#check-btn");
let clrBtn = document.querySelector('.clear-btn');
let p = document.querySelector("p");
let  body = document.querySelector("body");
let loli = document.querySelector('.loli');
let congo = document.querySelector('.congo');
congo.style.display="none";
loli.style.display="none";
let sum=0;
btn.addEventListener('click',()=>{
    if(dob.value===""){
        p.innerText="🚫🚫Pls Enter the date first ;__;"
        p.style.color="red";
    }
   else if(lucky.value===""){
        p.innerText="🚫🚫Pls Enter the lucky value ;__;"
        p.style.color="red";
    }
    else if(lucky.value<0){
        p.innerText="🚫🚫Pls dont use negative values ;__;"
        p.style.color="red";
    }
     else{
        let finalDob= dob.value.replaceAll("-","");
            for(let i=0;i<finalDob.length;i++){
                sum+=Number(finalDob[i]);
            }
            if(sum%Number(lucky.value)===0){
                p.innerText="Yeee🤩🤩, Your birthday is lucky!!";
            loli.style.display="none";
            congo.style.display="inline";
            }
            else{
                p.innerText="Naah😥, Your birthday is not lucky!! But don't be sad i'm havinng a lolipop for you";
                loli.style.display="inline";
                congo.style.display="none";
            }
       }             
    }
)
clrBtn.addEventListener('click',()=>{
    lucky.value="";
    dob.value="";
    p.innerText="";
    loli.style.display="none";
    congo.style.display="none";
})
