// Morse code dictionary
const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '/'
};

// Function to encode text to Morse code
function encodeToMorse(text) {
    return text.split('').map(char => morseCode[char.toUpperCase()] || char).join(' ');
}

// Function to decode Morse code to text
function decodeToText(morse) {
    return morse.split(' ').map(code => {
        for (let char in morseCode) {
            if (morseCode[char] === code) {
                return char;
            }
        }
        return code; // If not found, keep the original code
    }).join('');
}

// Event listeners
const encodeButton = document.getElementById('encode');
const decodeButton = document.getElementById('decode');
const resultDiv = document.getElementById('result');
const textInput = document.getElementById('text');

encodeButton.addEventListener('click', () => {
    const text = textInput.value;
    const morse = encodeToMorse(text);
    resultDiv.textContent = `Morse Code: ${morse}`;
});

decodeButton.addEventListener('click', () => {
    const morse = textInput.value;
    const text = decodeToText(morse);
    resultDiv.textContent = `Decoded Text: ${text}`;
});
