const quizData = {
    uz: {
        back: "Orqaga",
        quiz_title: "Auto Maktab Test",
        quiz_desc: "Yo'l harakati qoidalarini o'rganing",
        easy: "Oson",
        easy_desc: "Asosiy belgilar va qoidalar",
        medium: "O'rtacha",
        medium_desc: "Chorsrahalar va manevrlar",
        hard: "Qiyin",
        hard_desc: "Murakkab vaziyatlar va jarimalar",
        restart: "Qayta urinish",
        finished: "Sinov yakunlandi",
        questions: {
            easy: [
                { q: "Qizil chiroq yonganda nima qilish kerak?", a: ["To'xtash", "Yurish", "Tezlashish"], c: 0 },
                { q: "Asosiy yo'l belgisi qaysi shaklda bo'ladi?", a: ["Romb", "Uchburchak", "Doira"], c: 0 },
                { q: "Piyodalar o'tish joyi qanday rangda bo'ladi?", a: ["Oq-qora", "Qizil", "Ko'k"], c: 0 },
                { q: "Mashina haydash uchun eng kam yosh nechada?", a: ["18", "16", "20"], c: 0 },
                { q: "To'xtash taqiqlangan belgi qaysi?", a: ["X shaklidagi ko'k doira", "Qizil uchburchak", "Sariq kvadrat"], c: 0 }
                // More questions would be added here
            ],
            medium: [
                { q: "Tartibga solinmagan chorrahada kim birinchi o'tadi?", a: ["O'ng tomondagi", "Chap tomondagi", "Tez kelgan"], c: 0 },
                { q: "Burilish ko'rsatkichini qachon yoqish kerak?", a: ["Manevrdan oldin", "Manevr vaqtida", "Manevrdan keyin"], c: 0 },
                { q: "Aholi punktida maksimal tezlik qancha?", a: ["60 km/s", "70 km/s", "50 km/s"], c: 1 },
                { q: "Quvib o'tish qayerda taqiqlanadi?", a: ["Chorrahada", "To'g'ri yo'lda", "Keng yo'lda"], c: 0 },
                { q: "Tumanli ob-havoda qaysi chiroqlarni yoqish kerak?", a: ["Tuman chiroqlari", "Uzoq chiroq", "Gabarit"], c: 0 }
            ],
            hard: [
                { q: "Mast holda haydash uchun jarima qancha?", a: ["Ma'muriy qamoq yoki katta jarima", "Faqat ogohlantirish", "Jarima yo'q"], c: 0 },
                { q: "Tormoz tizimi nosoz bo'lganda nima qilish kerak?", a: ["Harakatni to'xtatish", "Sekin yurish", "Ehtiyot bo'lish"], c: 0 },
                { q: "Avtomagistralda minimal tezlik qancha?", a: ["40 km/s", "60 km/s", "Yo'q"], c: 0 },
                { q: "Qaysi holda yuk tashish taqiqlanadi?", a: ["Gabaritdan 2m oshsa", "Og'ir bo'lsa", "Sariq bo'lsa"], c: 0 },
                { q: "YHQ buzilganidan keyin bayonnoma qancha vaqtda tuziladi?", a: ["Darhol", "3 kunda", "1 oyda"], c: 0 }
            ]
        }
    },
    ru: {
        back: "Назад",
        quiz_title: "Авто Школа Тест",
        quiz_desc: "Изучайте правила дорожного движения",
        easy: "Легко",
        easy_desc: "Основные знаки и правила",
        medium: "Средне",
        medium_desc: "Перекрестки и маневры",
        hard: "Сложно",
        hard_desc: "Сложные ситуации и штрафы",
        restart: "Попробовать снова",
        finished: "Тест завершен",
        questions: {
            easy: [
                { q: "Что делать на красный свет?", a: ["Стоять", "Ехать", "Ускориться"], c: 0 },
                { q: "Какой формы знак главной дороги?", a: ["Ромб", "Треугольник", "Круг"], c: 0 },
                { q: "Какого цвета пешеходный переход?", a: ["Бело-черный", "Красный", "Синий"], c: 0 },
                { q: "Минимальный возраст для вождения?", a: ["18", "16", "20"], c: 0 },
                { q: "Знак 'Остановка запрещена'?", a: ["Синий круг с X", "Красный треугольник", "Желтый квадрат"], c: 0 }
            ],
            medium: [
                { q: "Кто проезжает первым на нерегулируемом перекрестке?", a: ["Тот кто справа", "Тот кто слева", "Кто быстрее"], c: 0 },
                { q: "Когда включать поворотник?", a: ["До маневра", "Во время", "После"], c: 0 },
                { q: "Макс. скорость в населенном пункте?", a: ["60 км/ч", "70 км/ч", "50 км/ч"], c: 1 },
                { q: "Где запрещен обгон?", a: ["На перекрестке", "На прямой", "На широкой дороге"], c: 0 },
                { q: "Какие фары включать в туман?", a: ["Противотуманные", "Дальний свет", "Габариты"], c: 0 }
            ],
            hard: [
                { q: "Штраф за вождение в нетрезвом виде?", a: ["Арест или крупный штраф", "Предупреждение", "Нет штрафа"], c: 0 },
                { q: "Что делать при неисправных тормозах?", a: ["Прекратить движение", "Ехать медленно", "Быть осторожным"], c: 0 },
                { q: "Мин. скорость на автомагистрали?", a: ["40 км/ч", "60 км/ч", "Нет"], c: 0 },
                { q: "Когда запрещена перевозка груза?", a: ["Выступает более чем на 2м", "Тяжелый", "Желтый"], c: 0 },
                { q: "Когда составляется протокол?", a: ["Сразу", "В течение 3 дней", "Через месяц"], c: 0 }
            ]
        }
    },
    en: {
        back: "Back",
        quiz_title: "Auto School Test",
        quiz_desc: "Learn traffic rules",
        easy: "Easy",
        easy_desc: "Basic signs and rules",
        medium: "Medium",
        medium_desc: "Intersections and maneuvers",
        hard: "Hard",
        hard_desc: "Complex situations and fines",
        restart: "Restart",
        finished: "Quiz Finished",
        questions: {
            easy: [
                { q: "What to do on red light?", a: ["Stop", "Go", "Speed up"], c: 0 },
                { q: "What shape is the main road sign?", a: ["Rhombus", "Triangle", "Circle"], c: 0 },
                { q: "What color is the crosswalk?", a: ["White-black", "Red", "Blue"], c: 0 },
                { q: "Minimum age for driving?", a: ["18", "16", "20"], c: 0 },
                { q: "Which is the 'No Stopping' sign?", a: ["Blue circle with X", "Red triangle", "Yellow square"], c: 0 }
            ],
            medium: [
                { q: "Who goes first at an unregulated intersection?", a: ["Person on the right", "Person on the left", "Fastest one"], c: 0 },
                { q: "When to turn on signals?", a: ["Before maneuver", "During", "After"], c: 0 },
                { q: "Max speed in urban area?", a: ["60 km/h", "70 km/h", "50 km/h"], c: 1 },
                { q: "Where is overtaking prohibited?", a: ["At intersections", "On straight road", "On wide road"], c: 0 },
                { q: "Which lights to use in fog?", a: ["Fog lights", "High beam", "Side lights"], c: 0 }
            ],
            hard: [
                { q: "Penalty for drunk driving?", a: ["Arrest or large fine", "Warning", "No penalty"], c: 0 },
                { q: "What to do with faulty brakes?", a: ["Stop immediately", "Drive slowly", "Be careful"], c: 0 },
                { q: "Min speed on highway?", a: ["40 km/h", "60 km/h", "None"], c: 0 },
                { q: "When is load transport prohibited?", a: ["Protrudes > 2m", "Heavy", "Yellow"], c: 0 },
                { q: "When is the report drafted?", a: ["Immediately", "Within 3 days", "Within a month"], c: 0 }
            ]
        }
    }
};

