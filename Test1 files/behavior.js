var thumbnailElement = document.getElementById("small_thumbnail");

thumbnailElement.addEventListener("click", function () {
  if (thumbnailElement.className == "") {
    thumbnailElement.className = "small";
  } else {
    thumbnailElement.className = "";
  }
});
