const pairsTimeRanges = [
    { start: '8:30', end: '10:00' },
    { start: '10:10', end: '11:40' },
    { start: '12:10', end: '13:40' },
    { start: '13:50', end: '15:20' },
    { start: '15:50', end: '17:20' },
    { start: '17:30', end: '19:00' },
    { start: '19:10', end: '20:40' },
];

const scheduleData = {
    Monday: [
        [
            { subject: "Русск.язык и культура речи", type: "П.", startWeek: 3, endWeek: 14, professor: "Т.Ю.Щуклина", room: "708" }
        ],
        [
            { subject: "Машинное обучение", type: "П.", startWeek: 1, endWeek: 17, professor: "Р.В.Макаров", room: "509" }
        ],
        [
            { subject: "Дискр.матем.и матем.логика", type: "П.", startWeek: 1, endWeek: 17, professor: "Н.Н.Корнеева", room: "709" }
        ],
        [
            // Один объект для нечетных недель (3,5,7,9,11,13)
            { subject: "Русск.язык и культура речи", type: "Л.", startWeek: [3,5,7,9,11,13], professor: "Т.Ю.Щуклина", room: "109" },
            // Один объект для четных недель (2,4,6,8,10,12,14,16)
            { subject: "ДВ1Введение в фин.и актуарную математику", type: "Л.", startWeek: [2,4,6,8,10,12,14,16], professor: "Э.Ю.Лернер", room: "1мех" }
        ],
        [],
        [],
        []
    ],
    Tuesday: [
        [
            { subject: "Матем.анализ", type: "Л.", startWeek: 1, endWeek: 17, professor: "Е.А.Турилова", room: "610" }
        ],
        [
            { subject: "Диф.уравнения", type: "Л.", startWeek: 1, endWeek: 17, professor: "С.Н.Киясов", room: "109" }
        ],
        [
            { subject: "ООП", type: "П.", startWeek: 1, endWeek: 17, professor: "М.Ю.Першагин", room: "711" }
        ],
        [
            // Первый предмет на нечетных неделях (1,3,5,7,9,11,13,15,17)
            { subject: "Основы профил.и противодействия терроризму и экстрем.", type: "Л.", startWeek: [1,3,5,7,9,11,13,15,17], professor: "О.В.Маврин", room: "109" },
            // Второй предмет на четных неделях (2,4,6,8,10,12,14,16)
            { subject: "Машинное обучение", type: "Л.", startWeek: [2,4,6,8,10,12,14,16], professor: "Р.В.Макаров", room: "109" }
        ],
        [],
        [],
        []
    ],
    Wednesday: [
        [
            { subject: "Матем.анализ", type: "Л.", startWeek: [1,3,5,7,9,11,13,15,17], professor: "Е.А.Турилова", room: "610" }
        ],
        [
            { subject: "Диф.геом.и топология", type: "П.", startWeek: 1, endWeek: 17, professor: "В.В.Шурыгин (мл)", room: "712" }
        ],
        [
            { subject: "Объектно-ориентированное программирование", type: "Л.", startWeek: 1, endWeek: 17, professor: "С.В.Маклецов", room: "109" }
        ],
        [
            { subject: "Элективные курсы по физической культуре и спорту", type: "Yugur.", startWeek: 1, endWeek: 17, professor: "", room: "" }
        ],
        [
            { subject: "ДВ1Введ. в фин.и актуарную матем.", type: "Л.", startWeek: [2,4,6,8,10,12,14,16], professor: "Э.Ю.Лернер", room: "1мех" }
        ],
        [],
        []
    ],
    Thursday: [
        [
            { subject: "Матем.анализ", type: "П.", startWeek: 1, endWeek: 17, professor: "А.Ю.Дютин", room: "711" }
        ],
        [
            { subject: "Диф.уравнения", type: "П.", startWeek: 1, endWeek: 17, professor: "С.Н.Киясов", room: "510" }
        ],
        [
            { subject: "Дискр.матем.и матем.логика ", type: "Л.", startWeek: 1, endWeek: 17, professor: "И.Ш.Калимуллин", room: "109" }
        ],
        [],
        [],
        [],
        []
    ],
    Friday: [
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ],
    Saturday: [
        [
            { subject: "ДВ1СУБД", type: "Л.", startWeek: [1,3,5,7,9,11,13,15,17], professor: "И.В.Ёлкин", room: "610" },
            { subject: "ДВ1СУБД", type: "Л.", startWeek: [2,4,6,8,10,12,14,16], professor: "И.В.Ёлкин", room: "512" }
        ],
        [
            { subject: "Диф.геометрия и топология", type: "Л.", startWeek: 1, endWeek: 17, professor: "В.В.Шурыгин", room: "218" }
        ],
        [
            { subject: "Матем.анализ", type: "П.", startWeek: 1, endWeek: 17, professor: "А.Ю.Дютин", room: "609" }
        ],
        [
            { subject: "Элективные курсы по физической культуре и спорту", type: "Yugur.", startWeek: 1, endWeek: 17, professor: "", room: "" }
        ],
        [],
        [],
        []
    ]
};

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Map for Russian day names
const dayNamesRu = {
    'Monday': 'Понедельник',
    'Tuesday': 'Вторник',
    'Wednesday': 'Среда',
    'Thursday': 'Четверг',
    'Friday': 'Пятница',
    'Saturday': 'Суббота',
    'WholeWeek': 'Вся неделя'
};

