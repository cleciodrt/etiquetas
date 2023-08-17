window.onload = () => {

  let dados;
  const nMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const oMes = new Date().getMonth();

  if (localStorage.getItem('dados') === null) {

    dados = {
      mes: nMeses[oMes],
      fazer: 0,
      gramatura: []
    };

    localStorage.setItem('dados', JSON.stringify(dados));
    calcular.setAttribute('data-aos-delay',`${ 450 }`);
    
  } else {

    dados = JSON.parse(localStorage.getItem('dados'));
    
  }
  
  var delayAnimacao = 1100;
  for (let le = 0; le < dados.gramatura.length; le++) {
    
    if (le === 0) {
      mes.innerText = `${ dados.mes }`;
    } 
    
    if (document.querySelectorAll('#lista li').length < 5) {
      delayAnimacao -= 100;
      lista.innerHTML += 
      `
        <a href='peso.html' data-aos='fade-up' data-aos-delay='${ delayAnimacao }'>
          <li class="gramatura">
            <span class="dia">${ dados.gramatura[le][0] }</span>
            <span class="grama">${ dados.gramatura[le][1] }g</span>
          </li>
        </a>
      `;
    };

  };

  for (var i = 0; i < document.querySelectorAll('#lista li').length; i++) {
    
    document.querySelectorAll('.gramatura')[i].onclick = (elemento) => {

      const captura = String(elemento.target.children[1].innerText);

      if (captura.length == 4) {
        var valor = captura.slice(0, 3)
      } else if (captura.length == 3) {
        var valor = captura.slice(0, 2)
      } else {
        var valor = captura.slice(0, 1)
      };

      dados.fazer = valor;

      localStorage.setItem('dados', JSON.stringify(dados));

    };
    
  }

  novo.onclick = () => {
    dados.fazer = 0;
    localStorage.setItem('dados', JSON.stringify(dados));
  }

}