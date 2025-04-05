var modal = document.getElementById("familyiceland");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("familyiceland");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
                // iceland
var modal = document.getElementById("iceland");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("iceland");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
                //kayak
var modal = document.getElementById("kayak");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("kayak");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
(function () {
    // Get modal and its elements
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
  
    // Add click event to all expandable images
    document.querySelectorAll(".expandable").forEach(img => {
      img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerText = this.alt;
      });
    });
  
    // Close on 'X'
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // Close on any key press
    window.addEventListener("keydown", function () {
      modal.style.display = "none";
    });
  })();
