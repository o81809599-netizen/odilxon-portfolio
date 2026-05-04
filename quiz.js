const quizData = {
    uz: {
        back: "Orqaga",
        quiz_title: "Auto Maktab Test",
        quiz_desc: "20 ta savol | 60 daqiqa",
        easy: "Oson",
        easy_desc: "Asosiy belgilar",
        medium: "O'rtacha",
        medium_desc: "Chorsrahalar",
        hard: "Qiyin",
        hard_desc: "Qonun-qoidalar",
        restart: "Qayta urinish",
        finished: "Sinov yakunlandi",
        time_taken: "Sarf etilgan vaqt:",
        questions: {
            easy: [
                { q: "Ushbu belgi nimani anglatadi?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Road_sign_US_stop.svg/120px-Road_sign_US_stop.svg.png", a: ["To'xtash", "Yurish", "Tezlashish"], c: 0 },
                { q: "Maksimal tezlik cheklovi qancha?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/UP_70.svg/120px-UP_70.svg.png", a: ["50 km/s", "70 km/s", "100 km/s"], c: 1 },
                { q: "Bu qaysi yo'l belgisi?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Road_sign_priority_road.svg/120px-Road_sign_priority_road.svg.png", a: ["Asosiy yo'l", "Yo'l bering", "Taqiqlangan"], c: 0 },
                { q: "Piyodalar o'tish joyi qayerda?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Uzbekistan_road_sign_5.16.1.svg/120px-Uzbekistan_road_sign_5.16.1.svg.png", a: ["Shu yerda", "100m dan keyin", "Taqiqlangan"], c: 0 },
                { q: "Bolalar belgisi nimani anglatadi?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Uzbekistan_road_sign_1.21.svg/120px-Uzbekistan_road_sign_1.21.svg.png", a: ["Maktab yaqin", "Bog'cha", "O'yin maydoni"], c: 0 },
                // Mocking more questions to reach 20
                { q: "Qizil chiroqda nima qilinadi?", a: ["To'xtash", "O'tish", "Sekinlashish"], c: 0 },
                { q: "Sariq chiroq ma'nosi?", a: ["Tayyorlanish", "Yurish", "To'xtash"], c: 0 },
                { q: "Yashil chiroq?", a: ["Ruxsat", "Taqiq", "Diqqat"], c: 0 },
                { q: "O'ngga burilish?", a: ["Mumkin", "Taqiq", "Faqat yuk mashinalari"], c: 0 },
                { q: "Chapga burilish?", a: ["Mumkin", "Taqiq", "Faqat avtobus"], c: 0 },
                { q: "To'xtash taqiqlanganmi?", a: ["Ha", "Yo'q", "Faqat tunda"], c: 0 },
                { q: "To'xtab turish taqiqlanganmi?", a: ["Ha", "Yo'q", "Faqat dam olish kunlari"], c: 0 },
                { q: "Bir tomonlama yo'l?", a: ["Ha", "Yo'q", "Ikki tomonlama"], c: 0 },
                { q: "Velosiped yo'li?", a: ["Ha", "Yo'q", "Taqiqlangan"], c: 0 },
                { q: "Ot arava o'tishi mumkinmi?", a: ["Yo'q", "Ha", "Faqat qishloqda"], c: 0 },
                { q: "Mototsikl haydash mumkinmi?", a: ["Ha", "Yo'q", "Faqat shahar tashqarisida"], c: 0 },
                { q: "Piyoda yurishi mumkinmi?", a: ["Yo'q", "Ha", "Faqat trotuarda"], c: 1 },
                { q: "Yo'l bering belgisi shakli?", a: ["Uchburchak", "Doira", "Kvadrat"], c: 0 },
                { q: "Kirish taqiqlangan (Gisht)?", a: ["Ha", "Yo'q", "Faqat avtobusga mumkin"], c: 0 },
                { q: "Maksimal balandlik?", a: ["3.5m", "4m", "5m"], c: 0 }
            ],
            medium: [ /* Add 20 questions here similarly */ ],
            hard: [ /* Add 20 questions here similarly */ ]
        }
    },
    ru: { /* Similar structure for RU */ },
    en: { /* Similar structure for EN */ }
};

