# Curso-JavaScript-Starter-Rocketseat
Projeto trata-se da resolução dos exercícios propostos pelo curso.
Exercícios: Módulo 01
1) Para testar seus conhecimentos com as classes, crie uma classe com o nome "Admin", essa classe deve extender uma segunda classe de chamada "Usuário".

O usuário classe deve receber dois parâmetros no método construtor, e-mail e senha e anotá-los nas propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros, mas deve repassar os parâmetros de email e senha para a classe pai e marcar uma propriedade "admin" como truena classe.

Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que retorna se o usuário é administrador ou não baseado na propriedade adminser trueou não.

const  User1  =  novo  Usuario ( ' email@teste.com ' , ' senha123 ' );
const  Adm1  =  novo  administrador ( ' email@teste.com ' , ' senha123 ' );
console . log ( Usuário1 . isAdmin ()) //
 console falso . log ( Adm1 . isAdmin ()) // true
2) A partir do seguinte vetor e usando os métodos de array (mapear, reduzir, filtrar e localizar):

const  usuarios  = [
 {nome :  ' Diego ' , idade :  23 , empresa :  ' Rocketseat ' },
 {nome :  ' Gabriel ' , idade :  15 , empresa :  ' Rocketseat ' },
 {nome :  ' Lucas ' , idade :  30 , empresa :  ' Facebook ' },
];
2.1) Utilizando o map

Crie uma variável que contenha todas as idades dos usuários: [23, 15, 30]

2.2) Utilizando o filter

Crie uma variável que tenha apenas os usuários que usam no Rocketseat e com mais de 18 anos: [{nome: 'Diego', idade: 23, empresa: 'Rocketseat'}]

2.3) Utilizando o find

Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

2.4) Unindo operações

Multiplique a idade de todos os usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos:

// Resultado:
[
 {nome :  ' Diego ' , idade :  46 , empresa :  ' Rocketseat ' },
 {nome :  ' Gabriel ' , idade :  30 , empresa :  ' Rocketseat ' },
]
3) Converta como funções nos seguintes trechos de código em Arrow Functions:

// 3.1 
const  arr  = [ 1 , 2 , 3 , 4 , 5 ];
arr . mapa ( função ( item ) {
  retorna item +  10 ;
});
// 3.2 
// Dica: Utilize uma função 
constante para  constante const usuario  = {nome :  ' Diego ' , idade :  23 };
função  mostraIdade ( usuario ) {
  return  usuario . idade ;
}
mostraIdade (usuario);
// 3.3 
// Dica: Utilize uma função 
constante para  constante const nome  =  " Diego " ;
const  idade  =  23 ;
função  mostraUsuario ( nome  =  ' Diego ' , idade  =  18 ) {
  return {nome, idade};
}
mostraUsuario (nome, idade);
mostraUsuario (nome);
// 3.4 
const  prom  =  function () {
  retorna  nova  promessa ( function ( resolve , rejeita ) {
  return  resolve ();
 })
}
4) Exercícios de Desestruturação

Desestruturação Simples

A partir do seguinte objeto:

const  empresa  = {
 nome :  ' Rocketseat ' ,
 endereco : {
 cidade :  ' Rio do Sul ' ,
 estado :  « SC » ,
 }
};
Utilize uma desestruturação para transformar como propriedades de nome, cidade e estado em variáveis, não será possível fazer o seguinte:

console . log (nome); //
 Console do Rocketseat . log (cidade); //
 Console do Rio do Sul . log (estado); // SC
Desestruturação em parâmetros

Na seguinte função:

função  mostraInfo ( usuario ) {
  return  ` $ { usuario . nome } tem $ { usuario . idade } anos. ` ;
}
mostraInfo ({nome :  ' Diego ' , idade :  23 })
Utilize uma desestruturação nos parâmetros da função para buscar o nome e a idade do usuário usados ​​e a função poder retornar apenas:

retornar  ` $ { nome } tem $ { idade } anos. ` ;
5) Utilizando o operador de descanso / spread (...) realize as seguintes operações:

5.1 Descanso

