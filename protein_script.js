function calculateProtein() {
    var age = document.getElementById('age').value;
    var weight = document.getElementById('weight').value;
    var sex = document.getElementById('sex').value;
    var activity = document.getElementById('activity').value;

    var proteinIntake = calculateBaseProtein(weight, activity);

    document.getElementById('result').innerHTML = `Recommended daily protein intake: ${proteinIntake.toFixed(2)} grams.`;
}

function calculateBaseProtein(weight, activity) {
    var proteinPerKg = 0.8; // baseline for normal adults in grams per kg

    if (activity === 'moderate') {
        proteinPerKg = 1.3;
    } else if (activity === 'high') {
        proteinPerKg = 1.6;
    }

    return weight * proteinPerKg;
}
