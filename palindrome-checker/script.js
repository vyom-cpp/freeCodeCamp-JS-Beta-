function palindrome() {
    const input = document.getElementById('text-input').value;
    
    if (input === "") {
        alert("Please input a value");
        return;
    }
    
    const cleanInput = input.replace(/[^a-z0-9]/ig, '').toLowerCase();
    const reversedInput = cleanInput.split('').reverse().join('');
    
    const resultElement = document.getElementById('result');
    if (cleanInput === reversedInput) {
        resultElement.textContent = input + " is a palindrome";
    } else {
        resultElement.textContent = input + " is not a palindrome";
    }
}

document.getElementById('check-btn').addEventListener('click', palindrome);