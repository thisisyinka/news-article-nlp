const button = document.querySelector('button');
const resultDiv = document.querySelector('.analysis-results');
const statusContent = document.querySelector('.status-content');
const subContent = document.querySelector('.sub-content');
const agreementContent = document.querySelector('.agreement-content');
const confidenceContent = document.querySelector('.confidence-content');
const ironyContent = document.querySelector('.irony-content');
const errorsContent = document.querySelector('.errors');

import axios from 'axios';


const formOptions = {
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    }
}


const analyseLanguage = e => {
    e.preventDefault();

    const theURL = document.getElementById('theurl').value;
    const isUrlValid = new URL(theURL);

    if(isUrlValid) {
        axios.post('http://localhost:8001/entry', {
            ...formOptions,
            url: theURL
        })
        .then(function(response) {
            console.log(response);
            updateUI(response);
        })
        .catch(function (error) {
            console.log("This URL is not valid!", error);
        })
    } else {
        errorsContent.textContent = 'Your URL looks incorrect. Please try again!';
    }
}


const updateUI = (data) => {
    resultDiv.classList.add('result-holder');
    statusContent.innerHTML = data.status.msg;
    subContent.innerHTML = `Subjectivity: ${data.subjectivity}`;
    agreementContent.textContent = data.agreement;
    confidenceContent.textContent = `The score of this content is ${data.confidence}`;
    ironyContent.textContent = `Irony: ${rdata.irony}`;
    return;
}

export { analyseLanguage }