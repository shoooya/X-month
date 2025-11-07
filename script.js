// 今日の日付を最大値として設定
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const currentYear = today.getFullYear();
    document.getElementById('year').setAttribute('max', currentYear);
});

// 計算ボタンのイベントリスナー
document.getElementById('calculateBtn').addEventListener('click', calculateAge);

// Enterキーでも計算できるようにする
['year', 'month', 'day'].forEach(id => {
    document.getElementById(id).addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            calculateAge();
        }
    });
});

function calculateAge() {
    const yearInput = document.getElementById('year').value;
    const monthInput = document.getElementById('month').value;
    const dayInput = document.getElementById('day').value;

    // 入力チェック
    if (!yearInput || !monthInput || !dayInput) {
        alert('年、月、日をすべて入力してください');
        return;
    }

    const year = parseInt(yearInput);
    const month = parseInt(monthInput);
    const day = parseInt(dayInput);

    // 月の範囲チェック
    if (month < 1 || month > 12) {
        alert('月は1から12の間で入力してください');
        return;
    }

    // 日の範囲チェック（その月の最大日数を考慮）
    const maxDay = new Date(year, month, 0).getDate();
    if (day < 1 || day > maxDay) {
        alert(`${month}月の日は1から${maxDay}の間で入力してください`);
        return;
    }

    const birthdate = new Date(year, month - 1, day);
    const today = new Date();

    // 入力された日付が未来の日付でないかチェック
    if (birthdate > today) {
        alert('未来の日付は入力できません');
        return;
    }

    // 年齢を計算
    const age = calculateDetailedAge(birthdate, today);

    // 総日数を計算
    const totalDays = Math.floor((today - birthdate) / (1000 * 60 * 60 * 24));

    // 結果を表示
    displayResult(age, totalDays);
}

function calculateDetailedAge(birthdate, today) {
    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    // 日数が負の場合、前の月から借りる
    if (days < 0) {
        months--;
        // 前月の日数を取得
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    // 月数が負の場合、前の年から借りる
    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

function displayResult(age, totalDays) {
    // 数値をアニメーション付きで表示
    animateNumber('years', age.years);
    animateNumber('months', age.months);
    animateNumber('days', age.days);
    animateNumber('totalDays', totalDays);

    // 結果セクションを表示
    const resultSection = document.getElementById('resultSection');
    resultSection.classList.add('show');

    // スムーズにスクロール
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function animateNumber(elementId, finalValue) {
    const element = document.getElementById(elementId);
    const duration = 1000; // 1秒
    const steps = 50;
    const stepValue = finalValue / steps;
    const stepDuration = duration / steps;
    let currentValue = 0;

    const timer = setInterval(() => {
        currentValue += stepValue;
        if (currentValue >= finalValue) {
            element.textContent = finalValue;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(currentValue);
        }
    }, stepDuration);
}