let currentLang = 'uz';
let currentLevel = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

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
    
    // Prepare questions (pick 20 random or all available)
    // For this demo, we'll take all 5 and mock the "20" count for UX
    currentQuestions = [...quizData[currentLang].questions[currentLevel]];
    // Shuffle
    currentQuestions.sort(() => Math.random() - 0.5);
    
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    document.getElementById('questionText').textContent = q.q;
    document.getElementById('questionCounter').textContent = `${currentQuestionIndex + 1}/${currentQuestions.length}`;
    document.getElementById('progressFill').style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`;
    
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
    
    // Disable all
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
    }, 1500);
}

function showResults() {
    document.getElementById('quizArea').style.display = 'none';
    document.getElementById('resultArea').style.display = 'block';
    document.getElementById('finalScore').textContent = score;
    
    const msg = document.getElementById('resultMessage');
    if (score === currentQuestions.length) {
        msg.textContent = currentLang === 'uz' ? "A'lo! Siz haqiqiy haydovchisiz!" : "Отлично! Вы настоящий водитель!";
    } else if (score > currentQuestions.length / 2) {
        msg.textContent = currentLang === 'uz' ? "Yaxshi, lekin yana o'qish kerak." : "Хорошо, но нужно еще подучить.";
    } else {
        msg.textContent = currentLang === 'uz' ? "Afsus, ko'proq tayyorlaning." : "К сожалению, нужно больше практики.";
    }
}
