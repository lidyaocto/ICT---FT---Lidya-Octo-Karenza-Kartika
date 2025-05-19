Swal.fire({ /* Foto kelompok*/
  imageUrl:"https://i.pinimg.com/736x/90/18/47/901847df2bc7defdd4d74b6d10956da6.jpg",
  imageWidth: 370,
  imageHeight: 270,
  imageAlt: "Foto Kelompok",
  showCloseButton:"true",
  title:"Selamat Datang",
  text:"Terima kasih telah mengunjungi website kami!",
  confirmButtonText:"Tutup"
});

function cybersecurity(){ /*Arahkan ke halaman cybersecurity*/
Swal.fire({
  title: "Menuju halaman Cybersecurity",
  text: "Anda akan diarahkan ke halaman Cybersecurity",
  icon: "info",
  confirmButtonText: "Lanjutkan",
}); if (result) {}

}

function photobooth(){ /*Arahkan ke halaman photobooth*/
Swal.fire({
  title: "Menuju halaman Photobooth",
  text: "Anda akan diarahkan ke halaman Photobooth",
  icon: "info",
  confirmButtonText: "Lanjutkan",
}); if (result) {}

}

function about(){ /*Arahkan ke halaman About*/
Swal.fire({
  title: "Menuju halaman About",
  text: "Anda akan diarahkan ke halaman About",
  icon: "info",
  confirmButtonText: "Lanjutkan",
}); if (result) {}

}

const darkModeToggle = document.getElementById('dark-mode');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});