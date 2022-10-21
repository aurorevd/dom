//<input type="text" name="firstname" id="firstname"/>
    //  <span id="display-firstname"></span>
 
const input1=document.getElementById("firstname");
const output1=document.getElementById("display-firstname");

const input2=document.getElementById("age");
const section2=document.getElementById("a-hard-truth");

input1.addEventListener("keyup", () => {
output1.textContent = input1.value;
});



input2.addEventListener("keyup", () => 
{
 if (input2.value < 18){
        section2.style.visibility = "hidden";
    } 
    else if (input2.value > 18)
    {
    section2.style.visibility = "visible";
    }   
});

const input3=document.getElementById("pwd");
const input4=document.getElementById("pwd-confirm");

input3.addEventListener("keyup", () => 
{
 if (input3.value.length < 6){
    input3.style.backgroundColor="red";}
else {input3.style.backgroundColor="white";}      
});

input4.addEventListener("keyup", () => 
{
 if (input4.value != input3.value ){
    input4.style.color="red";
    }
 else  
    {
    input4.style.color="black";
    }  
});

const input5=document.getElementById("toggle-darkmode");

input5.addEventListener('change', (event) => {
if (input5.value=="dark")
   {
    document.body.style.backgroundColor="#000000";
    document.body.style.color="#FFFFFF";
    } 
else
    {
    document.body.style.backgroundColor="#FFFFFF";
    document.body.style.color="#000000";
}
});
console.log(input5.value);