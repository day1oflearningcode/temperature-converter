const degreeInput = document.getElementById('degree-input');
const sourceUnit = document.getElementById('source-unit');
const targetUnit = document.getElementById('target-unit');
const convertButton = document.getElementById('convert-button');
const resultValue = document.querySelector('.result-value');
const resultUnit = document.querySelector('.result-unit');

const UNIT_SYMBOLS = {
    c: '°C',
    f: '°F',
    k: 'K'
};

function convertTemperature(value, from, to) {
    if (from === to) return value;

    let celsius;
    if (from === 'c') {
        celsius = value;
    } else if (from === 'f') {
        celsius = ((value - 32) * 5) / 9;
    } else if (from === 'k') {
        celsius = value - 273.15;
    }

    if (to === 'c') {
        return celsius;
    } else if (to === 'f') {
        return (celsius * 9) / 5 + 32;
    } else if (to === 'k') {
        return celsius + 273.15;
    }
}

function updateDegreeDisplay() {
    const rawValue = degreeInput.value;

    if (rawValue.trim() === '' || isNaN(rawValue)) {
        resultValue.textContent = '--';
        return;
    }

    const inputDegree = parseFloat(rawValue);
    const from = sourceUnit.value;
    const to = targetUnit.value;

    const converted = convertTemperature(inputDegree, from, to);

    if (converted % 1 === 0) {
        resultValue.textContent = converted;
    } else {
        resultValue.textContent = converted.toFixed(1);
    }

    resultUnit.textContent = UNIT_SYMBOLS[to];
}

degreeInput.addEventListener('input', updateDegreeDisplay);
sourceUnit.addEventListener('change', updateDegreeDisplay);
targetUnit.addEventListener('change', updateDegreeDisplay);
convertButton.addEventListener('click', updateDegreeDisplay);

updateDegreeDisplay();