// Adjust getDay() to match Monday=0 index (assuming daysOfWeek starts with Monday)
let currentDay = daysOfWeek[(new Date().getDay() + 6) % 7];
let weekOffset = 0; // New variable to offset the week (0 = current, 1 = next, -1 = previous, etc.)

function getWeekNumber() {
    const startDate = new Date(2026, 1, 9);
    const now = new Date();
    if (now < startDate) return 0;
    return Math.floor((now - startDate) / (7 * 24 * 60 * 60 * 1000)) + 1;
}

function getClassesForWeek(classes, currentWeek) {
    if (!classes || currentWeek <= 0) return null; // Added check for invalid weeks
    if (!Array.isArray(classes)) classes = [classes];
    const filtered = classes.filter(c => {
        if (Array.isArray(c.startWeek)) {
            return c.startWeek.includes(currentWeek); // Check if currentWeek is in the array
        } else if ('startWeek' in c && 'endWeek' in c) {
            return currentWeek >= c.startWeek && currentWeek <= c.endWeek; // Range check
        }
        return true; // Fallback for classes without week constraints
    });
    return filtered.length ? filtered : null;
}

// Helper to render a single pair row (used for both single day and whole week)
function renderPairRow(pair, classesToRender, tbody) {
    if (!classesToRender || classesToRender.length === 0) return;

    const tr = document.createElement('tr');
    tr.classList.add('hover:bg-indigo-50', 'transition');

    // Time cell
    const timeCell = document.createElement('td');
    timeCell.className = 'px-6 py-3 align-top';
    timeCell.textContent = `${pair.start} - ${pair.end}`;
    tr.appendChild(timeCell);

    // Subject cell
    const subjectCell = document.createElement('td');
    subjectCell.className = 'px-6 py-3';
    subjectCell.innerHTML = classesToRender.map(cls => {
        const groupText = cls.group ? `(${cls.group}) ` : '';
        if (cls.link) {
            return `<div><a href="${cls.link}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">${groupText}${cls.subject || ''}</a></div>`;
        } else {
            return `<div>${groupText}${cls.subject || ''}</div>`;
        }
    }).join('');
    tr.appendChild(subjectCell);

    // Type cell (new)
    const typeCell = document.createElement('td');
    typeCell.className = 'px-6 py-3';
    typeCell.innerHTML = classesToRender.map(cls => `<div>${cls.type || ''}</div>`).join('');
    tr.appendChild(typeCell);

    // Room cell
    const roomCell = document.createElement('td');
    roomCell.className = 'px-6 py-3';
    roomCell.innerHTML = classesToRender.map(cls => `<div>${cls.room || ''}</div>`).join('');
    tr.appendChild(roomCell);

    // Professor cell
    const profCell = document.createElement('td');
    profCell.className = 'px-6 py-3';
    profCell.innerHTML = classesToRender.map(cls => {
        if (cls.professor) return `<div>${cls.professor}</div>`;
        if (cls.professors) return `<div>${cls.professors.join(', ')}</div>`;
        return `<div></div>`;
    }).join('');
    tr.appendChild(profCell);

    tbody.appendChild(tr);
}

