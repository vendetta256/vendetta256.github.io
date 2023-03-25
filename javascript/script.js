// Ambil elemen tombol dan iframe
var homeBtn = document.getElementById("home-btn");
var menuBtn = document.getElementById("menu-btn");
var galleryBtn = document.getElementById("gallery-btn");
var kontakBtn = document.getElementById("kontak-btn");
var contentIframe = document.getElementById("content-iframe");

// Tambahkan event listener pada tombol
homeBtn.addEventListener("click", function() {
  contentIframe.src = "./";
});

menuBtn.addEventListener("click", function() {
  contentIframe.src = "https://chat.openai.com/chat";
});

galleryBtn.addEventListener("click", function() {
  contentIframe.src = "https://www.example.com/gallery";
});

kontakBtn.addEventListener("click", function() {
  contentIframe.src = "https://www.example.com/gallery";
});
