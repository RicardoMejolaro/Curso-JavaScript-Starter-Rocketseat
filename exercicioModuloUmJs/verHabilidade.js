var skills = ["JavaScript", "ReactJs", "React Native"];

function temHabilidade(skill) {

    if(skills.indexOf(skill) === 0 || skills.indexOf(skill) > -1) {
      return true;
    } else {
      return false;
    }
}

resultado = temHabilidade("ReactJs");

console.log(resultado);