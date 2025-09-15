// Image source switching
const bgImage = document.getElementById("bg-image");

function setImage() {
  if (window.innerWidth > 768) {
    bgImage.src = "Bandung.jpg"; // gambar landscape
  } else {
    bgImage.src = "3.jpg"; // gambar portrait
  }
}

setImage();
window.addEventListener("resize", setImage);

// Dropdown toggle
document.querySelectorAll(".link-item").forEach(item => {
  item.addEventListener("click", () => {
    const dropdown = item.nextElementSibling;
    dropdown.classList.toggle("open");
    // Tutup dropdown lain
    document.querySelectorAll(".dropdown").forEach(dd => {
      if (dd !== dropdown) dd.classList.remove("open");
    });
  });
});

window.addEventListener("load", () => {
  document.getElementById("loader").classList.add("hidden");
  document.querySelector(".container").classList.add("show");
});
