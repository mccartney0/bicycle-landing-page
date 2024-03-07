// Slide images in banner
const slideImages = document.querySelectorAll("#banner img");
let currentIndex = 0;

function showImage(index) {
  slideImages.forEach((image, i) => {
    if (i === index) {
      image.style.opacity = 1;
    } else {
      image.style.opacity = 0;
    }
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slideImages.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slideImages.length - 1;
  }
  showImage(currentIndex);
}

setInterval(nextSlide, 3000); 

// Form
document.getElementById('myForm').addEventListener('submit', function(event) {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;

  if (!name || !email || !phone) {
    event.preventDefault();
    alert('Por favor, preencha todos os campos.');
  }else {
    event.preventDefault();
    showPopup(name, email, phone);
  }
});

// Form Phone format
const phoneInput = document.getElementById('phone');

  phoneInput.addEventListener('input', function() {
    let currentValue = phoneInput.value.replace(/\D/g, '');
    
    if (currentValue.length === 11) {
      phoneInput.value = currentValue.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else {
      let formattedValue = currentValue.replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3');
      phoneInput.value = formattedValue;
    }
  });

// Pop-up
function showPopup(name, email, phone) {
  var message = 'Name: ' + name + '<br />\nEmail: ' + email + '<br />\nPhone: ' + phone;
  var popup = window.open('', 'Formulário Enviado', 'width=400,height=300');
  var popupContent = '<div class="popup-content" style="font-family: Arial, sans-serif; background-color: #4FB955; padding: 20px; color: #FFF">';
  popupContent += '<div class="popup-box" style="border: 1px solid #ccc; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">';
  popupContent += '<div class="popup-title" style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">Formulário Enviado</div>';
  popupContent += '<div class="popup-message" style="font-size: 16px;">' + message + '</div>';
  popupContent += '</div></div>';
  popup.document.write(popupContent);
  popup.document.close();
}
