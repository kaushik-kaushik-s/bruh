let currentColor = 'red';
let currentNumber = 0;

function loadNumbers() {
    const savedNumbers = JSON.parse(localStorage.getItem('savedNumbers')) || [];
    const savedNumbersContainer = document.getElementById('savedNumbers');
    savedNumbersContainer.innerHTML = '';

    savedNumbers.forEach(item => {
        const numberElement = document.createElement('div');
        numberElement.className = 'saved-number';
        numberElement.style.backgroundColor = item.color;
        numberElement.innerText = item.number;
        savedNumbersContainer.appendChild(numberElement);
    });
}

function selectColor(color) {
    currentColor = color;
    document.getElementById('numberDisplay').style.backgroundColor = color;
}

function increment() {
    currentNumber++;
    document.getElementById('numberDisplay').innerText = currentNumber;
}

function decrement() {
    currentNumber--;
    document.getElementById('numberDisplay').innerText = currentNumber;
}

function saveNumber() {
    const savedNumbers = JSON.parse(localStorage.getItem('savedNumbers')) || [];

    const newNumber = {
        number: currentNumber,
        color: currentColor
    };

    savedNumbers.unshift(newNumber); 

    localStorage.setItem('savedNumbers', JSON.stringify(savedNumbers));

    loadNumbers();
}
