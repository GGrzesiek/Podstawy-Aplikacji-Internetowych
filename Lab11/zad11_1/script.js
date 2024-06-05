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
            sessionStorage.setItem(hexCode, colorName);
            hexCodeInput.value = '';
            colorNameInput.value = '';
        }
    });

    showButton.addEventListener('click', () => {
        outputDiv.innerHTML = '';
        for (let i = 0; i < sessionStorage.length; i++) {
            const hexCode = sessionStorage.key(i);
            const colorName = sessionStorage.getItem(hexCode);
            outputDiv.innerHTML += `<p><strong>${hexCode}:</strong> ${colorName}</p>`;
        }
    });

    clearButton.addEventListener('click', () => {
        sessionStorage.clear();
        outputDiv.innerHTML = '';
    });
} else {
    alert("Przepraszamy, Twoja przeglądarka nie obsługuje Web Storage.");
}
