/*Fungsi untuk menampilkan halaman ketikan button navigation ditekan*/
function tampilkan(id) {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(id).classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
/*menentukan supaya darkmode toggle pada body html dapat berjalan menggunakan javascript*/
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

/*Untuk mengaktifkan dan mengecek darkmode pada localstorage pengguna*/
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  darkModeToggle.checked = true;
}

/*Untuk mengaktifkan darkmode ketika button darkmode ditekan*/
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});