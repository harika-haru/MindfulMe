

// Test Assessment
function calculateScore() {
    const form = document.getElementById('questionnaireForm');
    const inputs = form.querySelectorAll('input:checked');
    let score = 0;

    inputs.forEach(input => {
        score += parseInt(input.value);
    });

    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    if (score >= 5) {
        progressBar.style.width = '100%';
        progressText.textContent = 'Severe Depression';
    } else if (score >= 3) {
        progressBar.style.width = '60%';
        progressText.textContent = 'Moderate Depression';
    } else {
        progressBar.style.width = '30%';
        progressText.textContent = 'Mild Depression';
    }
}