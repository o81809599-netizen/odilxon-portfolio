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
        register_login: "Kirish / Ro'yxatdan o'tish",
        register_desc: "Ism, familiya va ID raqamingizni kiriting",
        start_quiz: "Testni boshlash",
        error_id_taken: "Bu raqam band. Iltimos, boshqa raqam kiriting!",
        error_fields: "Barcha maydonlarni to'ldiring!",
        welcome: "Xush kelibsiz",
        questions: {
            easy: [
                { q: "Ushbu belgi nimani anglatadi?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Road_sign_US_stop.svg/120px-Road_sign_US_stop.svg.png", a: ["To'xtash", "Yurish", "Tezlashish"], c: "To'xtash" },
                { q: "Maksimal tezlik cheklovi qancha?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/UP_70.svg/120px-UP_70.svg.png", a: ["50 km/s", "70 km/s", "100 km/s"], c: "70 km/s" },
                { q: "Bu qaysi yo'l belgisi?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Road_sign_priority_road.svg/120px-Road_sign_priority_road.svg.png", a: ["Asosiy yo'l", "Yo'l bering", "Taqiqlangan"], c: "Asosiy yo'l" },
                { q: "Piyodalar o'tish joyi qayerda?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Uzbekistan_road_sign_5.16.1.svg/120px-Uzbekistan_road_sign_5.16.1.svg.png", a: ["Shu yerda", "100m dan keyin", "Taqiqlangan"], c: "Shu yerda" },
                { q: "Bolalar belgisi nimani anglatadi?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Uzbekistan_road_sign_1.21.svg/120px-Uzbekistan_road_sign_1.21.svg.png", a: ["Maktab yaqin", "Bog'cha", "O'yin maydoni"], c: "Maktab yaqin" },
                { q: "Qizil chiroqda nima qilinadi?", a: ["To'xtash", "O'tish", "Sekinlashish"], c: "To'xtash" },
                { q: "Sariq chiroq ma'nosi?", a: ["Tayyorlanish", "Yurish", "To'xtash"], c: "Tayyorlanish" },
                { q: "Yashil chiroq?", a: ["Ruxsat", "Taqiq", "Diqqat"], c: "Ruxsat" },
                { q: "O'ngga burilish?", a: ["Mumkin", "Taqiq", "Faqat yuk mashinalari"], c: "Mumkin" },
                { q: "Chapga burilish?", a: ["Mumkin", "Taqiq", "Faqat avtobus"], c: "Mumkin" },
                { q: "To'xtash taqiqlanganmi?", a: ["Ha", "Yo'q", "Faqat tunda"], c: "Ha" },
                { q: "To'xtab turish taqiqlanganmi?", a: ["Ha", "Yo'q", "Faqat dam olish kunlari"], c: "Ha" },
                { q: "Bir tomonlama yo'l?", a: ["Ha", "Yo'q", "Ikki tomonlama"], c: "Ha" },
                { q: "Velosiped yo'li?", a: ["Ha", "Yo'q", "Taqiqlangan"], c: "Ha" },
                { q: "Ot arava o'tishi mumkinmi?", a: ["Yo'q", "Ha", "Faqat qishloqda"], c: "Yo'q" },
                { q: "Mototsikl haydash mumkinmi?", a: ["Ha", "Yo'q", "Faqat shahar tashqarisida"], c: "Ha" },
                { q: "Piyoda yurishi mumkinmi?", a: ["Yo'q", "Ha", "Faqat trotuarda"], c: "Ha" },
                { q: "Yo'l bering belgisi shakli?", a: ["Uchburchak", "Doira", "Kvadrat"], c: "Uchburchak" },
                { q: "Kirish taqiqlangan (Gisht)?", a: ["Ha", "Yo'q", "Faqat avtobusga mumkin"], c: "Ha" },
                { q: "Maksimal balandlik?", a: ["3.5m", "4m", "5m"], c: "3.5m" }
            ]
        }
    },
    ru: { /* populated below */ },
    en: { /* populated below */ }
};

// Sync RU and EN
quizData.ru = JSON.parse(JSON.stringify(quizData.uz));
quizData.ru.back = "Назад";
quizData.ru.quiz_title = "Авто Школа Тест";
quizData.ru.register_login = "Вход / Регистрация";
quizData.ru.error_id_taken = "Этот номер занят. Пожалуйста, введите другой!";
quizData.ru.error_fields = "Заполните все поля!";
quizData.ru.start_quiz = "Начать тест";

quizData.en = JSON.parse(JSON.stringify(quizData.uz));
quizData.en.back = "Back";
quizData.en.quiz_title = "Auto School Test";
quizData.en.register_login = "Login / Registration";
quizData.en.error_id_taken = "This ID is taken. Please choose another!";
quizData.en.error_fields = "Please fill all fields!";
quizData.en.start_quiz = "Start Quiz";

let currentLang = 'uz';
let currentLevel = 'easy';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let startTime;
let totalTime = 3600;
let timeLeft = totalTime;
let currentUser = null;

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // Registration Logic
    const startRegBtn = document.getElementById('startRegBtn');
    startRegBtn.addEventListener('click', handleRegistration);

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

function handleRegistration() {
    const name = document.getElementById('userName').value.trim();
    const surname = document.getElementById('userSurname').value.trim();
    const id = document.getElementById('userId').value.trim();
    const errorEl = document.getElementById('regError');

    if (!name || !surname || !id) {
        errorEl.textContent = quizData[currentLang].error_fields;
        errorEl.style.display = 'block';
        return;
    }

    const users = JSON.parse(localStorage.getItem('quiz_users') || '{}');
    
    if (users[id]) {
        // ID exists, check if name/surname match
        if (users[id].name.toLowerCase() === name.toLowerCase() && 
            users[id].surname.toLowerCase() === surname.toLowerCase()) {
            // Login successful
            currentUser = { id, name, surname };
        } else {
            // ID taken by someone else
            errorEl.textContent = quizData[currentLang].error_id_taken;
            errorEl.style.display = 'block';
            return;
        }
    } else {
        // New registration
        users[id] = { name, surname };
        localStorage.setItem('quiz_users', JSON.stringify(users));
        currentUser = { id, name, surname };
    }

    // Move to Level Selection
    document.getElementById('registrationArea').style.display = 'none';
    document.getElementById('levelSelection').style.display = 'block';
    errorEl.style.display = 'none';
}

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
    
    // Shuffle options
    const shuffledOptions = [...q.a].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(opt, btn, q.c);
        container.appendChild(btn);
    });
}

function checkAnswer(selectedOpt, btn, correctOpt) {
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.disabled = true);
    
    if (selectedOpt === correctOpt) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('wrong');
        btns.forEach(b => {
            if (b.textContent === correctOpt) b.classList.add('correct');
        });
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
    const userDisplay = `${currentUser.name} ${currentUser.surname} (ID: ${currentUser.id})`;
    msg.innerHTML = `<strong>${userDisplay}</strong><br>` + (score >= 18 ? "Siz imtihondan o'tdingiz!" : "Afsus, qayta tayyorlaning.");
}
