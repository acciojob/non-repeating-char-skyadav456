function firstNonRepeatedChar(str) {

    if (!str) {
        return null;
    }

    const frequency = {};

    // Count frequency of each character
    for (const char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    // Find first non-repeated character
    for (const char of str) {
        if (frequency[char] === 1) {
            return char;
        }
    }

    return null;
}

const input = prompt("Enter a string:");

const result = firstNonRepeatedChar(input);

if (result === null) {
    alert("null");
} else {
    alert( result);
}