function renderSchedule() {
    const currentWeek = getWeekNumber() + weekOffset; // Use offset
    const weekNumberEl = document.getElementById('weekNumber');
    if (weekNumberEl) weekNumberEl.textContent = currentWeek;

    const currentDayEl = document.getElementById('currentDay');
    const dayLabel = dayNamesRu[currentDay] || currentDay;
    if (currentDayEl) currentDayEl.textContent = dayLabel;

    const tbody = document.getElementById('scheduleBody');
    if (!tbody) {
        console.error('Schedule body element not found');
        return;
    }
    tbody.innerHTML = '';

    if (currentDay === 'WholeWeek') {
        daysOfWeek.forEach(day => {
            const daySchedule = scheduleData[day] || Array(pairsTimeRanges.length).fill(null);
            let hasAnyClass = false;

            // Day header row
            const headerRow = document.createElement('tr');
            headerRow.classList.add('bg-indigo-100', 'font-bold', 'text-indigo-900');
            headerRow.innerHTML = `<td colspan="5" class="text-center py-1">${dayNamesRu[day] || day}</td>`;
            tbody.appendChild(headerRow);

            pairsTimeRanges.forEach((pair, index) => {
                const pairData = daySchedule[index];
                const classesToRender = getClassesForWeek(pairData, currentWeek);
                if (classesToRender && classesToRender.length > 0) {
                    hasAnyClass = true;
                    renderPairRow(pair, classesToRender, tbody);
                }
            });

            if (!hasAnyClass) {
                const tr = document.createElement('tr');
                tr.classList.add('text-center', 'italic', 'text-gray-400');
                tr.innerHTML = `<td colspan="5" class="px-6 py-4">Занятий нет на ${dayNamesRu[day] || day}</td>`;
                tbody.appendChild(tr);
            }
        });
    } else {
        // Single day rendering
        const daySchedule = scheduleData[currentDay] || Array(pairsTimeRanges.length).fill(null);
        let hasAnyClass = false;
        pairsTimeRanges.forEach((pair, index) => {
            const pairData = daySchedule[index];
            const classesToRender = getClassesForWeek(pairData, currentWeek);
            if (classesToRender && classesToRender.length > 0) {
                hasAnyClass = true;
                renderPairRow(pair, classesToRender, tbody);
            }
        });
        if (!hasAnyClass) {
            const tr = document.createElement('tr');
            tr.classList.add('text-center', 'italic', 'text-gray-400');
            tr.innerHTML = `<td colspan="5" class="px-6 py-4">Занятий нет сегодня</td>`;
            tbody.appendChild(tr);
        }
    }
}

function updateCurrentTime() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('ru-RU', { hour12: false });
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        timeElement.textContent = timeStr;
    }
}

function formatDuration(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    let parts = [];
    if (hours > 0) parts.push(`${hours}ч`);
    if (minutes > 0) parts.push(`${minutes}м`);
    if (seconds > 0 || parts.length === 0) parts.push(`${seconds}с`); // Always show seconds if nothing else
    return parts.join(' ');
}

