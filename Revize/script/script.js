/* Butonlara tıklandığında içeriği değiştiren fonksiyon */
function changeInfoAndImg() {
  var buttons = document.querySelectorAll(".classes-buttons button");
  var img = document.getElementById("classes-chosen-photo");
  var title = document.getElementById("info-title");
  var desc = document.getElementById("info-desc");
  var timeTitle = document.getElementById("info-time-title");
  var time = document.getElementById("info-time");
  var timeAdd = document.getElementById("info-time-add");
  var timeExtra = document.getElementById("info-time-extra");

  /* Tüm butonlar arasında döngü başlat ve tıklandığında fonksiyon ata */
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // 1) Tüm butonlardan vurgulama (highlight) sınıfını kaldır
      buttons.forEach((btn) => btn.classList.remove("highlight"));

      // 2) Sadece tıklanan butonu vurgula
      this.classList.add("highlight");

      // 3) Buton kimliğine göre metinleri ve resmi değiştir
      if (this.id === "btn-yoga") {
        title.textContent = "Why are your Yoga?";
        desc.textContent =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.";
        timeTitle.textContent = "When comes Yoga Your Time.";
        time.textContent = "Saturday-Sunday: 8:00am - 10:00am";
        timeAdd.textContent = "Monday-Tuesday: 10:00am - 12:00pm";
        timeExtra.textContent = "Wednesday-Friday: 3:00pm - 6:00pm";
        img.src = "./images/yoga.jpg";
      } else if (this.id === "btn-group") {
        title.textContent = "Group Classes";
        desc.textContent =
          "Enjoy the pleasure of working out while socializing in group classes. These sessions not only help you stay motivated but also create a sense of community, making your fitness journey more enjoyable and engaging.";
        timeTitle.textContent = "Group Classes Schedule";
        time.textContent = "Saturday-Sunday: 10:00am - 12:00pm";
        timeAdd.textContent = "Monday-Tuesday: 1:00pm - 3:00pm";
        timeExtra.textContent = "Wednesday-Friday: 5:00pm - 7:00pm";
        img.src = "./images/group.webp";
      } else if (this.id === "btn-solo") {
        title.textContent = "Solo Workouts";
        desc.textContent =
          "Achieve your personal goals with individual training sessions. These workouts allow you to focus on your specific needs, improve your performance, and progress at your own pace. Whether you're aiming for strength, endurance, personalized training helps you stay dedicated.";
        timeTitle.textContent = "Solo Workouts Schedule";
        time.textContent = "Everyday: 6:00am - 8:00am";
        timeAdd.textContent = "";
        timeExtra.textContent = "Everyday: 4:00pm - 6:00pm";
        img.src = "./images/solo.jpg";
      } else if (this.id === "btn-stretching") {
        title.textContent = "Stretching Sessions";
        desc.textContent =
          "Stretching sessions for flexibility and relaxation. These sessions help improve mobility, reduce muscle tension, and enhance overall well-being. Whether you're recovering from a workout or simply looking to relieve stress, guided stretching exercises provide a refreshing way to relax your body and mind.";
        timeTitle.textContent = "Stretching Sessions Schedule";
        time.textContent = "Saturday-Sunday: 8:00am - 9:00am";
        timeAdd.textContent = "Monday-Tuesday: 4:00pm - 5:00pm";
        timeExtra.textContent = "Wednesday-Friday: 7:00pm - 8:00pm";
        img.src = "./images/stret.webp";
      }
    });
  });
}
// Sayfa yüklenir yüklenmez fonksiyonu çağırır
changeInfoAndImg();

/* BMI hesaplama */
function calculateBMI() {
  var height = parseFloat(document.getElementById("height").value) / 100;
  var weight = parseFloat(document.getElementById("weight").value);
  if (!height || !weight) return;
  var bmi = weight / (height * height);
  var indicator = document.getElementById("bmi-indicator");

  // BMI hesaplamasına göre, gösterge konumu
  if (bmi < 18.5) {
    // Zayıf
    indicator.style.left = "15%";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    // Normal kilo
    indicator.style.left = "31.5%";
  } else if (bmi >= 25 && bmi < 29.9) {
    // Fazla kilolu
    indicator.style.left = "48%";
  } else if (bmi >= 30 && bmi < 34.9) {
    // Obezite
    indicator.style.left = "64%";
  } else {
    // Aşırı Obez
    indicator.style.left = "80.5%";
  }
}

/* Yükseklik veya kilo alanı değiştiğinde BMI'yi yeniden hesapla */
document.getElementById("height").addEventListener("input", calculateBMI);
document.getElementById("weight").addEventListener("input", calculateBMI);

/* Navbar için scroll */
function changeClassList() {
  var navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scroll"); // Scroll sonrası stil
    } else {
      navbar.classList.remove("navbar-scroll"); //İlk konuma geri dönmek için
    }
  });
}
changeClassList();

/* --------------------------------------------------------
   Mobil Hamburger Menü
   - Tıklandığında navigasyon listesini aç/kapat
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-hmbrgr").addEventListener("click", function () {
    let menu = document.querySelector(".navbar ul");
    menu.classList.toggle("show");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-hmbrgr").addEventListener("click", function () {
    let menu = document.querySelector(".navbar ul");
    menu.classList.toggle("show");
  });
});
