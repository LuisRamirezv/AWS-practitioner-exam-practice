let examDuration = 120 * 60; // 120 minutes
let countdownInterval;
let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");
const resultDiv = document.getElementById("result");
const progressFill = document.getElementById("progressFill");
const questionListItems = document.getElementById("questionListItems");

function formatTime(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function startTimer() {
  const timerDisplay = document.getElementById("timer");
  countdownInterval = setInterval(() => {
    examDuration--;
    if (examDuration <= 0) {
      clearInterval(countdownInterval);
      timerDisplay.textContent = "Time's up!";
      nextBtn.disabled = true;
      resultDiv.textContent = "Time's up! Exam ended.";
    } else {
      timerDisplay.textContent = `Time Remaining: ${formatTime(examDuration)}`;
    }
  }, 1000);
}

function startExam() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("examContent").style.display = "flex";
  startTimer();
  populateQuestionList();
  showQuestion(currentQuestion);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("startExamBtn").addEventListener("click", startExam);
});

function showQuestion(index) {
  const q = questions[index];
  let html = `<div class="question">
      <p>${index + 1}. ${q.question}</p>
      <div class="options">`;

  q.options.forEach((opt) => {
    html += `
      <div class="card-container">
        <div class="card">
          <div class="card-front">${opt}</div>
          <div class="card-back">${opt === q.answer ? 'Correct!' : 'Wrong!'}</div>
        </div>
      </div>`;
  });

  html += `</div></div>`;
  questionContainer.innerHTML = html;

  updateProgressBar();
  highlightCurrentInList(index);

  // Attach flip functionality to the card elements
  const cards = document.querySelectorAll('.card-container');
  cards.forEach(card => {
    card.addEventListener('click', () => flipCard(card));
  });
}

function getSelectedOption() {
  const selected = document.querySelector('input[name="option"]:checked');
  return selected ? selected.value : null;
}

function updateProgressBar() {
  const percent = (currentQuestion / questions.length) * 100;
  progressFill.style.width = `${percent}%`;
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  resultDiv.textContent = "";
  nextBtn.style.display = "inline-block";
  tryAgainBtn.style.display = "none";
  showQuestion(currentQuestion);
}

nextBtn.addEventListener("click", () => {
  const selected = getSelectedOption();

  if (!selected) {
    alert("Please select an answer!");
    return;
  }

  if (selected === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    questionContainer.innerHTML = "";
    nextBtn.style.display = "none";
    tryAgainBtn.style.display = "inline-block";
    progressFill.style.width = `100%`;
    resultDiv.textContent = `You scored ${score} out of ${questions.length}`;
  }
});

backBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
});

tryAgainBtn.addEventListener("click", resetQuiz);

function populateQuestionList() {
  questions.forEach((_, idx) => {
    const li = document.createElement("li");
    const button = document.createElement("button");

    button.textContent = `${idx + 1}`;
    button.addEventListener("click", () => {
      currentQuestion = idx;
      showQuestion(currentQuestion);
    });

    li.appendChild(button);
    questionListItems.appendChild(li);
  });
}

function highlightCurrentInList(index) {
  const items = questionListItems.querySelectorAll("li");
  items.forEach((li, i) => {
    li.classList.toggle("active", i === index);
  });
}

// Function to flip the card when clicked
function flipCard(cardElement) {
  const card = cardElement.querySelector('.card');
  card.classList.toggle('flipped'); // Toggle the flipped class on click
}

// Attach flipCard function to each card in your list
const cards = document.querySelectorAll('.card-container');
cards.forEach(card => {
  card.addEventListener('click', () => flipCard(card));
});
