var anosEstudo = 7;
var nivel;

function experiencia(anos) {

  if(anos > 0 && anos <= 1) {
    nivel = "Iniciante";
  } else if (anos > 1 && anos <= 3) {
    nivel = "Intermediário";
  } else if (anos > 3 && anos < 7) {
    nivel = "Avançado";
  } else if (anos >= 7) {
    nivel = "Jedi Master";
  } else {
    nivel = "Não possui experiência";
  }

  return nivel;

}

experiencia(anosEstudo);

console.log(nivel);