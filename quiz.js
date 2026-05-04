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
        error_id_taken: "Bu raqam band!",
        error_fields: "Barcha maydonlarni to'ldiring!",
        welcome: "Xush kelibsiz",
        questions: {
            easy: [
                { q: "To'xtash taqiqlangan belgi?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Uzbekistan_road_sign_3.27.svg/120px-Uzbekistan_road_sign_3.27.svg.png", a: ["To'xtash taqiqlangan", "To'xtab turish taqiqlangan", "Kirish taqiqlangan"], c: "To'xtash taqiqlangan" },
                { q: "Maksimal tezlik 50 km/s?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Uzbekistan_road_sign_3.24.50.svg/120px-Uzbekistan_road_sign_3.24.50.svg.png", a: ["50 dan oshmaslik", "50 dan kam emas", "Faqat 50"], c: "50 dan oshmaslik" },
                { q: "Asosiy yo'l belgisi?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Road_sign_priority_road.svg/120px-Road_sign_priority_road.svg.png", a: ["Asosiy yo'l", "Yo'l bering", "Taqiq"], c: "Asosiy yo'l" },
                { q: "Yo'l bering belgisi?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Uzbekistan_road_sign_2.4.svg/120px-Uzbekistan_road_sign_2.4.svg.png", a: ["Yo'l bering", "To'xtash", "Asosiy yo'l"], c: "Yo'l bering" },
                { q: "Piyodalar o'tish joyi?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Uzbekistan_road_sign_5.16.1.svg/120px-Uzbekistan_road_sign_5.16.1.svg.png", a: ["Piyodalar o'tish joyi", "Bolalar", "Trotuar"], c: "Piyodalar o'tish joyi" },
                { q: "Kirish taqiqlangan (Gisht)?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Uzbekistan_road_sign_3.1.svg/120px-Uzbekistan_road_sign_3.1.svg.png", a: ["Kirish taqiqlangan", "Burilish taqiqlangan", "To'xtash"], c: "Kirish taqiqlangan" },
                { q: "Bolalar belgisi?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Uzbekistan_road_sign_1.21.svg/120px-Uzbekistan_road_sign_1.21.svg.png", a: ["Bolalar", "Bog'cha", "Maktab"], c: "Bolalar" },
                { q: "Velosiped yo'li?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Uzbekistan_road_sign_4.4.svg/120px-Uzbekistan_road_sign_4.4.svg.png", a: ["Velosiped yo'li", "Piyoda yo'li", "Taqiq"], c: "Velosiped yo'li" },
                { q: "O'ngga burilish taqiqlangan?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Uzbekistan_road_sign_3.18.1.svg/120px-Uzbekistan_road_sign_3.18.1.svg.png", a: ["O'ngga burilish taqiqlangan", "O'ngga burilish mumkin", "Chapga buriling"], c: "O'ngga burilish taqiqlangan" },
                { q: "Chapga burilish taqiqlangan?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Uzbekistan_road_sign_3.18.2.svg/120px-Uzbekistan_road_sign_3.18.2.svg.png", a: ["Chapga burilish taqiqlangan", "Chapga burilish mumkin", "O'ngga buriling"], c: "Chapga burilish taqiqlangan" },
                { q: "Qayrilish taqiqlangan?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Uzbekistan_road_sign_3.19.svg/120px-Uzbekistan_road_sign_3.19.svg.png", a: ["Qayrilish taqiqlangan", "Qayrilish mumkin", "To'xtash"], c: "Qayrilish taqiqlangan" },
                { q: "Quvib o'tish taqiqlangan?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Uzbekistan_road_sign_3.20.svg/120px-Uzbekistan_road_sign_3.20.svg.png", a: ["Quvib o'tish taqiqlangan", "Quvib o'tish mumkin", "Sekinlashish"], c: "Quvib o'tish taqiqlangan" },
                { q: "Tovushli signal berish taqiqlangan?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Uzbekistan_road_sign_3.26.svg/120px-Uzbekistan_road_sign_3.26.svg.png", a: ["Signal taqiqlangan", "Signal bering", "Taqiq tugadi"], c: "Signal taqiqlangan" },
                { q: "Maksimal balandlik cheklovi?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Uzbekistan_road_sign_3.13.svg/120px-Uzbekistan_road_sign_3.13.svg.png", a: ["Balandlik cheklovi", "Kenglik cheklovi", "Vazn cheklovi"], c: "Balandlik cheklovi" },
                { q: "Maksimal vazn cheklovi?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Uzbekistan_road_sign_3.11.svg/120px-Uzbekistan_road_sign_3.11.svg.png", a: ["Vazn cheklovi", "Balandlik cheklovi", "Tezlik cheklovi"], c: "Vazn cheklovi" },
                { q: "Piyodalar yo'li?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Uzbekistan_road_sign_4.5.svg/120px-Uzbekistan_road_sign_4.5.svg.png", a: ["Piyodalar yo'li", "Piyodalar o'tish joyi", "Taqiq"], c: "Piyodalar yo'li" },
                { q: "Eng kam tezlik cheklovi?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Uzbekistan_road_sign_4.7.svg/120px-Uzbekistan_road_sign_4.7.svg.png", a: ["Eng kam tezlik", "Eng yuqori tezlik", "Tavsiya etilgan tezlik"], c: "Eng kam tezlik" },
                { q: "To'xtab turish taqiqlangan (Juft kunlari)?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Uzbekistan_road_sign_3.30.svg/120px-Uzbekistan_road_sign_3.30.svg.png", a: ["Juft kunlari taqiq", "Toq kunlari taqiq", "Har kuni taqiq"], c: "Juft kunlari taqiq" },
                { q: "To'xtab turish taqiqlangan (Toq kunlari)?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Uzbekistan_road_sign_3.29.svg/120px-Uzbekistan_road_sign_3.29.svg.png", a: ["Toq kunlari taqiq", "Juft kunlari taqiq", "Har kuni taqiq"], c: "Toq kunlari taqiq" },
                { q: "Barcha cheklovlar tugashi?", i: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Uzbekistan_road_sign_3.31.svg/120px-Uzbekistan_road_sign_3.31.svg.png", a: ["Barcha cheklovlar tugadi", "Taqiq boshlandi", "To'xtash"], c: "Barcha cheklovlar tugadi" }
            ],
            medium: [
                { q: "Chorrahada manevr qoidalari?", a: ["Signal yoqish kerak", "Signal shart emas", "Faqat tunda"], c: "Signal yoqish kerak" },
                { q: "Tartibga solinmagan chorrahada?", a: ["O'ngdan kelganga yo'l bering", "Hamma to'xtaydi", "Tezroq o'tiladi"], c: "O'ngdan kelganga yo'l bering" },
                { q: "Yashil yonib-o'chishi nimani anglatadi?", a: ["Ruxsat muddati tugayapti", "Taqiq boshlandi", "Tezlikni oshiring"], c: "Ruxsat muddati tugayapti" }
                // I'll populate 20 unique ones below for real usage
            ],
            hard: [
                { q: "Avtomagistralda orqaga qaytish?", a: ["Taqiqlangan", "Ruxsat berilgan", "Faqat tunda"], c: "Taqiqlangan" }
                // I'll populate 20 unique ones below for real usage
            ]
        }
    }
};

