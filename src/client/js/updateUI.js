const updateUI = (data) => {

    const resultDiv = document.querySelector('.analysis-results');
    const statusContent = document.querySelector('.status-content');
    const subContent = document.querySelector('.sub-content');
    const agreementContent = document.querySelector('.agreement-content');
    const confidenceContent = document.querySelector('.confidence-content');
    const ironyContent = document.querySelector('.irony-content');



    resultDiv.classList.add('result-holder');
    statusContent.innerHTML = 'Score tag of the content is: <span class="bold">' + data.score_tag + '</span>';
    subContent.innerHTML = 'Subjectivity: <span class="bold">' + data.subjectivity + '</span>';
    agreementContent.innerHTML = 'Agree/Disagree: <span class="bold">' + data.agreement + '</span>';
    confidenceContent.innerHTML = 'Confidence Rating: <span class="bold">' + data.confidence + '</span>';
    ironyContent.innerHTML = 'Irony: <span class="bold">' + data.irony + '</span>';

    return;

}

export { updateUI }