const checkbox = document.getElementById('highpolycheck');


checkbox.addEventListener('click', function handleClick() {
  const images = document.querySelectorAll('.lowpoly');

  images.forEach(img => {
    if (this.checked) {
      img.style.display = 'none';
    } else {
      img.style.display = 'block';
    }
  });
})

const checkbox2 = document.getElementById('lowpolycheck');


checkbox2.addEventListener('click', function handleClick() {
  const images2 = document.querySelectorAll('.highpoly');

  images2.forEach(img => {
    if (this.checked) {
      img.style.display = 'none';
    } else {
      img.style.display = 'block';
    }
  });
})