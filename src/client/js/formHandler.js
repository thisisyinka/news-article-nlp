const button = document.querySelector('button');
const resultDiv = document.querySelector('.analysis-results');
const statusContent = document.querySelector('.status-content');
const subContent = document.querySelector('.sub-content');
const agreementContent = document.querySelector('.list-content');
const confidenceContent = document.querySelector('.confidence-content');
const ironyContent = document.querySelector('.irony-content');
const urlContent = document.querySelector('.url-content');
const errorsContent = document.querySelector('.errors');



const formOptions = {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    }
}


const analyseLanguage = e => {
    e.preventDefault();

    let theURL = document.getElementById('theurl').value;

    if(isUrlValid) {
        fetch('http://localhost:8001/entry', {
            ...formOptions, 
            body: JSON.stringify({url: theURL})
        })
            .then(res => res.json())
            .then(res => updateUI(res))
    } else {
        errorsContent.textContent = 'Your URL looks incorrect. Please try again!';
    }
}

//URL Validation gotten from DEV.to (https://dev.to/calvinpak/simple-url-validation-with-javascript-4oj5)
const isUrlValid = (url) => {
    try {
      new URL(url);
    } catch(error) {
        console.log("This URL is not valid!", error);
    }
    return;
}


const updateUI = (response) => {
    resultDiv.classList.add('result-holder');
    statusContent.innerHTML = response.status.msg;
    subContent.textContent = `Subjectivity: ${response.subjectivity}`;
    agreementContent.textContent = response.agreement;
    confidenceContent.textContent = `The score of this content is ${response.confidence}`;
    ironyContent.textContent = `Irony: ${response.irony}`
    urlContent.textContent = `From: ${response.url}`;
}

export { analyseLanguage }