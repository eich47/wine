// валидация формы обратной связи (bootstrap)
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        const phoneElement = form.elements["user-phone"]
        const phoneElementValue = phoneElement.value
        if( !isCorrectPhone(phoneElementValue) ){
          phoneElement.setCustomValidity("incorrect phone number")
          event.preventDefault();
          event.stopPropagation();
        } else {
          phoneElement.setCustomValidity("")
        }

        form.classList.add('was-validated');

        //для теста не отправляем форму в любом случае
        event.preventDefault();
        //сообщения для пользователя
        const userMessageEl = form.querySelector('.user-send-message')
        userMessageEl.classList.remove('d-block')
        if (form.checkValidity() === true){
          userMessageEl.classList.add('d-block')
        }

      }, false);
    });
  }, false);

  function isCorrectPhone(value) {
    //ищем символы которые не допустимы
    const reg = /[a-zа-я\.]+/i
    return value.search(reg) === -1
  }

})();
