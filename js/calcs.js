/* ============================================
   ORANTE CALC - ROI CALCULATOR (MATCHES YOUR CODE)
   ============================================ */

// Get tiered rate (matching your code)
function getRate(amount) {
    if (amount <= 500) return 0.0125;
    if (amount >= 501 && amount <= 5000) return 0.015;
    if (amount >= 5001 && amount <= 15000) return 0.0175;
    if (amount >= 15001) return 0.02;
    return 0;
}

function calculateROI() {
    const initial = parseFloat(document.getElementById('initial-investment').value);
    const years = parseFloat(document.getElementById('years').value) || 0;
    const months = parseFloat(document.getElementById('months').value) || 0;

    if (isNaN(initial) || initial <= 0) {
        alert('Please enter valid investment amount');
        return;
    }

    // Get rate based on tier
    const rate = getRate(initial);

    // Calculate based on your formula
    const totalReturn = initial * rate;
    const roiPercent = rate * 100;

    // Time calculation
    const totalYears = years + (months / 12);
    let annualizedROI = 0;

    if (totalYears > 0) {
        annualizedROI = (Math.pow((initial + totalReturn) / initial, (1 / totalYears)) - 1) * 100;
    } else {
        annualizedROI = roiPercent;
    }

    // Display
    document.getElementById('roi-rate').textContent = (rate * 100).toFixed(2) + '%';
    document.getElementById('total-return').textContent = '$' + totalReturn.toFixed(2);
    document.getElementById('roi-percent').textContent = roiPercent.toFixed(2) + '%';
    document.getElementById('annualized-roi').textContent = annualizedROI.toFixed(2) + '%';

    document.getElementById('result-box').classList.add('show');
}