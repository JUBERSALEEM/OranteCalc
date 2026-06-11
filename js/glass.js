/* ============================================
   ORANTE CALC - GLASS CALCULATOR
   ============================================ */

// Tab Switching
function showGlass(type, btn) {
    document.querySelectorAll('.roi-card').forEach(c => c.style.display = 'none');
    document.getElementById(type).style.display = 'block';
    document.querySelectorAll('.roi-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
}

// SGU - Single Glass Unit
function calcSGU() {
    let l = Number(document.getElementById("sguL").value) / 1000;
    let h = Number(document.getElementById("sguH").value) / 1000;
    let t = Number(document.getElementById("sguT").value) || 6;
    if (isNaN(l) || isNaN(h)) return;
    let area = l * h;
    let weight = area * t * 2.5;
    document.getElementById("sguArea").innerText = area.toFixed(2) + " m²";
    document.getElementById("sguWeight").innerText = weight.toFixed(2) + " kg";
}

// DGU - Double Glass Unit
function calcDGU() {
    let l = Number(document.getElementById("dguL").value) / 1000;
    let h = Number(document.getElementById("dguH").value) / 1000;
    let t1 = Number(document.getElementById("dguT1").value) || 6;
    let t2 = Number(document.getElementById("dguT2").value) || 6;
    if (isNaN(l) || isNaN(h)) return;
    let area = l * h;
    let weight = area * (t1 + t2) * 2.5;
    document.getElementById("dguArea").innerText = area.toFixed(2) + " m²";
    document.getElementById("dguWeight").innerText = weight.toFixed(2) + " kg";
}

// Laminated - Glass + PVB + Glass
function calcLam() {
    let l = Number(document.getElementById("lamL").value) / 1000;
    let h = Number(document.getElementById("lamH").value) / 1000;
    let t1 = Number(document.getElementById("lamT1").value) || 6;
    let pvb = Number(document.getElementById("lamT2").value) || 0.38;
    let t2 = Number(document.getElementById("lamT3").value) || 6;
    if (isNaN(l) || isNaN(h)) return;
    let area = l * h;
    let weight = area * (t1 + pvb + t2) * 2.5;
    document.getElementById("lamArea").innerText = area.toFixed(2) + " m²";
    document.getElementById("lamWeight").innerText = weight.toFixed(2) + " kg";
}

// DGU + Laminated
function calcDguLam() {
    let l = Number(document.getElementById("dguLamL").value) / 1000;
    let h = Number(document.getElementById("dguLamH").value) / 1000;
    let t1 = Number(document.getElementById("dguLamT1").value) || 6;
    let t2 = Number(document.getElementById("dguLamT2").value) || 6;
    let pvb = Number(document.getElementById("dguLamPVB").value) || 0.38;
    if (isNaN(l) || isNaN(h)) return;
    let area = l * h;
    let weight = area * ((t1 + t1) + (t2 + pvb + t2)) * 2.5;
    document.getElementById("dguLamArea").innerText = area.toFixed(2) + " m²";
    document.getElementById("dguLamWeight").innerText = weight.toFixed(2) + " kg";
}

// Double Laminated
function calcDoubleLam() {
    let l = Number(document.getElementById("dblL").value) / 1000;
    let h = Number(document.getElementById("dblH").value) / 1000;
    let t1 = Number(document.getElementById("dblT1").value) || 6;
    let pvb1 = Number(document.getElementById("dblPVB1").value) || 0.38;
    let t2 = Number(document.getElementById("dblT2").value) || 6;
    let pvb2 = Number(document.getElementById("dblPVB2").value) || 0.38;
    if (isNaN(l) || isNaN(h)) return;
    let area = l * h;
    let weight = area * ((t1 + pvb1 + t2) + (t2 + pvb2 + t1)) * 2.5;
    document.getElementById("dblArea").innerText = area.toFixed(2) + " m²";
    document.getElementById("dblWeight").innerText = weight.toFixed(2) + " kg";
}

// Triple Laminated
function calcTripleLam() {
    let l = Number(document.getElementById("triL").value) / 1000;
    let h = Number(document.getElementById("triH").value) / 1000;
    let t1 = Number(document.getElementById("triT1").value) || 6;
    let pvb1 = Number(document.getElementById("triPVB1").value) || 0.38;
    let t2 = Number(document.getElementById("triT2").value) || 6;
    let pvb2 = Number(document.getElementById("triPVB2").value) || 0.38;
    let t3 = Number(document.getElementById("triT3").value) || 6;
    let pvb3 = Number(document.getElementById("triPVB3").value) || 0.38;
    if (isNaN(l) || isNaN(h)) return;
    let area = l * h;
    let weight = area * ((t1 + pvb1 + t2) + (t2 + pvb2 + t3) + (t3 + pvb3 + t1)) * 2.5;
    document.getElementById("triArea").innerText = area.toFixed(2) + " m²";
    document.getElementById("triWeight").innerText = weight.toFixed(2) + " kg";
}

// Event Listeners
document.getElementById("sguL").addEventListener("input", calcSGU);
document.getElementById("sguH").addEventListener("input", calcSGU);
document.getElementById("sguT").addEventListener("input", calcSGU);

document.getElementById("dguL").addEventListener("input", calcDGU);
document.getElementById("dguH").addEventListener("input", calcDGU);
document.getElementById("dguT1").addEventListener("input", calcDGU);
document.getElementById("dguT2").addEventListener("input", calcDGU);

document.getElementById("lamL").addEventListener("input", calcLam);
document.getElementById("lamH").addEventListener("input", calcLam);
document.getElementById("lamT1").addEventListener("input", calcLam);
document.getElementById("lamT2").addEventListener("input", calcLam);
document.getElementById("lamT3").addEventListener("input", calcLam);

document.getElementById("dguLamL").addEventListener("input", calcDguLam);
document.getElementById("dguLamH").addEventListener("input", calcDguLam);
document.getElementById("dguLamT1").addEventListener("input", calcDguLam);
document.getElementById("dguLamT2").addEventListener("input", calcDguLam);
document.getElementById("dguLamPVB").addEventListener("input", calcDguLam);

document.getElementById("dblL").addEventListener("input", calcDoubleLam);
document.getElementById("dblH").addEventListener("input", calcDoubleLam);
document.getElementById("dblT1").addEventListener("input", calcDoubleLam);
document.getElementById("dblPVB1").addEventListener("input", calcDoubleLam);
document.getElementById("dblT2").addEventListener("input", calcDoubleLam);
document.getElementById("dblPVB2").addEventListener("input", calcDoubleLam);

document.getElementById("triL").addEventListener("input", calcTripleLam);
document.getElementById("triH").addEventListener("input", calcTripleLam);
document.getElementById("triT1").addEventListener("input", calcTripleLam);
document.getElementById("triPVB1").addEventListener("input", calcTripleLam);
document.getElementById("triT2").addEventListener("input", calcTripleLam);
document.getElementById("triPVB2").addEventListener("input", calcTripleLam);
document.getElementById("triT3").addEventListener("input", calcTripleLam);
document.getElementById("triPVB3").addEventListener("input", calcTripleLam);