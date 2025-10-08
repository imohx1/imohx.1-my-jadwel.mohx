// بيانات المحاضرات
const lectures = [
    {
        day: "الأحد",
        subject: "اللغة الإنجليزية",
        time: "07:30 ص - 09:10 ص",
        teacher: "خالد الجفن",
        location: "مبنى 01 / 1040120114"
    },
    {
        day: "الأحد",
        subject: "هندسة البرمجيات",
        time: "11:01 ص - 01:30 م",
        teacher: "بدر الشويع",
        location: "مبنى 02 / 1040220114"
    },
    {
        day: "الاثنين",
        subject: "مبادئ برمجة صفحات الإنترنت",
        time: "07:30 ص - 10:50 ص",
        teacher: "محمد الحربي",
        location: "مبنى 02 / 1040220101"
    },
    {
        day: "الاثنين",
        subject: "مبادئ قواعد البيانات",
        time: "11:01 ص - 12:40 م",
        teacher: "خالد البليهي",
        location: "مبنى 02 / 1040220110"
    },
    {
        day: "الثلاثاء",
        subject: "أساسيات برمجة الحاسب",
        time: "07:30 ص - 09:10 ص",
        teacher: "خالد البليهي",
        location: "مبنى 02 / 1040220108"
    },
    {
        day: "الثلاثاء",
        subject: "مبادئ قواعد البيانات",
        time: "09:20 ص - 11:00 ص",
        teacher: "خالد البليهي",
        location: "مبنى 02 / 1040220109"
    },
    {
        day: "الثلاثاء",
        subject: "مبادئ برمجة صفحات الإنترنت",
        time: "11:01 ص - 12:40 م",
        teacher: "محمد الحربي",
        location: "مبنى 02 / 1040220101"
    },
    {
        day: "الثلاثاء",
        subject: "تطبيقات الحاسب المتقدمة",
        time: "04:30 م - 06:10 م",
        teacher: "نايف الأسطاء",
        location: "مبنى 01 / 1040110112",
        note: "(دراسة ذاتية)"
    },
    {
        day: "الأربعاء",
        subject: "أساسيات برمجة الحاسب",
        time: "07:30 ص - 10:50 ص",
        teacher: "خالد البليهي",
        location: "مبنى 02 / 1040230110"
    },
    {
        day: "الأربعاء",
        subject: "أساسيات ريادة الأعمال",
        time: "11:01 ص - 12:41 م",
        teacher: "فارس الحربي",
        location: "مبنى 01 / 1040110101"
    },
    {
        day: "الأربعاء",
        subject: "تطبيقات الحاسب المتقدمة",
        time: "04:30 م - 06:10 م",
        teacher: "نايف الأسطاء",
        location: "مبنى 01 / 1040110112",
        note: "(دراسة ذاتية)"
    },
    {
        day: "الخميس",
        subject: "اللغة الإنجليزية (2)",
        time: "07:30 ص - 09:10 ص",
        teacher: "خالد الجفن",
        location: "مبنى 01 / 1040130114"
    },
    {
        day: "الخميس",
        subject: "الكتابة الفنية",
        time: "09:20 ص - 11:00 ص",
        teacher: "يوسف الحفير",
        location: "مبنى 01 / 1040130114"
    }
];

let currentLectureIndex = 11; // اللغة الإنجليزية (2)

// عرض المحاضرة
function displayLecture(index) {
    const lecture = lectures[index];
    
    document.querySelector('.lecture-title').textContent = lecture.subject;
    document.querySelector('.lecture-time').textContent = lecture.time;
    document.querySelector('.lecture-teacher').textContent = lecture.teacher;
    document.querySelector('.lecture-location').textContent = `📍 ${lecture.location}`;
    document.querySelector('.lecture-day').textContent = `(${lecture.day})`;
}

// المحاضرة السابقة
function prevLecture() {
    currentLectureIndex--;
    if (currentLectureIndex < 0) {
        currentLectureIndex = lectures.length - 1;
    }
    displayLecture(currentLectureIndex);
}

// المحاضرة القادمة
function nextLecture() {
    currentLectureIndex++;
    if (currentLectureIndex >= lectures.length) {
        currentLectureIndex = 0;
    }
    displayLecture(currentLectureIndex);
}

// تحديث الوقت
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
    const hijriDate = now.toLocaleDateString('ar-SA-u-ca-islamic', options);
    const time = now.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
    
    document.querySelector('.last-update').textContent = `آخر تحديث: ${hijriDate} - ${time}`;
}

// تمييز اليوم الحالي (معطل)
function highlightCurrentDay() {
    // لا نريد تمييز اليوم الحالي
}

// التهيئة
document.addEventListener('DOMContentLoaded', function() {
    displayLecture(currentLectureIndex);
    updateTime();
    updateHijriDate();
    highlightCurrentDay();
    
    // تحديث الوقت كل دقيقة
    setInterval(updateTime, 60000);
    setInterval(updateHijriDate, 60000);
});
