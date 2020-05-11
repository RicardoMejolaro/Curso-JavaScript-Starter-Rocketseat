const usuarios = [
  {
    nome: "Diego",
    habilidades: ["JavaScript", "ReactJs", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function habilidadesUsuarios() {

  for (let valores of usuarios) {
    console.log(`O ${valores.nome}, possui as habilidades: ${valores.habilidades.join(', ')}`); 
  }
}

habilidadesUsuarios();