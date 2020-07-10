// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const url = `https://lambda-times-backend.herokuapp.com/topics`
axios.get(url)
.then((urlObjData) =>{
    const topicsArr = urlObjData.data.topics
    const topics = document.querySelector('div.topics')
    topicsArr.forEach(element => {
        const tab = document.querySelector('div')
        tab.classList.add('tab')
        tab.textContent = element
        topics.appendChild(tab)
        // console.log(tab)
        // console.log(topics)
        // debugger
    });
})
.catch(err =>{
    // debugger
    console.log(`Found error ${err}`)
})