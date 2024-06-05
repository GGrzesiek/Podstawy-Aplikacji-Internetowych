const hexCodeInput = document.getElementById('hexCode');
const colorNameInput = document.getElementById('colorName');
const saveButton = document.getElementById('savePair');
const showButton = document.getElementById('showPairs');
const clearButton = document.getElementById('clearData');
const outputDiv = document.getElementById('output');

if (typeof(Storage) !== "undefined") {
    saveButton.addEventListener('click', () => {
        const hexCode = hexCodeInput.value.trim();
        const colorName = colorNameInput.value.trim();
        if (hexCode && colorName) {
            localStorage.setItem(hexCode, colorName);
            hexCodeInput.value = '';
            colorNameInput.value = '';
        }
    });

    showButton.addEventListener('click', () => {
        outputDiv.innerHTML = '';
        for (let i = 0; i < localStorage.length; i++) {
            const hexCode = localStorage.key(i);
            const colorName = localStorage.getItem(hexCode);
            outputDiv.innerHTML += `<p><strong>${hexCode}:</strong> ${colorName}</p>`;
        }
    });

    clearButton.addEventListener('click', () => {
        localStorage.clear();
        outputDiv.innerHTML = '';
    });
} else {
    alert("Przepraszamy, Twoja przeglądarka nie obsługuje Web Storage.");
}
