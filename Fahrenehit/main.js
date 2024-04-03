function convert()
{
    let cs=Number(document.getElementById("input").value);
    let fah=(cs/5)+32;
    let result=document.getElementById("result")
    result.innerHTML=fah+" F";

}