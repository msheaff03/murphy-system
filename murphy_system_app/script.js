
let level = 0;
let exp = 0;
let statPoints = 0;
let stats = {
    str: 0,
    agi: 0,
    sta: 0,
    int: 0,
    sen: 0,
    vit: 0,
    luck: 0
};

function updateUI() {
    document.getElementById('level').innerText = level;
    document.getElementById('exp').innerText = exp;
    document.getElementById('statPoints').innerText = statPoints;
    for (let key in stats) {
        document.getElementById(key).innerText = stats[key];
    }
}

function gainExp() {
    exp += 25;
    if (exp >= 100) {
        exp -= 100;
        level += 1;
        statPoints += 5;
        alert("Level Up! Stat Points awarded.");
    }
    updateUI();
}

updateUI();
