/* Combat Code */ 


function roll1D4() {
    return Math.floor(Math.random() * 4 + 1)
}

function roll1D6() {
    return Math.floor(Math.random() * 6 + 1)
}

function roll1D8() {
    return Math.floor(Math.random() * 8 + 1)
}

function roll1D10() {
    return Math.floor(Math.random() * 10 + 1)
}

function roll1D12() {
    return Math.floor(Math.random() * 12 + 1)
}

function roll1D20() {
    return Math.floor(Math.random() * 20 + 1)
}

console.log(roll1D4());
console.log(roll1D6());
console.log(roll1D8());
console.log(roll1D10());
console.log(roll1D12());
console.log(roll1D20());