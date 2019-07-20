// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  const headContainer = document.querySelector('header-container');

  const headDiv = document.createElement('div');
  headDiv.classList.add('header-div');

  const date = document.createElement('span');
  date.classList.add('date');

  const title = document.createElement('h1');
  title.classList.add('header-title');

  const temp = document.createElement('span');
  temp.classList.add('header-temp');
  
}
