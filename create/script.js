/* var docTitle = document.title

Change the document title to Modifying the DOM 

var newTitle = 'Modifying the DOM!';
document.title = newTitle
console.log(document.title)


const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  
}
setBg ();

let x = Math.floor(Math.random() * 255); let y = Math.floor(Math.random() * 255); let z = Math.floor(Math.random() * 255); console.log(x,y,z); body.style.background = 'rgb('+ x +','+ y +' , '+ z +')'; 


function display()
{
        var element = document.querySelector("body");
        var children = element.children;
        for(var i=0; i<children.length; i++)
        { 
        	var child = children[i];
            console.log(child);
		}
}

display();


const elements = document.querySelectorAll(".important");
for(var i=0; i<elements.length; i++)
        { 	
        var ele=elements[i];
        ele.title = "This is an important item";	
		}





	
const images = document.querySelectorAll("img");


for (let element of images) {
    if (element.classList.contains("important")){
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}


*/

	
const paragraphes = document.querySelectorAll("p");

for (let element of paragraphes) 
{ 	console.log(element.innerText)
	console.log(element.className)
}
Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.


const paragraphes = document.querySelectorAll("p");
const randomColor = Math.floor(Math.random()*16777215).toString(16);
for (let element of paragraphes) 
{ element.style.color = "#" + randomColor;};






    










