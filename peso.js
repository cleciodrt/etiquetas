window.onload = () => {
  
  const nDias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const nMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const noDia = new Date().getDay(), noMes = new Date().getDate();
  const oMes = new Date().getMonth(), oAno = new Date().getFullYear();
  const ultimoDia = new Date(oAno, oMes, 0).getDate();
  
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

  if (noDia < 6) {
    if (ultimoDia === noMes) {
      dia.innerText = `${ nDias[noDia + 1] } ${ 0 + 1 }`;
      console.log(1)
    } else {
      dia.innerText = `${ nDias[noDia] } ${ noMes + 1 }`;
      console.log(2)
    }
  } else {
    if (ultimoDia === noMes) { // ------------------- FALTA RESOLVER! O ULTIMO DIA DO MES E DA SEMANA
      dia.innerText = `${ nDias[2] } ${ 3 }`;
      console.log(3)
    } else {
      dia.innerText = `${ nDias[2] } ${ noMes + 3 }`;
      console.log(4)
    }
  }

  console.log(nMeses[oMes]);
  
  tipo.onclick = () => {
    metricas.classList.toggle('sumir');
    resultado.classList.toggle('resultado');
    aviso.style.display = 'none';

  };
  
  calcular.onclick = () => {

    var v = naousar.checked ? 0 : 8;
    var b = rolo.value, m = meta.value, r = restante.value;
    var sobra = m - r - v, fazer = b - sobra, marcar = sobra * 10;

    if (b != '' && m != '' && r != '') {
        
      metricas.classList.toggle('sumir');
      resultado.classList.toggle('resultado');
      aviso.style.display = 'flex';

      ficara.innerText = `${ fazer }g`;
      fazendo.innerText = `${ marcar }p`;

      if (localStorage.getItem('dados') !== null) {

        var presente = 0;
        
        dados.gramatura.map((valor, indice) => {
          const prosseguir = dados.gramatura[indice][0] ===
           `${ nDias[noDia] } ${ noMes }` ? presente++ : presente;
        });
          
        if (presente === 0 && (dados.gramatura).lenght < 6) {
          dados.gramatura.push([`${ nDias[noDia] } ${ noMes }`, m]);
        } else {

          dados.gramatura.map((valor, indice) => {

            console.log();
            if (`${ nDias[noDia] } ${ noMes }` === dados.gramatura[indice][0]) {
              dados.gramatura[indice][1] = m;
            } 
            
          });
          
        }
        
        localStorage.setItem('dados', JSON.stringify(dados));
      };
    
    } else {
      calcular.value = 'Preencha todos os campos';
      calcular.classList.toggle('faltaAlgo');
      
      setTimeout(() => {
        calcular.value = 'Calcular';
        calcular.classList.toggle('faltaAlgo');
      }, 2000);
    }

  };

}