window.onload = () => {
  const diaSeguinte = new Date().getDate() + 1;
  //const data = document.querySelector("#data");
  const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const data = new Date(), nomeDia = data.getDay() + 1, dia = data.getDate();
  
  /* Formulas ->
      m = p - v - r ( meta = papeis  - vazio - restante)
      s = b - m ( sobra = branco - meta )
      
      var fazer = p - v - r, sobra = b - fazer;
  */

  // b: Rolo em Branco, v: Rolo Vazio, p: Meta, r: Restante
  rolo.onchange = reb.onkeyup = m.onkeyup = rr.onkeyup = () => {
      b = reb.value, v = rolo.value, p = m.value, r = rr.value;
      fazer = p - v - r, sobra = b - fazer, marcar = fazer * 10;

      if (b != '' && p != '' && r != '') {
          resultado.innerHTML = `Deixar: ${sobra}g <br /> Fazer: ${marcar}p`
      }
  }

  if (nomeDia == 1) {
      diaSemana.innerText += ` ${ dias[nomeDia] } ${ new Date().getDate() + 3 }`;
  } else {
      diaSemana.innerText += ` ${ dias[nomeDia] } ${ dia + 1 }`;
  }

}