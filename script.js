// Journal 
let completedTasks = 0;

function saveJournalEntry() {
    var journalText = document.getElementById('journal-text').value;

    if (journalText.trim() !== '') {
        var entryList = document.getElementById('entry-list');
        var entryItem = document.createElement('li');
        entryItem.textContent = journalText;
        entryList.appendChild(entryItem);

        document.getElementById('journal-text').value = '';
    }
}

function saveStepCount() {
    var stepCount = document.getElementById('step-count').value;

    if (stepCount !== '') {
        var stepCountDisplay = document.createElement('p');
        stepCountDisplay.textContent = 'Steps: ' + stepCount;

        var stepTrackerDiv = document.querySelector('.step-tracker');
        stepTrackerDiv.appendChild(stepCountDisplay);

        document.getElementById('step-count').value = '0';
    }
}

function saveWaterIntake() {
    var waterAmount = document.getElementById('water-amount').value;

    if (waterAmount !== '') {
        var waterAmountDisplay = document.createElement('p');
        waterAmountDisplay.textContent = 'Water Intake: ' + waterAmount + ' oz';

        var waterTrackerDiv = document.querySelector('.water-tracker');
        waterTrackerDiv.appendChild(waterAmountDisplay);

        document.getElementById('water-amount').value = '0';
    }
}

function addToDo() {
    var todoItem = document.getElementById('todo-item').value;

    if (todoItem.trim() !== '') {
        var todoList = document.getElementById('todo-list');
        var todoItemElement = document.createElement('li');
        todoItemElement.textContent = todoItem;
        todoList.appendChild(todoItemElement);

        document.getElementById('todo-item').value = '';
        updateProgressBar();
    }
}

function updateProgressBar() {
    completedTasks++;
    var progressBar = document.getElementById('progress-bar');
    var totalTasks = document.querySelectorAll('.to-do-list li').length;
    var percentage = (completedTasks / totalTasks) * 100;
    progressBar.value = percentage;

    if (percentage >= 100) {
        alert('Congratulations! You have completed all tasks.');
    }
}

//  Depression Test Assessment

function calculateScores() {
    // Get the form and all checked inputs
    const form = document.getElementById('questionnaireForm');
    const inputs = form.querySelectorAll('input:checked');
    
    // Initialize the score
    let score = 0;

    // Calculate the score
    inputs.forEach(input => {
        score += parseInt(input.value);
    });

    // Display the score for debugging purposes
    console.log(score);

    // Get the progress elements
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    // Set progress based on the score
    if (score >= 650) {
        progressBar.style.width = '100%';
        progressText.textContent = 'Severe Depression';
    } else if (score >= 600) {  // Changed this condition to >= for consistency
        progressBar.style.width = '60%';
        progressText.textContent = 'Moderate Depression';
    } else if (score >= 200) {  // Changed this condition to >= for consistency
        progressBar.style.width = '30%';
        progressText.textContent = 'Mild Depression';
    } else {
        progressBar.style.width = '0%';
        progressText.textContent = 'No Depression';
    }
}


// Stress 

function calculateScore() {
    // Get the form and all checked inputs
    const form = document.getElementById('stressassessment');
    const inputs = form.querySelectorAll('input:checked');
    
    // Initialize the score
    let score = 0;

    // Calculate the score
    inputs.forEach(input => {
        score += parseInt(input.value);
    });

    // Display the score for debugging purposes
    console.log(score);

    // Get the progress elements
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    // Set progress based on the score
    if (score >= 650) {
        progressBar.style.width = '100%';
        progressText.textContent = 'High Stress';
    } else if (score >= 600) {  // Changed this condition to >= for consistency
        progressBar.style.width = '60%';
        progressText.textContent = 'Moderate Stress';
    } else if (score >= 200) {  // Changed this condition to >= for consistency
        progressBar.style.width = '30%';
        progressText.textContent = 'Low Stress';
    } else {
        progressBar.style.width = '0%';
        progressText.textContent = 'No Stress';
    }
}


// Hide and show
function toggleTopic(topicId) {
    var topicContent = document.getElementById(topicId);
    if (topicContent.style.display === "none") {
        topicContent.style.display = "block";
    } else {
        topicContent.style.display = "none";
    }
}
// therapy
