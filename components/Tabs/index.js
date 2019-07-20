// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get(' https://lambda-times-backend.herokuapp.com/topics')
  
  .then((data) => {
    const topic = data;
    console.log(data);
    return topic;
  })
  .catch(err => {
    console.log( err, 'You messed up...')
  });

class Tabs {
  constructor(topic) {
    this.topic = topic.querySelector('.tab');
    this.topic.textContext = topic;
  }
}

  const tabs = () => {
    const topic = document.querySelector('.topics');

    const newTabs = document.createElement('div');

    const tabTopic = document.createElement('div');
    tabTopic.classList.add('tab');
    newTabs.appendChild(tabTopic);

    topic.appendChild(newTabs);
    return newTabs;
  }
  
  // console.log(tabs);

  topic.map((topic) => {
    const newTabTopic = new Tabs(
      tabs(),
      topic.topics
    );
    console.log(newTabTopic);
  })
