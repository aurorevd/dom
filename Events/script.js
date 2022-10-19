const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
};

const clickOnSquare = (e) => 
{
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
};

const section1 = document.querySelector('.displayedsquare-wrapper');
const section3 = document.querySelector('.action-log');
const ul = document.querySelector("ul");
const vert = document.querySelector('.green');
const violet = document.querySelector('.violet');
const orange = document.querySelector('.orange');

const blanccls = ["actionsquare", "blanc"];

const vert1 = document.createElement (`div`);
vert1.classList.add(...blanccls);
section1.appendChild(vert1);


const violet1 = document.createElement (`div`);
violet1.classList.add(...blanccls);
section1.appendChild(violet1);

const orange1 = document.createElement (`div`);
orange1.classList.add(...blanccls);
section1.appendChild(orange1);

  
const doubleSquare = (f) => 
{ 
if (f.target.parentElement.classList.contains( 'actionsquare-wrapper' )&& f.target.classList.contains('green'))
  { if (vert1.className==("actionsquare green"))
     { const dupvert = document.createElement (`div`);
      dupvert.className=("actionsquare green");;
      section1.appendChild(dupvert); 
      }
      else
      {vert1.className=("actionsquare green");
      } 
   } 

else if (f.target.parentElement.classList.contains( 'actionsquare-wrapper' )&& f.target.classList.contains('violet'))
  { if (violet1.className==("actionsquare violet"))
     { 
      const dupviolet = document.createElement (`div`);
      const dupvioletcls = ["actionsquare", "violet"];
      dupviolet.classList.add(...dupvioletcls);
      section1.appendChild(dupviolet); 
      }
    else
      {
        violet1.className=("actionsquare violet");
      }
   } 

else if (f.target.parentElement.classList.contains( 'actionsquare-wrapper' )&& f.target.classList.contains('orange'))
  { if (orange1.className==("actionsquare orange"))
     { 
      const duporange = document.createElement (`div`);
      const duporangecls = ["actionsquare", "orange"];
      duporange.classList.add(...duporangecls);
      section1.appendChild(duporange); 
      }
      else
      {
        orange1.className=("actionsquare orange");
      }
  }   
};


const showevent=(g)=>
{
  if (g.target.className==("actionsquare violet"))
  {
    const liviolet = document.createElement (`li`);
    ul.appendChild(liviolet);
    const textliviolet = document.createTextNode( getElapsedTime () +" "+ "Created a new violet square");
    liviolet.appendChild(textliviolet); 
  }
  else if (g.target.className==("actionsquare green"))
  {
    const livert = document.createElement (`li`);
    ul.appendChild(livert);
    const textlivert = document.createTextNode( getElapsedTime () +" "+"Created a new green square");
    livert.appendChild(textlivert); 
  }
  else 
  {
    const liorange = document.createElement (`li`);
    ul.appendChild(liorange);
    const textliorange = document.createTextNode( getElapsedTime () +" "+"Created a new orange square");
    liorange.appendChild(textliorange); 
  }
}; 

const ecran =(h)=>
{   
  if( h.target.parentElement.classList.contains( 'displayedsquare-wrapper' )&& h.target.classList.contains('green'))
  {
    alert("Vert!");
  }
  else if ( h.target.parentElement.classList.contains( 'displayedsquare-wrapper' )&& h.target.classList.contains('orange'))
  {
    alert("Orange!");
  }
  else if( h.target.parentElement.classList.contains( 'displayedsquare-wrapper' )&& h.target.classList.contains('violet'))
  {
    alert("Violet");
  }
};


const actionSquares = document.querySelectorAll('.actionsquare');

for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);    
}

for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', doubleSquare);    
}
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', ecran );    
}
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', showevent );    
}





