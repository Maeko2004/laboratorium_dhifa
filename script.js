// EmailJS Initialization
emailjs.init("YOUR_PUBLIC_KEY"); // Ganti dengan Public Key Anda

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Handle Form Submit
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Cegah refresh halaman

    const formData = {
        from_name: document.getElementById('userName').value,
        from_email: document.getElementById('userEmail').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };

    // Kirim email via EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData) // Ganti dengan Service ID dan Template ID Anda
        .then(function(response) {
            console.log('Email berhasil dikirim!', response.status, response.text);
            document.getElementById('formMessage').innerHTML = '<p class="success">Terima kasih! Pesan Anda telah dikirim. Kami akan hubungi segera.</p>';
            document.getElementById('contactForm').reset(); // Reset form
        }, function(error) {
            console.log('Gagal kirim email:', error);
            document.getElementById('formMessage').innerHTML = '<p class="error">Maaf, ada kesalahan. Coba lagi atau hubungi kami langsung.</p>';
        });
});