// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
axios
    .get('https://lambda-times-api.herokuapp.com/topics')
    .then(res => {
      const tabsData = res.data.topics
      const topicContainer = document.querySelector('.topics')
      topicContainer.append(tabMaker(tabsData))
      console.log(tabsData)
    })
    .catch(err => {
      console.log(err)
    })

    function tabMaker(data) {
      const topics = document.querySelector('.topics')
      
      data.forEach(item => {
        const tab = document.createElement('div')
        tab.classList.add('tab')
        tab.textContent = item
        topics.append(tab)
      })
    }

    // tabsData.forEach(tab => {
      //   const tabs = document.createElement('div')
      //   tabs.classList.add('tab')
      //   entryPoint.appendChild(tabs)
      // })