function calculateAudit() {
    // Standard flow rates
    const showerRate = 9;   // 9L per minute
    const toiletRate = 6;   // 6L per flush
    const tapRate = 5;      // 5L per minute
    const laundryRate = 50; // 50L per load (avg)

    let shower = document.getElementById('shower').value * showerRate;
    let toilet = document.getElementById('toilet').value * toiletRate;
    let brush = document.getElementById('brush').value * tapRate;
    let laundry = (document.getElementById('laundry').value * laundryRate) / 7; // Average per day

    let total = Math.round(shower + toilet + brush + laundry);
    
    // Show results
    document.getElementById('results-area').classList.remove('hidden');
    document.getElementById('total-liters').innerText = `${total} Liters / Day`;

    let analysis = "";
    if (total > 135) {
        analysis = `<div class='fact-card' style='border-left-color: #f44336;'>
            ❌ <b>Above Indian Standard:</b> You are exceeding the 135L/day benchmark set by the Ministry of Jal Shakti.</div>`;
    } else if (total > 50) {
        analysis = `<div class='fact-card' style='border-left-color: #ff9800;'>
            ⚠️ <b>Moderate Usage:</b> You're within urban limits but far above water-stressed regions (20-40L/day).</div>`;
    } else {
        analysis = `<div class='fact-card' style='border-left-color: #4caf50;'>
            ✅ <b>Efficient User:</b> Great job! Your consumption is highly sustainable.</div>`;
    }

    document.getElementById('analysis-box').innerHTML = analysis;
}