function updateTimer() {
    const now = new Date();
    const timerTextEl = document.getElementById('timerText');
    const currentDayEl = document.getElementById('currentDay');
    if (!timerTextEl || !currentDayEl) return;

    currentDayEl.textContent = dayNamesRu[currentDay] || currentDay;

    // Only show timer for the current day and current week; otherwise, show a static message
    const today = daysOfWeek[(new Date().getDay() + 6) % 7];
    if (currentDay !== today || weekOffset !== 0 || currentDay === 'WholeWeek' || !scheduleData[currentDay]) {
        timerTextEl.textContent = currentDay === 'WholeWeek' ? "Это расписание на эту неделю" : "Выберите сегодня, чтобы увидеть живой таймер";
        return;
    }

    const daySchedule = scheduleData[currentDay];
    const currentWeek = getWeekNumber() + weekOffset;
    let timerSet = false;

    for (let i = 0; i < pairsTimeRanges.length; i++) {
        const pair = pairsTimeRanges[i];
        const [startH, startM] = pair.start.split(':').map(Number);
        const [endH, endM] = pair.end.split(':').map(Number);
        const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startH, startM);
        const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endH, endM);

        const pairClasses = daySchedule[i];
        const classesToRender = getClassesForWeek(pairClasses, currentWeek);

        if (!classesToRender || classesToRender.length === 0) continue;

        if (now < start) {
            const diff = start - now;
            timerTextEl.textContent = `Следующая пара начинается через ${formatDuration(diff)}`;
            timerSet = true;
            break;
        } else if (now >= start && now < end) {
            const diff = end - now;
            timerTextEl.textContent = `Текущая пара заканчивается через ${formatDuration(diff)}`;
            timerSet = true;
            break;
        }
    }

    if (!timerSet) {
        timerTextEl.textContent = 'Больше занятий сегодня нет';
    }
}

// Add event listeners to day buttons
document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentDay = btn.getAttribute('data-day');
        document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('ring-4', 'ring-offset-2', 'ring-blue-300'));
        btn.classList.add('ring-4', 'ring-offset-2', 'ring-blue-300');
        // Remove highlight from showWeekBtn
        const showWeekBtn = document.getElementById('showWeekBtn');
        if (showWeekBtn) showWeekBtn.classList.remove('ring-4', 'ring-offset-2', 'ring-blue-300');
        renderSchedule();
        updateTimer();
    });
});

// Show whole week button
const showWeekBtn = document.getElementById('showWeekBtn');
if (showWeekBtn) {
    showWeekBtn.addEventListener('click', () => {
        currentDay = 'WholeWeek';
        document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('ring-4', 'ring-offset-2', 'ring-blue-300'));
        showWeekBtn.classList.add('ring-4', 'ring-offset-2', 'ring-blue-300');
        renderSchedule();
        updateTimer();
    });
}

// New: Previous week button
const prevWeekBtn = document.getElementById('prevWeekBtn');
if (prevWeekBtn) {
    prevWeekBtn.addEventListener('click', () => {
        weekOffset--;
        renderSchedule();
        updateTimer();
    });
}

// New: Next week button
const nextWeekBtn = document.getElementById('nextWeekBtn');
if (nextWeekBtn) {
    nextWeekBtn.addEventListener('click', () => {
        weekOffset++;
        renderSchedule();
        updateTimer();
    });
}

// New: Reset to current week button (optional)
const resetWeekBtn = document.getElementById('resetWeekBtn');
if (resetWeekBtn) {
    resetWeekBtn.addEventListener('click', () => {
        weekOffset = 0;
        renderSchedule();
        updateTimer();
    });
}

// Highlight today's button initially (if valid)
const initBtn = document.querySelector(`.day-btn[data-day="${currentDay}"]`);
if (initBtn) initBtn.classList.add('ring-4', 'ring-offset-2', 'ring-blue-300');

// Initial render and updates
renderSchedule();
updateCurrentTime();
updateTimer();

setInterval(() => {
    updateCurrentTime();
    updateTimer();
}, 1000);
