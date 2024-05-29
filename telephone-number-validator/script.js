document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const resultsDiv = document.getElementById('results-div');
    
    if (!userInput) {
        alert('Please provide a phone number');
        return;
    }
    
    const isValid = telephoneCheck(userInput);
    if (isValid) {
        resultsDiv.textContent = `Valid US number: ${userInput}`;
        resultsDiv.style.color = 'green';
    } else {
        resultsDiv.textContent = `Invalid US number: ${userInput}`;
        resultsDiv.style.color = 'red';
    }
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('results-div').textContent = '';
    document.getElementById('user-input').value = '';
});

function telephoneCheck(str) {
    const regex = /^([1]\s?)?(\(\d{3}\)|\d{3})([\s.-]?)\d{3}([\s.-]?)\d{4}$/;
    return regex.test(str);
}