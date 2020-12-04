// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


function Header() {
  const headerContainer = document.querySelector('.header-container')
  const header = document.createElement('div')
  const date = document.createElement('span')
  const h1 = document.createElement('h1')
  const temp = document.createElement('span')

  headerContainer.appendChild(header)
  header.appendChild(date)
  header.appendChild(h1)
  header.appendChild(temp)

  header.classList.add('header')

  date.textContent = 'MARCH 28, 2020'
  h1.textContent = 'Lambda Times'
  temp.textContent = '98°'

  return header;
}
Header()
