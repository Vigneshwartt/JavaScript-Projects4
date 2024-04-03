const wrap=document.getElementById("wrapper")
const color=document.getElementById("color")
const btn=document.getElementById("btn")
let hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',function(){
let hexs='#'
for(let i=1;i<=6;i++)
{
    hexs+=randomHex()
}
wrap.style.backgroundColor=hexs
color.innerHTML=hexs
})
function randomHex(){
    let random=Math.floor(Math.random()*16)
    return hex[random]
}