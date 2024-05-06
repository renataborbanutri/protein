function calculateProtein() {
    var age = document.getElementById('age').value;
    var weight = document.getElementById('weight').value;
    var sex = document.getElementById('sex').value;
    var activity = document.getElementById('activity').value;

    var proteinIntake = calculateBaseProtein(weight, activity, age, sex);

    document.getElementById('result').innerHTML = `Meta diária de proteína: ${proteinIntake.toFixed(0)}`;
}

function calculateBaseProtein(weight, activity, age, sex) {
    var proteinPerKg = 1.6; // baseline for normal adults in grams per kg

    // Adjusting for activity level
    if (activity === 'moderate') {
        proteinPerKg = 1.8;
    } else if (activity === 'high') {
        proteinPerKg = 2;
    }

    // Additional adjustments based on age
    if (age >= 50) {
        proteinPerKg += 0.2; // Older adults might need more protein to prevent muscle loss
    }

    // Adjustments based on sex
    if (sex === 'female') {
        proteinPerKg *= 0.97; // Assuming a slightly lower protein requirement for females
    }

    return weight * proteinPerKg;
}
