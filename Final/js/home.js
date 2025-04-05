(function () {
    // Get the single modal and its components
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
  
    // Add click functionality to all images with the 'expandable' class
    document.querySelectorAll(".expandable").forEach(img => {
      img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.textContent = this.alt;
      });
    });
  
    // Close modal when the "X" is clicked
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // Close modal on any key press
    window.addEventListener("keydown", function () {
      modal.style.display = "none";
    });
  
    // Optional: Close modal if user clicks outside the image
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  })();
  