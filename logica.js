window.onload = () => {
  
  const nDias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const nMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const noDia = new Date().getDay(), noMes = new Date().getDate(), oMes = new Date().getMonth();
 
  if (localStorage.getItem('dados') !== null) {
    
    dados = JSON.parse(localStorage.getItem('dados'));
    if (dados.fazer !== 0) {
      meta.value = Number(dados.fazer);
    } else {
      meta.value = '';
    }
    
  } else {
    
    dados = {
      mes: nMeses[oMes],
      fazer: 0,
      gramatura: []
    };

    localStorage.setItem('dados', JSON.stringify(dados));

  }

  dia.innerText = `${ nDias[noDia] } ${ noMes }`;
  
  tipo.onclick = () => {
    metricas.classList.toggle('sumir');
    resultado.classList.toggle('resultado');
  };
  
  calcular.onclick = () => {

    var v = naousar.checked ? 0 : 8;
    var b = rolo.value, m = meta.value, r = restante.value;
    var sobra = m - r - v, fazer = b - sobra, marcar = sobra * 10;

    if (b != '' && m != '' && r != '') {
        
      metricas.classList.toggle('sumir');
      resultado.classList.toggle('resultado');

      ficara.innerText = `${ fazer }g`;
      fazendo.innerText = `${ marcar }p`;

      if (localStorage.getItem('dados') !== null) {

        var presente = 0;
        
        dados.gramatura.map((valor, indice) => {
          const prosseguir = dados.gramatura[indice][0] ===
           `${ nDias[noDia] } ${ noMes }` ? presente++ : presente;
        });
          
        if (presente === 0) {
          dados.gramatura.push([`${ nDias[noDia] } ${ noMes }`, m]);
        } else {

          dados.gramatura.map((valor, indice) => {

            console.log();
            if (`${ nDias[noDia] } ${ noMes }` === dados.gramatura[indice][0]) {
              dados.gramatura[indice][1] = m;
            } 
            
          });
          
          // dados.gramatura[presente] = [`${ nDias[noDia] } ${ noMes }`, m];
        }
        
        localStorage.setItem('dados', JSON.stringify(dados));
      };
    
    } else {
      calcular.value = 'Preencha todos os campos';
      
      setTimeout(() => {
        calcular.value = 'Calcular';
      }, 2000);
    }

  };

}