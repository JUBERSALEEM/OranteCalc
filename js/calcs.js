/* ============================================
   ORANTE CALC - CALCULATOR FUNCTIONS
   ============================================ */

// ===== ROI Calculator =====
function calculateROI() {
    // Get input values
    const initialInput = document.getElementById('initial-investment');
    const finalInput = document.getElementById('final-value');

    const initial = parseFloat(initialInput.value);
    const final = parseFloat(finalInput.value);
    const years = parseFloat(document.getElementById('years').value) || 0;
    const months = parseFloat(document.getElementById('months').value) || 0;

    // Debug - check values
    console.log('Initial:', initialInput.value);
    console.log('Final:', finalInput.value);
    console.log('Parsed Initial:', initial);
    console.log('Parsed Final:', final);

    // Validation - with better error messages
    if (!initialInput.value || initialInput.value.trim() === '') {
        alert('Please enter initial investment amount');
        initialInput.focus();
        return;
    }

    if (!finalInput.value || finalInput.value.trim() === '') {
        alert('Please enter final value');
        finalInput.focus();
        return;
    }

    if (isNaN(initial) || isNaN(final)) {
        alert('Please enter valid numbers only');
        return;
    }

    if (initial === 0) {
        alert('Initial investment cannot be zero');
        return;
    }

    // Calculate Total Return (Profit/Loss)
    const totalReturn = final - initial;

    // Calculate ROI Percentage
    const roiPercent = (totalReturn / initial) * 100;

    // Calculate time in years
    const totalYears = years + (months / 12);
    let annualizedROI = 0;

    if (totalYears > 0) {
        annualizedROI = (Math.pow((final / initial), (1 / totalYears)) - 1) * 100;
    } else {
        annualizedROI = roiPercent;
    }

    console.log('Total Return:', totalReturn);
    console.log('ROI %:', roiPercent);
    console.log('Annualized %:', annualizedROI);

    // Display results
    document.getElementById('total-return').textContent = '$' + totalReturn.toLocaleString();
    document.getElementById('roi-percent').textContent = roiPercent.toFixed(2) + '%';
    document.getElementById('annualized-roi').textContent = annualizedROI.toFixed(2) + '%';

    // Show result box
    document.getElementById('result-box').classList.add('show');
}