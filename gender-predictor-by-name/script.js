async function predictGender() {
    const name = document.getElementById('nameInput').value.trim();
    const resultElement = document.getElementById('result');
    if (name === '') {
        resultElement.textContent = 'Please enter a name.';
        return;
    }

    try {
        const response = await fetch(`https://api.genderize.io?name=${name}`);
        const data = await response.json();

        if (data.gender) {
            resultElement.innerHTML = `The predicted gender for the name "${name}" is <strong>${data.gender}</strong>.`;
        } else {
            resultElement.textContent = `Could not predict the gender for the name "${name}".`;
        }
    } catch (error) {
        resultElement.textContent = 'An error occurred while predicting the gender.';
    }
}