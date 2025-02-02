document.getElementById('menu').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});
const menuButton = document.getElementById('menu');
const navLinks = document.getElementById('nav-links');

function toggleMenu() {
    navLinks.classList.toggle('hide');
}

menuButton.addEventListener('click', toggleMenu);

// Handle resizing to ensure menu resets properly
function handleResize() {
    if (window.innerWidth > 1000) {
        navLinks.classList.remove('hide'); // Show menu on large screens
    } else {
        navLinks.classList.add('hide'); // Hide menu on small screens
    }
}

handleResize(); // Call function on page load
window.addEventListener('resize', handleResize);
function viewerTemplate(imgSrc, imgAlt) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${imgSrc}" alt="${imgAlt}">
        </div>
    `;
}

function viewHandler(event) {
    if (event.target.tagName === "IMG") {
        const clickedImageSrc = event.target.src.replace(".jpg", "-full.jpg"); // Modify file name for full version
        const imgAlt = event.target.alt;

        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(clickedImageSrc, imgAlt));

        // Add event listener to close button
        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}

function closeViewer() {
    document.querySelector(".viewer").remove();
}

// Attach event listener to the gallery
document.querySelector(".gallery").addEventListener("click", viewHandler);


    // <script>
    // // Get all modal buttons
    // var buttons = document.querySelectorAll('.accordion');
    
    // // Get all modals
    // var modals = document.querySelectorAll('.panel');
    
    // // Get all close buttons
    // var closeButtons = document.querySelectorAll('.close');
    
    // // Add event listener to each button
    // buttons.forEach(function(btn) {
    //   btn.addEventListener('click', function() {
    //     // Get the modal ID from data-modal attribute
    //     var modalId = this.getAttribute('data-modal');
    //     var modal = document.getElementById(modalId);
        
    //     // Display the corresponding modal
    //     modal.style.display = 'block';
    //   });
    // });
    
    // // Add event listener to each close button
    // closeButtons.forEach(function(span) {
    //   span.addEventListener('click', function() {
    //     var modal = this.closest('.panel');
    //     modal.style.display = 'none';
    //   });
    // });
    
    // // Close modal when clicking outside of it
    // window.addEventListener('click', function(event) {
    //   modals.forEach(function(modal) {
    //     if (event.target === modal) {
    //       modal.style.display = 'none';
    //     }
    //   });
    // });
    
    
    //     </script>