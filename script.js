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






    Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
    If the background is dark the text should be white, if the background is light the text should be black
    Find a way so that everytime you load the page the order of the elements changes!
   ((0.3 * r) + (0.59 * g) + (0.11 * b) <= 128) ? '#FFF' : '#000';

*/


const article=document.querySelector("article");
var sectionEl= document.createElement( "section" );
article.appendChild( sectionEl );

var pEl= document.createElement( "p" );
sectionEl.appendChild( pEl );
var pText= document.createTextNode( "Lorem" );
pEl.appendChild( pText );
console.log( pEl.childNodes.length );
console.log( pEl.childNodes[0].nodevalue );
console.log(pEl.innerHTML);



    let r = Math.floor(Math.random() * 255); 
    let g = Math.floor(Math.random() * 255); 
    let b = Math.floor(Math.random() * 255); 
    console.log(r,g,b); 
    const randomColor=(r,g,b);
    sectionEl.style.background = 'rgb('+ r +','+ g +' , '+ b +')'; 
    if (r<125 || g<125 || b<125)
    {
    sectionEl.style.color= 'rgb(250,250,250)';
    }
    else
    {
    sectionEl.style.color='rgb(0,0,0)';
    } 

    



/*

const prompt = require('prompt-sync')();


let name = prompt('NAME?');
$ {name}
*/






