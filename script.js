function nextStep(stepId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(stepId).classList.remove('hidden');
}

function selectBusiness(businessName) {
    document.getElementById('scheduleList').innerHTML = `
        <div class="business" onclick="selectSchedule('${businessName}', '8:00 AM')">8:00 AM</div>
        <div class="business" onclick="selectSchedule('${businessName}', '12:00 PM')">12:00 PM</div>
        <div class="business" onclick="selectSchedule('${businessName}', '6:00 PM')">6:00 PM</div>
    `;
    nextStep('step3');
}

function selectSchedule(businessName, time) {
    document.getElementById('confirmationMessage').innerText = `¿Confirmar reserva para ${businessName} a las ${time}?`;
    nextStep('step4');
}

function confirmReservation() {
    const confirmationText = document.getElementById('confirmationMessage').innerText;
    document.getElementById('successMessage').innerText = `¡Te has suscrito al curso con éxito! ${confirmationText}`;
    
    const qr = new QRious({
        element: document.getElementById('qrCode'),
        value: confirmationText,
        size: 200
    });

    nextStep('step5');
}
