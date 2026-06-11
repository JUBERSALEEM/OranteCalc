/* ============================================
   ORANTE CALC - CALCULATOR FUNCTIONS
   ============================================ */

// ===== ROI Calculator =====
function calculateROI() {
    const initial = parseFloat(document.getElementById('initial-investment').value);
    const final = parseFloat(document.getElementById('final-value').value);
    const years = parseFloat(document.getElementById('years').value) || 0;
    const months = parseFloat(document.getElementById('months').value) || 0;

    if (isNaN(initial) || isNaN(final) || initial === 0) {
        alert('Please enter valid values');
        return;
    }

    const totalReturn = final - initial;
    const roiPercent = (totalReturn / initial) * 100;

    // Calculate time in years
    const totalYears = years + (months / 12);
    let annualizedROI = 0;

    if (totalYears > 0) {
        annualizedROI = (Math.pow((final / initial), (1 / totalYears)) - 1) * 100;
    } else {
        annualizedROI = roiPercent;
    }

    // Display results
    document.getElementById('total-return').textContent = '$' + totalReturn.toLocaleString();
    document.getElementById('roi-percent').textContent = roiPercent.toFixed(2) + '%';
    document.getElementById('annualized-roi').textContent = annualizedROI.toFixed(2) + '%';

    // Show result box
    document.getElementById('result-box').classList.add('show');
}

// ===== Compound Interest Calculator =====
function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    const frequency = parseInt(document.getElementById('frequency').value) || 1;

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid values');
        return;
    }

    const r = rate / 100;
    const n = frequency;
    const t = time;

    const amount = principal * Math.pow((1 + r / n), (n * t));
    const interest = amount - principal;

    document.getElementById('compound-result').textContent = '$' + amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('interest-earned').textContent = '$' + interest.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    document.getElementById('compound-result-box').classList.add('show');
}

// ===== UAE Gratuity Calculator (Stub) =====
function calculateGratuity() {
    const basicSalary = parseFloat(document.getElementById('basic-salary').value);
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);
    const reason = document.getElementById('leave-reason').value;

    if (isNaN(basicSalary) || isNaN(startDate) || isNaN(endDate)) {
        alert('Please fill all fields');
        return;
    }

    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years = diffDays / 365;

    const dailyWage = basicSalary / 30;
    let daysRate = 21;

    if (years > 5) daysRate = 30;

    if (reason === 'resign') {
        if (years <= 3) daysRate = 7;
        else if (years <= 5) daysRate = 14;
    }

    const eligibleDays = Math.floor(years * daysRate);
    const gratuityAmount = eligibleDays * dailyWage;

    document.getElementById('service-duration').textContent = Math.floor(years) + ' Years ' + Math.floor((years % 1) * 12) + ' Months';
    document.getElementById('daily-wage').textContent = 'AED ' + dailyWage.toLocaleString();
    document.getElementById('gratuity-rate').textContent = daysRate + ' Days/Year';
    document.getElementById('eligible-days').textContent = eligibleDays + ' Days';
    document.getElementById('total-gratuity').textContent = 'AED ' + gratuityAmount.toLocaleString();

    document.getElementById('result-section').style.display = 'block';
}

// ===== Glass Weight Calculator =====
function calculateGlassWeight() {
    const length = parseFloat(document.getElementById('length').value) / 1000; // convert mm to m
    const height = parseFloat(document.getElementById('height').value) / 1000;
    const thickness = parseFloat(document.getElementById('thickness').value);

    if (isNaN(length) || isNaN(height) || isNaN(thickness)) {
        alert('Please enter valid values');
        return;
    }

    const area = length * height;
    const weight = area * thickness * 2.5; // 2.5 kg/m²/mm

    document.getElementById('glass-area').textContent = area.toFixed(2) + ' m²';
    document.getElementById('glass-weight').textContent = weight.toFixed(2) + ' kg';

    document.getElementById('glass-result-box').classList.add('show');
}

// ===== VAT Calculator =====
function calculateVAT() {
    const amount = parseFloat(document.getElementById('vat-amount').value);
    const rate = parseFloat(document.getElementById('vat-rate').value) || 5;

    if (isNaN(amount)) {
        alert('Please enter an amount');
        return;
    }

    const vat = amount * (rate / 100);
    const total = amount + vat;

    document.getElementById('vat-result').textContent = '$' + vat.toFixed(2);
    document.getElementById('vat-total').textContent = '$' + total.toFixed(2);

    document.getElementById('vat-result-box').classList.add('show');
}

// ===== Export all functions =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateROI,
        calculateCompoundInterest,
        calculateGratuity,
        calculateGlassWeight,
        calculateVAT
    };
}