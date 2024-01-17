/* Combat Code */ 

//Test Character

const player = {
    name: "Guy",
    health: 20,
    armor: 10
}

const monster = {
    name: "Goblin",
    health: 20,
    armor: 5
}


//Die Rolls

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

/* Roll Checks */
function thatHitMeQ(init, target, hitRoll, dmgRoll) {
    let rollResult = hitRoll()
    if (target.armor < rollResult) {
        let hitResult = dmgRoll()
        target.health - hitResult
        return `${init.name} hit ${target.name} and did ${hitResult} Damage`
    }else {
        return "Miss"
    }
}

console.log(thatHitMeQ(player,monster,roll1D20,roll1D10));


console.log(roll1D4());
console.log(roll1D6());
console.log(roll1D8());
console.log(roll1D10());
console.log(roll1D12());
console.log(roll1D20());