// Populate Medium and Hard with dummy unique questions to reach 20 for now
for(let i=0; i<17; i++) {
    quizData.uz.questions.medium.push({ q: `O'rtacha darajadagi savol #${i+4}?`, a: ["Javob A", "Javob B", "Javob C"], c: "Javob A" });
    quizData.uz.questions.hard.push({ q: `Qiyin darajadagi savol #${i+2}?`, a: ["To'g'ri javob", "Noto'g'ri 1", "Noto'g'ri 2"], c: "To'g'ri javob" });
}

// Sync RU and EN
quizData.ru = JSON.parse(JSON.stringify(quizData.uz));
quizData.en = JSON.parse(JSON.stringify(quizData.uz));

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
        errorEl.textContent = quizData[currentLang].error_fields || "Fill fields";
        errorEl.style.display = 'block';
        return;
    }

    const users = JSON.parse(localStorage.getItem('quiz_users') || '{}');
    if (users[id]) {
        if (users[id].name.toLowerCase() === name.toLowerCase() && users[id].surname.toLowerCase() === surname.toLowerCase()) {
            currentUser = { id, name, surname };
        } else {
            errorEl.textContent = quizData[currentLang].error_id_taken || "ID taken";
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
        if (quizData[currentLang][key]) el.textContent = quizData[currentLang][key];
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
    
    imgContainer.innerHTML = q.i ? `<img src="${q.i}" alt="Road Sign">` : '<div class="placeholder-icon"><i data-lucide="info"></i></div>';
    textEl.textContent = q.q;
    lucide.createIcons();
    
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
        btns.forEach(b => { if (b.textContent === correctOpt) b.classList.add('correct'); });
    }
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) showQuestion();
        else showResults();
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
    if (timeTakenEl) timeTakenEl.textContent = `${quizData[currentLang].time_taken || "Time:"} ${minutes}m ${seconds}s`;
    
    const msg = document.getElementById('resultMessage');
    const userDisplay = currentUser ? `${currentUser.name} ${currentUser.surname} (ID: ${currentUser.id})` : "";
    if (msg) msg.innerHTML = `<strong>${userDisplay}</strong><br>` + (score >= 18 ? "Siz imtihondan o'tdingiz!" : "Afsus, qayta tayyorlaning.");
}
