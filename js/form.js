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