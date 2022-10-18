var docTitle = document.title;


var newTitle = 'Modifying the DOM!';
document.title = newTitle;
console.log(document.title);


const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  
};
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