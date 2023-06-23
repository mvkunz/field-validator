import isEmail from 'validator/lib/isEmail';
import './style.css';
import validator from 'validator';

const buttonValidated = document.querySelector('button');

buttonValidated.addEventListener('click', () => {
  const typeInput = document.querySelector('input');
  const typeOption = document.querySelector('select');
  const changeParagraph = document.querySelector('p');
  let validation = "";

  if (typeOption.value === 'email') {
    validation = validator.isEmail(typeInput.value);
 
  } else if (typeOption.value === 'cpf'){
    validation = validator.isTaxID(typeInput.value, 'pt-BR');

  } else if (typeOption.value === 'mobile'){
    validation = validator.isMobilePhone(typeInput.value, 'pt-BR');

  } else {
    validation = validator.isPostalCode(typeInput.value, 'any');
  }
  changeParagraph.innerHTML = `A validação retornou ${validation}.`;
});