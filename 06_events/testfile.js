function setup() {
  document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', function(e) {
      // Remove the parent container with class "image"
      let imageContainer = e.target.closest('.image');
      if (imageContainer) {
        imageContainer.remove();
      }
    });
  });
}

// Example HTML structure
document.body.innerHTML = `
<div class="image">
  <img src="https://bit.ly/3lmYVna" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://bit.ly/3flyaMj" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

// Test case: simulate click on the first button
document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);