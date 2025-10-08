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

// أزرار التنقل
document.addEventListener('DOMContentLoaded', function() {
    // تحديث الوقت كل ثانية
    updateTimer();
    setInterval(updateTimer, 1000);
    
    // تحديث التاريخ
    updateDate();
    
    // وظائف أزرار التنقل
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            alert('الانتقال إلى المحاضرة السابقة');
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            alert('الانتقال إلى المحاضرة القادمة');
        });
    }
    
    // تمييز الصف الحالي في الجدول بناءً على اليوم الحالي
    highlightCurrentDay();
});

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
            row.style.borderLeft = '4px solid #2196f3';
        }
    });
}

// إضافة تأثيرات على الجدول
document.addEventListener('DOMContentLoaded', function() {
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
        border-left: 4px solid #ffc107 !important;
    }
`;
document.head.appendChild(style);
