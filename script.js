// بيانات المحاضرات
const lectures = [
    {
        day: "الأحد",
        subject: "اللغة الإنجليزية",
        time: "07:30 ص - 09:10 ص",
        startTime: "07:30",
        endTime: "09:10",
        teacher: "خالد الجفن",
        location: "مبنى 01 / 1040120114",
        dayIndex: 0
    },
    {
        day: "الأحد",
        subject: "هندسة البرمجيات",
        time: "11:01 ص - 01:30 م",
        startTime: "11:01",
        endTime: "13:30",
        teacher: "بدر الشويع",
        location: "مبنى 02 / 1040220114",
        dayIndex: 0
    },
    {
        day: "الاثنين",
        subject: "مبادئ برمجة صفحات الإنترنت",
        time: "07:30 ص - 10:50 ص",
        startTime: "07:30",
        endTime: "10:50",
        teacher: "محمد الحربي",
        location: "مبنى 02 / 1040220101",
        dayIndex: 1
    },
    {
        day: "الاثنين",
        subject: "مبادئ قواعد البيانات",
        time: "11:01 ص - 12:40 م",
        startTime: "11:01",
        endTime: "12:40",
        teacher: "خالد البليهي",
        location: "مبنى 02 / 1040220110",
        dayIndex: 1
    },
    {
        day: "الثلاثاء",
        subject: "أساسيات برمجة الحاسب",
        time: "07:30 ص - 09:10 ص",
        startTime: "07:30",
        endTime: "09:10",
        teacher: "خالد البليهي",
        location: "مبنى 02 / 1040220108",
        dayIndex: 2
    },
    {
        day: "الثلاثاء",
        subject: "مبادئ قواعد البيانات",
        time: "09:20 ص - 11:00 ص",
        startTime: "09:20",
        endTime: "11:00",
        teacher: "خالد البليهي",
        location: "مبنى 02 / 1040220109",
        dayIndex: 2
    },
    {
        day: "الثلاثاء",
        subject: "مبادئ برمجة صفحات الإنترنت",
        time: "11:01 ص - 12:40 م",
        startTime: "11:01",
        endTime: "12:40",
        teacher: "محمد الحربي",
        location: "مبنى 02 / 1040220101",
        dayIndex: 2
    },
    {
        day: "الثلاثاء",
        subject: "تطبيقات الحاسب المتقدمة",
        time: "04:30 م - 06:10 م",
        startTime: "16:30",
        endTime: "18:10",
        teacher: "نايف الأسطاء",
        location: "مبنى 01 / 1040110112",
        note: "(دراسة ذاتية)",
        dayIndex: 2
    },
    {
        day: "الأربعاء",
        subject: "أساسيات برمجة الحاسب",
        time: "07:30 ص - 10:50 ص",
        startTime: "07:30",
        endTime: "10:50",
        teacher: "خالد البليهي",
        location: "مبنى 02 / 1040230110",
        dayIndex: 3
    },
    {
        day: "الأربعاء",
        subject: "أساسيات ريادة الأعمال",
        time: "11:01 ص - 12:41 م",
        startTime: "11:01",
        endTime: "12:41",
        teacher: "فارس الحربي",
        location: "مبنى 01 / 1040110101",
        dayIndex: 3
    },
    {
        day: "الأربعاء",
        subject: "تطبيقات الحاسب المتقدمة",
        time: "04:30 م - 06:10 م",
        startTime: "16:30",
        endTime: "18:10",
        teacher: "نايف الأسطاء",
        location: "مبنى 01 / 1040110112",
        note: "(دراسة ذاتية)",
        dayIndex: 3
    },
    {
        day: "الخميس",
        subject: "اللغة الإنجليزية (2)",
        time: "07:30 ص - 09:10 ص",
        startTime: "07:30",
        endTime: "09:10",
        teacher: "خالد الجفن",
        location: "مبنى 01 / 1040130114",
        dayIndex: 4
    },
    {
        day: "الخميس",
        subject: "الكتابة الفنية",
        time: "09:20 ص - 11:00 ص",
        startTime: "09:20",
        endTime: "11:00",
        teacher: "يوسف الحفير",
        location: "مبنى 01 / 1040130114",
        dayIndex: 4
    }
];

