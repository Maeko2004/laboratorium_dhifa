function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Tambahan: Jika ingin modal popup, bisa tambah di sini, tapi untuk sederhana, gunakan scroll saja.