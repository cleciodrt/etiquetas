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
    
  } else {

    dados = JSON.parse(localStorage.getItem('dados'));

  }
  
  var duracaoAnimacao = 600;
  for (let le = 0; le < dados.gramatura.length; le++) {

    if (le === 0) {
      mes.innerText = `${ dados.mes }`;
    }

    duracaoAnimacao += 100;
    lista.innerHTML += 
    `
      <a href='peso.html' data-aos='fade-up' data-aos-delay='${ duracaoAnimacao }'>
        <li class="gramatura">
          <span class="dia">--</span>
          <span class="grama">--</span>
        </li>
      </a>
    `;
    
    document.querySelectorAll('.dia')[le].innerText = dados.gramatura[le][0];
    document.querySelectorAll('.grama')[le].innerText = `${ dados.gramatura[le][1] }g`;

  };

  for (var i = 0; i < dados.gramatura.length; i++) {
    
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