// Populate RU and EN with same logic for demo
quizData.ru = JSON.parse(JSON.stringify(quizData.uz));
quizData.ru.back = "Назад";
quizData.ru.quiz_title = "Авто Школа Тест";
quizData.ru.quiz_desc = "20 вопросов | 60 минут";
quizData.ru.easy = "Легко";
quizData.ru.finished = "Тест завершен";
quizData.ru.time_taken = "Затраченное время:";

quizData.en = JSON.parse(JSON.stringify(quizData.uz));
quizData.en.back = "Back";
quizData.en.quiz_title = "Auto School Test";
quizData.en.quiz_desc = "20 questions | 60 minutes";
quizData.en.easy = "Easy";
quizData.en.finished = "Quiz Finished";
quizData.en.time_taken = "Time taken:";

let currentLang = 'uz';
let currentLevel = 'easy';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let startTime;
let totalTime = 3600; // 1 hour in seconds
let timeLeft = totalTime;

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // Lang Switcher
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = btn.getAttribute('data-lang');
            updateUI();
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Level Selection
    const levelBtns = document.querySelectorAll('.level-btn');
    levelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLevel = btn.getAttribute('data-level');
            startQuiz();
        });
    });

    document.getElementById('restartBtn').addEventListener('click', () => {
        clearInterval(timerInterval);
        document.getElementById('resultArea').style.display = 'none';
        document.getElementById('levelSelection').style.display = 'block';
    });
});

function updateUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (quizData[currentLang][key]) {
            el.textContent = quizData[currentLang][key];
        }
    });
}

function startQuiz() {
    document.getElementById('levelSelection').style.display = 'none';
    document.getElementById('quizArea').style.display = 'block';
    
    // Prepare 20 questions
    const levelQuestions = quizData[currentLang].questions[currentLevel] || quizData[currentLang].questions['easy'];
    currentQuestions = [...levelQuestions].sort(() => Math.random() - 0.5).slice(0, 20);
    
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = totalTime;
    startTime = Date.now();
    
    startTimer();
    showQuestion();
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResults();
        }
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function showQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    const imgContainer = document.getElementById('questionImageContainer');
    const textEl = document.getElementById('questionText');
    
    imgContainer.innerHTML = q.i ? `<img src="${q.i}" alt="Road Sign">` : '';
    textEl.textContent = q.q;
    
    document.getElementById('questionCounter').textContent = `${currentQuestionIndex + 1}/20`;
    document.getElementById('progressFill').style.width = `${((currentQuestionIndex + 1) / 20) * 100}%`;
    
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    
    q.a.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(idx, btn);
        container.appendChild(btn);
    });
}

function checkAnswer(idx, btn) {
    const q = currentQuestions[currentQuestionIndex];
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.disabled = true);
    
    if (idx === q.c) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('wrong');
        btns[q.c].classList.add('correct');
    }
    
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    clearInterval(timerInterval);
    const timeSpentSeconds = totalTime - timeLeft;
    const minutes = Math.floor(timeSpentSeconds / 60);
    const seconds = timeSpentSeconds % 60;
    
    document.getElementById('quizArea').style.display = 'none';
    document.getElementById('resultArea').style.display = 'block';
    document.getElementById('finalScore').textContent = score;
    document.getElementById('finalTime').textContent = `${quizData[currentLang].time_taken} ${minutes}m ${seconds}s`;
    
    const msg = document.getElementById('resultMessage');
    msg.textContent = score >= 18 ? "Siz imtihondan o'tdingiz!" : "Afsus, qayta tayyorlaning.";
}
