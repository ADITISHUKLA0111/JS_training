
import './App.css';
import { useState } from 'react';

export default function App() {

  // Function to fetch data using callbacks
// Function to fetch data from the API using callbacks
function fetchDataWithCallbacks(callback) {
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
          callback(null, data);
      })
      .catch(error => {
          callback(error, null);
      });
}

// Function to fetch data from the API using promises
function fetchDataWithPromises() {
 
  return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
              if (response.ok) {
                  return response.json();
              }
              throw new Error('Failed to fetch data');
          })
          .then(data => {
              resolve(data);
          })
          .catch(error => {
              reject(error);
          });
  });
}

// Function to display the processed data
function displayData(data) {
  console.log("Processed Data:");
  data.forEach(post => {
      console.log(`Post ID: ${post.id}`);
      console.log(`Title: ${post.title}`);
      console.log(`Body: ${post.body}`);
      console.log("---------------------------------------");
  });
}


function handleP(){
  fetchDataWithPromises()
  .then(data => {
      displayData(data);
  })
  .catch(error => {
      console.error("Error fetching data with promises:", error.message);
  });

}
function handleCallback(){
  fetchDataWithCallbacks((error, data) => {
    console.log("using callback");
    if (error) {
        console.error("Error fetching data with callbacks:", error.message);
    } else {
        displayData(data);
    }
});




}

  return (
<>
     
      <h1>Data Fetching Demo</h1>
    <label><input type="radio" name="method" value="callback" onClick={handleCallback}/> Callbacks</label><br />
    <label><input type="radio" name="method" value="promise"  onClick={handleP}/> Promises</label><br/>
    {/* <label><input type="radio" name="method" value="async" onClick={handleAsync}/> Async/Await</label><br/> */}
    <button id="fetchData">Fetch Data</button>
    <p>In console data is being fetched</p>
    
 
</>
  );}


  
