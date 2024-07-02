// Stap 1

// document.addEventListener("DOMContentLoaded", function() {
//   const button = document.querySelector('.form__next-button');
//   const textInputs = document.querySelectorAll('input[type="text"]');
//   const radioInputs = document.querySelectorAll('input[type="radio"]');
//   // const allInputs = document.querySelectorAll('input');

//   function updateButtonStateStapEen() {
//       let allValid = true;
//       textInputs.forEach(input => {
//           if (!input.value.trim() || (input.hasAttribute("required") && !input.checkValidity())) {
//               allValid = false;
//           }
//       });

//       button.disabled = !allValid;
//       button.style.backgroundColor = allValid ? '#27BB66' : '#BEBEBE'; // Groen of grijs
//   }

//   textInputs.forEach(input => {
//       input.addEventListener('input', updateButtonStateStapEen);
//   });

//   updateButtonStateStapEen(); // Initieel de knopstatus bijwerken
// });






document.addEventListener('DOMContentLoaded', function () {
    const nextButtons = document.querySelectorAll('.form__next-button');
    nextButtons.forEach(button => {
      button.addEventListener('click', function () {
        const currentStep = this.closest('.form__fieldset');
        const nextStepNumber = this.getAttribute('data-next-step');
        const nextStep = document.querySelector('.form__fieldset--step-' + nextStepNumber);

        currentStep.classList.add('form__fieldset--hidden');
        nextStep.classList.remove('form__fieldset--hidden');
      });
    });




    const form = document.getElementById('multi-step-form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const formData = new FormData(form);
      const formValues = {};
      formData.forEach((value, key) => {
        formValues[key] = value;
      });
  
      localStorage.setItem('formData', JSON.stringify(formValues));
      window.location.href = 'result.html';
    });
  });




  