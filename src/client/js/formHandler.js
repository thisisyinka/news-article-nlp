import { updateUI } from './updateUI';
const loading = document.querySelector('.loading');
const bad = document.querySelector('.bad');
const good = document.querySelector('.good');
const statusContent = document.querySelector('.status-content');
const subContent = document.querySelector('.sub-content');
const agreementContent = document.querySelector('.agreement-content');
const confidenceContent = document.querySelector('.confidence-content');
const ironyContent = document.querySelector('.irony-content');


import axios from 'axios';


const formOptions = {
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    }
}

//URL Validation gotten from CP's article on DEV.to (https://dev.to/calvinpak/simple-url-validation-with-javascript-4oj5)
const isUrlValid = (url) => {
    try {
      new URL(url);
    } catch(error) {
        console.log("This URL is not valid!", error);
        bad.textContent = 'Your URL looks incorrect. Please try again!';
        return false;
    }
    good.textContent = 'Your URL looks good!';
    return true;
}


const analyseLanguage = e => {
    e.preventDefault();

    const theURL = document.getElementById('theurl').value;
    loading.textContent = 'Loading...';
    bad.textContent = '';

    if(isUrlValid(theURL)) {
        axios.post('http://localhost:8001/entry', {
            ...formOptions,
            url: theURL
        })
        .then(function(response) {
            loading.textContent = '';
            good.textContent = '';
            console.log(response);
            updateUI(response.data);
        })
        .catch(function (error) {
            console.log("Something went wrong! Please try again!", error);
        })
    } else {
        loading.textContent = 'No response!';
        statusContent.innerHTML = '';
        subContent.innerHTML = '';
        agreementContent.innerHTML = '';
        confidenceContent.innerHTML = '';
        ironyContent.innerHTML = '';
    }
}

export { analyseLanguage }