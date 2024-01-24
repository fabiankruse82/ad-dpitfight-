
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
        target.health -= hitResult
        console.log(`${init.name} hit ${target.name} and did ${hitResult} Damage`) 
    }else {
        console.log("Miss"); 
    }
}


// Combat Schleife 

function turns(player, monster, playerHitRoll, playerDmgRoll, monsterHitRoll, monsterDmgRoll) {
    while (player.health > 0 && monster.health > 0) {
        thatHitMeQ(player, monster, playerHitRoll, playerDmgRoll);
    
        if (monster.health <= 0) {
            return `${monster.name} has been defeated!`;
        }
    
        thatHitMeQ(monster, player, monsterHitRoll, monsterDmgRoll);
    
        if (player.health <= 0) {
            return `${player.name} has been defeated!`;
        }
    }
}

console.log(turns(player, monster, roll1D20, roll1D10, roll1D12, roll1D6));