/* Código para esconder/mostrar formulário de afiliação */
let afiliaSim = document.getElementById('sim'),
  afiliaNao = document.getElementById('nao');
console.log(afiliaSim);

function mostraForms() {
  let forms = document.getElementById('formsEscondido')
  forms.style.display = 'block';

  let end = document.getElementById('endereco'),
    cep = document.getElementById('cep'),
    cpf = document.getElementById('cpf');

  end.setAttribute('required', 'required');
  cep.setAttribute('required', 'required');
  cpf.setAttribute('required', 'required');
}

function escondeForms() {
  let forms = document.getElementById('formsEscondido')
  forms.style.display = 'none';

  let end = document.getElementById('endereco'),
    cep = document.getElementById('cep'),
    cpf = document.getElementById('cpf');

  end.removeAttribute('required', 'required');
  cep.removeAttribute('required', 'required');
  cpf.removeAttribute('required', 'required');
}



/* Eventos */
afiliaSim.addEventListener("change", mostraForms);
afiliaNao.addEventListener("change", escondeForms);