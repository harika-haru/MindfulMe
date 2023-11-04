
function myFunction() {
    window.location.href = "main.html";
}
function incrementStepCount() {
    stepCount++;
    document.getElementById("step-count").innerText = stepCount;
}

function incrementWaterAmount() {
    waterAmount += 250; // Increment water by 250ml
    document.getElementById("water-amount").innerText = waterAmount;
}

function saveJournalEntry() {
    const journalEntryText = document.getElementById("journal-entry").value;
    if (journalEntryText.trim() === "") {
        alert("Please enter a journal entry.");
        return;
    }

    const timestamp = new Date().toLocaleString();
    const journalEntry = {
        text: journalEntryText,
        timestamp: timestamp,
    };

    // Create a new journal entry
    createJournalEntry(journalEntry);

    // Clear the input field
    document.getElementById("journal-entry").value = "";
}

function createJournalEntry(entry) {
    const journalList = document.getElementById("journal-list");
    const li = document.createElement("li");
    li.innerHTML = `
        <p>${entry.text}</p>
        <small>${entry.timestamp}</small>
        <button onclick="deleteJournalEntry(this)">Delete</button>
    `;
    journalList.appendChild(li);
}

function deleteJournalEntry(button) {
    const li = button.parentElement;
    li.remove();
}

function addTodoTask() {
    const taskText = document.getElementById("new-task").value;
    if (taskText) {
        const todoList = document.getElementById("todo-list");
        const li = document.createElement("li");
        li.innerText = taskText;
        todoList.appendChild(li);
        document.getElementById("new-task").value = "";
    }
}