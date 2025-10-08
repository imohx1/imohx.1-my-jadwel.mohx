// بيانات المحاضرات
const lectures = [
    {
        day: "الأحد",
        subject: "اللغة الإنجليزية",
        time: "07:30 ص - 09:10 ص",
        teacher: "خالد الجفن",
        location: "مبنى 01 / 1040120114",
        cancelled: true,
        note: "(-لايوجد محاضرة-)"
    },
    {
        day: "الأحد",
        subject: "هندسة البرمجيات",
        time: "11:01 ص - 01:30 م",
        teacher: "بدر الشويع",
        location: "مبنى 02 / 1040220114",
        cancelled: false
    },
    {
        day: "الاثنين",
        subject: "مبادئ برمجة صفحات الإنترنت",
        time: "07:30 ص - 10:50 ص",
        teacher: "محمد الحربي",
        location: "مبنى 02 / 1040220101",
        cancelled: false
    },
    {
        day: "الاثنين",
        subject: "مبادئ قواعد البيانات",
        time: "11:01 ص - 12:40 م",
        teacher: "خالد البليهي",
        location: "مبنى 02 / 1040220110",
        cancelled: false
    },
    {
        day: "الثلاثاء",
        subject: "أساسيات برمجة الحاسب",
        time: "07:30 ص - 09:10 ص",
        teacher: "خالد البليهي",
        location: "مبنى 02 / 1040220108",
        cancelled: false
    },
    {
        day: "الثلاثاء",
        subject: "مبادئ قواعد البيانات",
        time: "09:20 ص - 11:00 ص",
        teacher: "خالد البليهي",
        location: "مبنى 02 / 1040220109",
        cancelled: false
    },
    {
        day: "الثلاثاء",
        subject: "مبادئ برمجة صفحات الإنترنت",
        time: "11:01 ص - 12:40 م",
        teacher: "محمد الحربي",
        location: "مبنى 02 / 1040220101",
        cancelled: false
    },
    {
        day: "الثلاثاء",
        subject: "تطبيقات الحاسب المتقدمة",
        time: "04:30 م - 06:10 م",
        teacher: "نايف الأسطاء",
        location: "مبنى 01 / 1040110112",
        cancelled: false,
        selfStudy: true,
        note: "(دراسة ذاتية)"
    },
    {
        day: "الأربعاء",
        subject: "أساسيات برمجة الحاسب",
        time: "07:30 ص - 10:50 ص",
        teacher: "خالد البليهي",
        location: "مبنى 02 / 1040230110",
        cancelled: false
    },
    {
        day: "الأربعاء",
        subject: "أساسيات ريادة الأعمال",
        time: "11:01 ص - 12:41 م",
        teacher: "فارس الحربي",
        location: "مبنى 01 / 1040110101",
        cancelled: false
    },
    {
        day: "الأربعاء",
        subject: "تطبيقات الحاسب المتقدمة",
        time: "04:30 م - 06:10 م",
        teacher: "نايف الأسطاء",
        location: "مبنى 01 / 1040110112",
        cancelled: false,
        selfStudy: true,
        note: "(دراسة ذاتية)"
    },
    {
        day: "الخميس",
        subject: "اللغة الإنجليزية (2)",
        time: "07:30 ص - 09:10 ص",
        teacher: "خالد الجفن",
        location: "مبنى 01 / 1040130114",
        cancelled: false
    },
    {
        day: "الخميس",
        subject: "الكتابة الفنية",
        time: "09:20 ص - 11:00 ص",
        teacher: "يوسف الحفير",
        location: "مبنى 01 / 1040130114",
        cancelled: false
    }
];

let currentLectureIndex = 0;

// عرض المحاضرة الحالية
function displayLecture(index) {
    const lecture = lectures[index];
    
    document.querySelector('.lecture-title').textContent = lecture.subject;
    document.querySelector('.lecture-time').textContent = lecture.time;
    document.querySelector('.lecture-info').textContent = `المدرس: ${lecture.teacher}`;
    document.querySelector('.lecture-location').textContent = `📍 ${lecture.location}`;
    document.querySelector('.lecture-day').textContent = lecture.day;
    document.querySelector('.lecture-badge').textContent = `🔔 المحاضرة (${index + 1} من ${lectures.length})`;
    
    const statusElement = document.querySelector('.lecture-status');
    const labelElement = document.querySelector('.lecture-label');
    
    if (lecture.cancelled) {
        statusElement.textContent = lecture.note;
        statusElement.className = 'lecture-status cancelled';
        labelElement.textContent = 'محاضرة ملغية';
        labelElement.style.display = 'inline-block';
    } else if (lecture.selfStudy) {
        statusElement.textContent = lecture.note;
        statusElement.className = 'lecture-status self-study';
        labelElement.textContent = 'دراسة ذاتية';
        labelElement.style.display = 'inline-block';
    } else {
        statusElement.textContent = '';
        labelElement.style.display = 'none';
    }
}

// تحديث الوقت الحالي
function updateTimer() {
    const timerElement = document.querySelector('.lecture-timer');
    if (timerElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        // تحويل إلى صيغة عربية
        const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        const timeString = `${hours}:${minutes}:${seconds}`;
        const arabicTime = timeString.split('').map(char => {
            if (char >= '0' && char <= '9') {
                return arabicNumerals[parseInt(char)];
            }
            return char;
        }).join('');
        
        // تحديد صباحاً أو مساءً
        const period = now.getHours() >= 12 ? 'م' : 'ص';
        timerElement.textContent = `${arabicTime} ${period}`;
    }
}

// تحديث التاريخ
function updateDate() {
    const dateElement = document.querySelector('.last-update');
    if (dateElement) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const arabicDate = now.toLocaleDateString('ar-SA', options);
        dateElement.textContent = `آخر تحديث: ${arabicDate}`;
    }
}

// تمييز اليوم الحالي في الجدول
function highlightCurrentDay() {
    const now = new Date();
    const days = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const currentDay = days[now.getDay()];
    
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const dayCell = row.querySelector('td:first-child');
        if (dayCell && dayCell.textContent.trim() === currentDay) {
            row.style.background = '#e3f2fd';
            row.style.borderRight = '4px solid #2196f3';
        }
    });
}

// التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // عرض أول محاضرة
    displayLecture(currentLectureIndex);
    
    // تحديث الوقت كل ثانية
    updateTimer();
    setInterval(updateTimer, 1000);
    
    // تحديث التاريخ
    updateDate();
    
    // تمييز اليوم الحالي
    highlightCurrentDay();
    
    // وظائف أزرار التنقل
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentLectureIndex--;
            if (currentLectureIndex < 0) {
                currentLectureIndex = lectures.length - 1;
            }
            displayLecture(currentLectureIndex);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentLectureIndex++;
            if (currentLectureIndex >= lectures.length) {
                currentLectureIndex = 0;
            }
            displayLecture(currentLectureIndex);
        });
    }
    
    // إضافة تأثيرات على الجدول
    const tableRows = document.querySelectorAll('tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            // إزالة التحديد من جميع الصفوف
            tableRows.forEach(r => r.classList.remove('selected'));
            // إضافة التحديد للصف الحالي
            this.classList.add('selected');
        });
    });
});

// إضافة CSS للصف المحدد
const style = document.createElement('style');
style.textContent = `
    tbody tr.selected {
        background: #fff3cd !important;
        border-right: 4px solid #ffc107 !important;
    }
`;
document.head.appendChild(style);