let currentLectureIndex = 11; // اللغة الإنجليزية (2)

// تحويل الوقت إلى دقائق
function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}

// إيجاد المحاضرة الحالية أو القادمة
function findCurrentLecture() {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = الأحد
    const currentTimeMinutes = now.getHours() * 60 + now.getMinutes();
    
    // البحث عن المحاضرة الحالية في نفس اليوم
    for (let i = 0; i < lectures.length; i++) {
        const lecture = lectures[i];
        if (lecture.dayIndex === currentDay) {
            const startMinutes = timeToMinutes(lecture.startTime);
            const endMinutes = timeToMinutes(lecture.endTime);
            
            // إذا كان الوقت الحالي بين بداية المحاضرة و (بداية المحاضرة + 25 دقيقة)
            if (currentTimeMinutes >= startMinutes && currentTimeMinutes < startMinutes + 25) {
                return i;
            }
            
            // إذا كان الوقت الحالي بعد 25 دقيقة من البداية وقبل نهاية المحاضرة
            // نعتبرها انتهت ونبحث عن القادمة
            if (currentTimeMinutes >= startMinutes + 25 && currentTimeMinutes < endMinutes) {
                // البحث عن المحاضرة القادمة
                for (let j = i + 1; j < lectures.length; j++) {
                    if (lectures[j].dayIndex >= currentDay) {
                        return j;
                    }
                }
                // إذا لم نجد، نرجع للمحاضرة الأولى
                return 0;
            }
        }
    }
    
    // البحث عن أول محاضرة قادمة
    for (let i = 0; i < lectures.length; i++) {
        const lecture = lectures[i];
        if (lecture.dayIndex > currentDay) {
            return i;
        }
        if (lecture.dayIndex === currentDay) {
            const startMinutes = timeToMinutes(lecture.startTime);
            if (currentTimeMinutes < startMinutes) {
                return i;
            }
        }
    }
    
    // إذا انتهى الأسبوع، نرجع للمحاضرة الأولى
    return 0;
}

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

// تحديث المحاضرة الحالية
function updateCurrentLecture() {
    currentLectureIndex = findCurrentLecture();
    displayLecture(currentLectureIndex);
}

// تمييز اليوم الحالي (معطل)
function highlightCurrentDay() {
    // لا نريد تمييز اليوم الحالي
}

// اختيار اليوم وتصفية الجدول
function selectDay() {
    const dayNumber = prompt("أدخل رقم اليوم (1-5):\n1 = الأحد\n2 = الاثنين\n3 = الثلاثاء\n4 = الأربعاء\n5 = الخميس");
    
    if (dayNumber === null) return; // إلغاء
    
    const day = parseInt(dayNumber);
    
    if (isNaN(day) || day < 1 || day > 5) {
        alert("الرجاء إدخال رقم صحيح من 1 إلى 5");
        return;
    }
    
    const dayNames = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"];
    const selectedDay = dayNames[day - 1];
    
    filterTableByDay(selectedDay);
}

// تصفية الجدول حسب اليوم
function filterTableByDay(dayName) {
    const rows = document.querySelectorAll('.schedule-table tbody tr');
    
    if (dayName === null) {
        // إظهار جميع الصفوف
        rows.forEach(row => {
            row.style.display = '';
        });
        return;
    }
    
    rows.forEach(row => {
        const dayCell = row.cells[0].textContent;
        if (dayCell === dayName) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// إعادة تعيين الجدول لإظهار جميع الأيام
function resetTable() {
    filterTableByDay(null);
}

// التهيئة
document.addEventListener('DOMContentLoaded', function() {
    updateCurrentLecture();
    updateTime();
    updateHijriDate();
    highlightCurrentDay();
    
    // تحديث الوقت والمحاضرة كل دقيقة
    setInterval(function() {
        updateTime();
        updateHijriDate();
        updateCurrentLecture();
    }, 60000);
});
