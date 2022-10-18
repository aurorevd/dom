const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
};


const clickOnSquare = (e) => 
{
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
};

const doubleSquare = (f) => 
{
  const section1 = document.querySelector('.displayedsquare-wrapper');
  const section2 = document.querySelector('.actionsquare-wrapper');
  const dupNode = document.createElement (`div`);
  section1.appendChild(dupNode);
  dupNode.classList= f.target.classList;

};

const actionSquares = document.querySelectorAll('.actionsquare');

for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);    
}

for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', doubleSquare);    
}


