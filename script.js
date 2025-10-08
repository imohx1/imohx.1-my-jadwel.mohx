// بيانات المحاضراتconst lectures = [
    { day: "الأحد", subject: "اللغة الإنجليزية", time: "07:30 ص - 09:10 ص", startTime: "07:30", endTime: "09:10", teacher: "خالد الجفن", location: "مبنى 01 / 1040120114", cancelled: true, dayIndex: 0 },
    { day: "الأحد", subject: "هندسة البرمجيات", time: "11:01 ص - 01:30 م", startTime: "11:01", endTime: "13:30", teacher: "بدر الشويع", location: "مبنى 02 / 1040220114", dayIndex: 0 },
    { day: "الاثنين", subject: "مبادئ برمجة صفحات الإنترنت", time: "07:30 ص - 10:50 ص", startTime: "07:30", endTime: "10:50", teacher: "محمد الحربي", location: "مبنى 02 / 1040220101", dayIndex: 1 },
    { day: "الاثنين", subject: "مبادئ قواعد البيانات", time: "11:01 ص - 12:40 م", startTime: "11:01", endTime: "12:40", teacher: "خالد البليهي", location: "مبنى 02 / 1040220110", dayIndex: 1 },
    { day: "الثلاثاء", subject: "أساسيات برمجة الحاسب", time: "07:30 ص - 09:10 ص", startTime: "07:30", endTime: "09:10", teacher: "خالد البليهي", location: "مبنى 02 / 1040220108", dayIndex: 2 },
    { day: "الثلاثاء", subject: "مبادئ قواعد البيانات", time: "09:20 ص - 11:00 ص", startTime: "09:20", endTime: "11:00", teacher: "خالد البليهي", location: "مبنى 02 / 1040220109", dayIndex: 2 },
    { day: "الثلاثاء", subject: "مبادئ برمجة صفحات الإنترنت", time: "11:01 ص - 12:40 م", startTime: "11:01", endTime: "12:40", teacher: "محمد الحربي", location: "مبنى 02 / 1040220101", dayIndex: 2 },
    { day: "الثلاثاء", subject: "تطبيقات الحاسب المتقدمة", time: "04:30 م - 06:10 م", startTime: "16:30", endTime: "18:10", teacher: "نايف الأسطاء", location: "مبنى 01 / 1040110112", note: "(دراسة ذاتية)", selfStudy: true, dayIndex: 2 },
    { day: "الأربعاء", subject: "أساسيات برمجة الحاسب", time: "07:30 ص - 10:50 ص", startTime: "07:30", endTime: "10:50", teacher: "خالد البليهي", location: "مبنى 02 / 1040230110", dayIndex: 3 },
    { day: "الأربعاء", subject: "أساسيات ريادة الأعمال", time: "11:01 ص - 12:41 م", startTime: "11:01", endTime: "12:41", teacher: "فارس الحربي", location: "مبنى 01 / 1040110101", dayIndex: 3 },
    { day: "الأربعاء", subject: "تطبيقات الحاسب المتقدمة", time: "04:30 م - 06:10 م", startTime: "16:30", endTime: "18:10", teacher: "نايف الأسطاء", location: "مبنى 01 / 1040110112", note: "(دراسة ذاتية)", selfStudy: true, dayIndex: 3 },
    { day: "الخميس", subject: "اللغة الإنجليزية (2)", time: "07:30 ص - 09:10 ص", startTime: "07:30", endTime: "09:10", teacher: "خالد الجفن", location: "مبنى 01 / 1040130114", dayIndex: 4 },
    { day: "الخميس", subject: "الكتابة الفنية", time: "09:20 ص - 11:00 ص", startTime: "09:20", endTime: "11:00", teacher: "يوسف الحفير", location: "مبنى 01 / 1040130114", dayIndex: 4 }
];

let currentLectureIndex = 0;

// تحويل الوقت إلى دقائق
function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}

// إيجاد المحاضرة الحالية بناءً على الوقت
function findCurrentLecture() {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = الأحد
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    for (let i = 0; i < lectures.length; i++) {
        const lec = lectures[i];
        if (lec.dayIndex === currentDay) {
            const start = timeToMinutes(lec.startTime);
            const end = timeToMinutes(lec.endTime);
            if (currentMinutes >= start && currentMinutes <= end) return i;
            if (currentMinutes < start) return i;
        }
        if (lec.dayIndex > currentDay) return i;
    }
    return 0; // إذا انتهى الأسبوع
}

// عرض المحاضرة في البطاقة
function displayLecture(index) {
    const lec = lectures[index];
    document.querySelector('.lecture-title').textContent = lec.subject + (lec.note ? ` ${lec.note}` : '');
    document.querySelector('.lecture-time').textContent = lec.time;
    document.querySelector('.lecture-teacher').textContent = lec.teacher;
    document.querySelector('.lecture-location').textContent = `📍 ${lec.location}`;
    document.querySelector('.lecture-day').textContent = `(${lec.day})`;
}

// الأسهم
function prevLecture() {
    currentLectureIndex = (currentLectureIndex - 1 + lectures.length) % lectures.length;
    displayLecture(currentLectureIndex);
}
function nextLecture() {
    currentLectureIndex = (currentLectureIndex + 1) % lectures.length;
    displayLecture(currentLectureIndex);
}

// تحديث الوقت الحالي
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.querySelector('.current-time').textContent = `${hours}:${minutes}`;
}

// تحديث التاريخ الهجري
function updateHijriDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', calendar: 'islamic' };
    const hijri = now.toLocaleDateString('ar-SA-u-ca-islamic', options);
    const time = now.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
    document.querySelector('.last-update').textContent = `آخر تحديث: ${hijri} - ${time}`;
}

// تهيئة
document.addEventListener('DOMContentLoaded', () => {
    currentLectureIndex = findCurrentLecture();
    displayLecture(currentLectureIndex);
    updateTime();
    updateHijriDate();

    setInterval(() => {
        updateTime();
        updateHijriDate();
    }, 60000);
});