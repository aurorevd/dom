

const ul =document.querySelector("ul");

const fffirst=()=>
{
	if (ul.hasChildNodes()) 
	{
  		let children = ul.childNodes;

  		for (const node of children) 
  
  		{
  			if(node.nodeType === 1 && node.textContent === "Fast and Furious")
  			{
			ul.prepend(node);
			node.classList="important";
  			}
		}
	}
};

fffirst();

const li =ul.querySelectorAll("li");
fast=li[0];
li.forEach((element) => 
{
	element.addEventListener("click", () =>
	{
		alert(element.textContent);
	if (element===fast) 
	{
		alert("The most important franchise ever, the story of DOM(inic) Torettos'family. It's not about car. It's about family.");
	}
});
});


for (i=0;i<li.length;i++) {
    for (j=0;j<li.length;j++) 
    	{
        if (i!=j && li[i].textContent === li[j].textContent){
            ul.removeChild(li[j]);
        }
    }
}


const div=document.createElement("div");
document.body.insertBefore(div, ul);

const select=document.createElement("select");
div.appendChild(select);

const option1=document.createElement("option");
select.appendChild(option1);
option1.value="normal franchise";
const textnode1=document.createTextNode("normal franchise");
option1.appendChild(textnode1);

const option2=document.createElement("option");
select.appendChild(option2);
option2.value="important franchises";
const textnode2=document.createTextNode("important franchises");
option2.appendChild(textnode2);


//Add an eventListener to the <select>, on change, if the option "important franchise" is chosen, only display items of the list that have the class .important. (hint: you can toggle visibility using element.style.visibility = 'hidden')





select.addEventListener('change', (event) => 
{
	if (select.value===option2.value)
   	{ li.forEach((lis) =>  
				{
					if (lis.classList!="important")
    			{
    				lis.style.visibility="hidden";
    			}
    		 else
    		 	{
    		 		lis.style.visibility="visible";
    		 	}
    		});
		}
	else
   	{ li.forEach((element) =>  
				{element.style.visibility="visible";
    		} );
		}
});



