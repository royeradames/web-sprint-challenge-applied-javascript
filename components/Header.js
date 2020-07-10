// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
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
    //init elements
    const header = document.createElement('div')
    header.classList.add('header')

    const date = document.createElement('span')
    date.classList.add('data')
    date.textContent = `MARCH 28, 2020`

    const h1 = document.createElement('h1')
    h1.textContent = `Lambda Times`

    const temp = document.createElement9('span')
    temp.classList.add('temp')
    temp.textContent = `98°`

    //append child element to parent element
    header.appendChild(date)
    header.appendChild(h1)
    header.appendChild(temp)

    //append element to page
    const headerContainer = document.querySelector('div.header-container')
    headerContainer.appendChild(header)
    
}
