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
                { q: "Ushbu belgi nimani anglatadi?", i: "stop.png", a: ["To'xtash", "Yurish", "Tezlashish"], c: "To'xtash" },
                { q: "Asosiy yo'l belgisi qaysi shaklda bo'ladi?", a: ["Romb", "Uchburchak", "Doira"], c: "Romb" },
                { q: "Piyodalar o'tish joyi qayerda?", a: ["Shu yerda", "100m dan keyin", "Taqiqlangan"], c: "Shu yerda" },
                { q: "Qizil chiroqda nima qilinadi?", a: ["To'xtash", "O'tish", "Sekinlashish"], c: "To'xtash" },
                { q: "Sariq chiroq ma'nosi?", a: ["Tayyorlanish", "Yurish", "To'xtash"], c: "Tayyorlanish" },
                { q: "Yashil chiroq nima degani?", a: ["Ruxsat", "Taqiq", "Diqqat"], c: "Ruxsat" },
                { q: "Yo'l bering belgisi qanday?", a: ["Uchburchak", "Doira", "Kvadrat"], c: "Uchburchak" },
                { q: "Kirish taqiqlangan belgi?", a: ["Qizil doira oq chiziq", "Ko'k kvadrat", "Sariq romb"], c: "Qizil doira oq chiziq" },
                { q: "Maksimal tezlik 70 bo'lsa?", a: ["70 dan oshmaslik", "70 bilan yurish", "Eng kamida 70"], c: "70 dan oshmaslik" },
                { q: "O'ngga burilish qachon mumkin?", a: ["Chiroq ruxsat bersa", "Hamma vaqt", "Hech qachon"], c: "Chiroq ruxsat bersa" },
                { q: "Chapga burilish qachon mumkin?", a: ["Ruxsat berganda", "Faqat tunda", "Taqiq bo'lsa"], c: "Ruxsat berganda" },
                { q: "To'xtash taqiqlanganmi?", a: ["Ha", "Yo'q", "Faqat dam olish kunlari"], c: "Ha" },
                { q: "Bolalar belgisi qayerda?", a: ["Maktab yaqinida", "Bog'da", "Bozorda"], c: "Maktab yaqinida" },
                { q: "Velosiped yo'li?", a: ["Faqat velosipedlar", "Hamma uchun", "Taqiqlangan"], c: "Faqat velosipedlar" },
                { q: "Bir tomonlama yo'l nima?", a: ["Faqat bir tomonga", "Ikki tomonga", "Piyodalar uchun"], c: "Faqat bir tomonga" },
                { q: "Avariya chirog'i qachon?", a: ["Nosozlikda", "Hamma vaqt", "Tunda"], c: "Nosozlikda" },
                { q: "Muzlamada tezlik?", a: ["Kamaytirish", "Oshirish", "O'zgartirmaslik"], c: "Kamaytirish" },
                { q: "Ot arava o'tishi?", a: ["Ruxsat bo'lsa", "Taqiqlangan", "Hamma vaqt"], c: "Ruxsat bo'lsa" },
                { q: "Piyoda yo'lagi?", a: ["Faqat piyodalar", "Mashinalar ham", "Velosipedlar"], c: "Faqat piyodalar" },
                { q: "Maksimal balandlik?", a: ["3.5m", "5m", "10m"], c: "3.5m" }
            ]
        }
    }
};

// Sync RU and EN with same logic
quizData.ru = JSON.parse(JSON.stringify(quizData.uz));
quizData.ru.back = "Назад";
quizData.ru.quiz_title = "Авто Школа Тест";
quizData.ru.register_login = "Вход / Регистрация";
quizData.ru.error_id_taken = "Этот номер занят!";
quizData.ru.error_fields = "Заполните все поля!";
quizData.ru.start_quiz = "Начать тест";

quizData.en = JSON.parse(JSON.stringify(quizData.uz));
quizData.en.back = "Back";
quizData.en.quiz_title = "Auto School Test";
quizData.en.register_login = "Login / Registration";
quizData.en.error_id_taken = "This ID is taken!";
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

    const startRegBtn = document.getElementById('startRegBtn');
    if (startRegBtn) startRegBtn.addEventListener('click', handleRegistration);

    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = btn.getAttribute('data-lang');
            updateUI();
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    const levelBtns = document.querySelectorAll('.level-btn');
    levelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLevel = btn.getAttribute('data-level');
            startQuiz();
        });
    });

    const restartBtn = document.getElementById('restartBtn');
    if (restartBtn) restartBtn.addEventListener('click', () => {
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
        if (users[id].name.toLowerCase() === name.toLowerCase() && 
            users[id].surname.toLowerCase() === surname.toLowerCase()) {
            currentUser = { id, name, surname };
        } else {
            errorEl.textContent = quizData[currentLang].error_id_taken;
            errorEl.style.display = 'block';
            return;
        }
    } else {
        users[id] = { name, surname };
        localStorage.setItem('quiz_users', JSON.stringify(users));
        currentUser = { id, name, surname };
    }

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
    const timerEl = document.getElementById('timer');
    if (timerEl) timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
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
    
    const timeTakenEl = document.getElementById('finalTime');
    if (timeTakenEl) timeTakenEl.textContent = `${quizData[currentLang].time_taken} ${minutes}m ${seconds}s`;
    
    const msg = document.getElementById('resultMessage');
    const userDisplay = currentUser ? `${currentUser.name} ${currentUser.surname} (ID: ${currentUser.id})` : "";
    if (msg) msg.innerHTML = `<strong>${userDisplay}</strong><br>` + (score >= 18 ? "Siz imtihondan o'tdingiz!" : "Afsus, qayta tayyorlaning.");
}
