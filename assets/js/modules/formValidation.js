let errorType = [];
const form = document.querySelector('#formU');

function validatorName(clasValue) {
  const nameValue = document.querySelector(clasValue);
  if (nameValue.value.length >= 2) {
    document.querySelector(clasValue).classList.remove('invalidField');
    document.querySelector(clasValue).classList.add('validField');
    return true;
  }
  document.querySelector(clasValue).classList.add('invalidField');
  errorType.push('Please write a good name');
  return false;
}

function validatorSMS(clasValue) {
  const nameValue = document.querySelector(clasValue);
  if (nameValue.value.length >= 50) {
    document.querySelector(clasValue).classList.remove('invalidField');
    document.querySelector(clasValue).classList.add('validField');
    return true;
  }
  document.querySelector(clasValue).classList.add('invalidField');
  errorType.push(`Please write a bit more! at least 50 chars ! You wrote only ${(nameValue.value.length)} chars`);
  return false;
}

function validatorEmail(clasValue) {
  const emailValue = document.querySelector(clasValue);

  if (emailValue.value.toLowerCase().match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    document.querySelector(clasValue).value = emailValue.value.toLowerCase();
    document.querySelector(clasValue).classList.remove('invalidField');
    document.querySelector(clasValue).classList.add('validField');
    return true;
  }
  document.querySelector(clasValue).classList.add('invalidField');
  errorType.push('please write a valid Email');
  return false;
}
function createErrorContent(content) {
  const p = document.createElement('p');
  p.classList.add('info');
  p.textContent = content;
  return p;
}

function createError(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    document.querySelector('.information').appendChild(createErrorContent(arr[i]));
  }
}

function setFormData() {
  const currentFormValues = JSON.parse(localStorage.getItem('formData'));
  document.querySelector('.userName').value = currentFormValues.name;
  document.querySelector('.userEmail').value = currentFormValues.email;
  document.querySelector('.userSMS').value = currentFormValues.sms;
}

function populateStorage() {
  const formValues = {
    name: document.querySelector('.userName').value,
    email: document.querySelector('.userEmail').value,
    sms: document.querySelector('.userSMS').value,
  };
  localStorage.setItem('ormData', JSON.stringify(formValues));
  setFormData();
}

if (localStorage.getItem('formData')) {
  setFormData();
}

function resetStorage() {
  localStorage.clear();
}

document.querySelector('#reset').addEventListener('click', resetStorage);

const formListener = () => {
  form.addEventListener('submit', (e) => {
    document.querySelector('.userEmail').value = (document.querySelector('.userEmail').value).toLowerCase();
    const nameControl = validatorName('.userName');
    const emailControl = validatorEmail('.userEmail');
    const smsControl = validatorSMS('.userSMS');

    if (nameControl && emailControl && smsControl) {
      populateStorage();
      form.submit();
    } else {
      e.preventDefault();
      if (document.querySelector('.info')) {
        const spanInfo = document.querySelector('.information');
        const Info = document.querySelectorAll('.info');
        Info.forEach(() => {
          spanInfo.removeChild(document.querySelector('.info'));
        });
      }
      createError(errorType);
      errorType = [];
    }
  });
};

export default formListener;