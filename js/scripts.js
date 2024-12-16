function showDetails(cliniqueId) {
    // Hide all details sections
    const details = document.querySelectorAll('.details-content');
    details.forEach(detail => {
      detail.style.display = 'none';
    });
  
    // Show the selected details section
    document.getElementById(cliniqueId).style.display = 'block';
  
    // Update the image
    const image = document.getElementById('image-clinique');
    image.src = `images/${cliniqueId}.png`;
  }
  
 
  