A partir da matriz const arr = [1, 2, 3, 4, 5, 6]:, defina uma variável x que recebe a primeira posição do vetor e outra variável e recebe todos os dados restantes

console . log (x); // 1 
console . log (y); // [2, 3, 4, 5, 6]
Crie uma função que recebe inúmeros parâmetros e retorna um total de todos eles:

// função soma ... 
console . log ( soma ( 1 , 2 , 3 , 4 , 5 , 6 )); // 21 
console . log ( soma ( 1 , 2 )); // 3
5.2 Espalhar

A partir do objeto e usando o spread do operador:

const  usuario  = {
 nome :  ' Diego ' ,
 idade :  23 ,
 endereco : {
 cidade :  ' Rio do Sul ' ,
 uf :  « SC » ,
 pais :  ' Brasil ' ,
 }
};
Crie uma variável usuario2que contenha todos os dados do usuário porém com nomeGabriel.

Crie uma variável usuario3que contenha todos os dados do usuário porém com cidadeLontras.

6) Converta ou execute o seguinte código usando Literais de modelo:

const  usuario  =  ' Diego ' ;
const  idade  =  23 ;
console . log ( ' O usuário '  + usuário +  ' possui '  + idade +  ' anos ' );
7) Utilize uma sintaxe curta de objetos (sintaxe curta do objeto) no seguinte objeto:

const  nome  =  ' Diego ' ;
const  idade  =  23 ;
const  usuario  = {
 nome : nome,
 idade : idade,
 cidade :  ' Rio do Sul ' ,
};
Exercícios: Módulo 02
1) Crie um arquivo chamado functions.jscom o seguinte conteúdo:

exportação  const  Idade  =  23 ;
exportar  classe padrão  Usuario {
  static info () {
  console . log ( ' Apenas teste ' );  
 }
}
1.1 Agora, no seu arquivo principal, importe apenas a classe Usuario renomeando-a para Classe Usuario e chame a function info()

1.2 No seu arquivo principal, importe uma variável de idade e exiba a mesma na tela;

1.3 No seu arquivo principal, importe tanto a classe quanto a variável idade e renomeie a variável idade para IdadeUsuario

Exercícios: Módulo 03
Todos os exercícios abaixo selecionados que você pode usar com o plug-in Async / Await do Babel e o babel-polyfill devidamente configurados. Em alguns exercícios é necessário instalar o Axios.

Exercício
Transforme os seguintes códigos de execução usando assíncrono / espera:

// Função delay aciona o .then após 1s 
const  delay  = () =>  new  Promise ( resolve  =>  setTimeout (resolve, 1000 ));
função  umPorSegundo () {
  delay (). então (() => {
  console . log ( ' 1s ' );
  delay (). then (() => {
  console . log ( ' 2s ' );
  delay ().then (() => {
  console . log ( ' 3s ' );
 });
 })
 });
}
umPorSegundo ();
 axios de  importação de  ' axios ' ;
função  getUserFromGithub ( usuário ) {
  axios . get ( ` https://api.github.com/users/ $ { user } ` )
 . então ( response  => {
  console . log ( response . data );
 })
 . catch ( err  => {
  console . log ( ' Usuário não existe ' );
 })
}
getUserFromGithub ( ' diego3g ' );
getUserFromGithub ( ' diego3g124123 ' );
classe  Github {
  estático  getRepositories ( repo ) {
  axios . get ( ` https://api.github.com/repos/ $ { repo } ` )
 . então ( response  => {
  console . log ( response . data );
 })
 . catch ( err  => {
  console . log ( ' Repositório não existe ' );
  })
 }
}
Github . getRepositories ( ' rocketseat / rocketseat.com.br ' );
Github . getRepositories ( ' rocketseat / dslkvmskv ' );
const  buscaUsuario  =  usuario  => {
  axios . get ( ` https://api.github.com/users/ $ { user } ` )
 . então ( response  => {
  console . log ( response . data );
 })
 . catch ( err  => {
  console . log ( ' Usuário não existe ' );
 });
}
buscaUsuario ( ' diego3g ' );
