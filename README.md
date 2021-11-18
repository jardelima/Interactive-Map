# Mapa Interativo do Ceará
O projeto da Sedet tem como objetivo mapear o estado do Ceará e fornecer informações econômicas sobre os municípios.

O usuário será capaz de navegar entre cada município, contanto que algum produto econômico esteja ativado, por exemplo: Clico em "Energias Renováveis" e no mapa me mostrará os municípios com tal produto.

Cada município terá um Cluster exclusivo. Nele contém informações como: 

- Nome do município; 
- Localização; 
- Infraestrutura; 
- Potencial Econômico; 
- Quem já investe; 
- E também poderá conter um vídeo de apresentação.

Todas as informações são obtidas de forma dinâmica.

<img width="700" height="350" src="https://github.com/jardelima/Interactive-Map/blob/master/src/images/mapa-1.png"/>

<img width="700" height="350" src="https://github.com/jardelima/Interactive-Map/blob/master/src/images/mapa-2.png"/>

<img width="700" height="350" src="https://github.com/jardelima/Interactive-Map/blob/master/src/images/mapa-3.png"/>

<img width="700" height="350" src="https://github.com/jardelima/Interactive-Map/blob/master/src/images/mapa-4.png"/>

## Biblioteca utilizada :books:
Raphael JS | <a href="https://dmitrybaranovskiy.github.io/raphael/">Documentação</a>

Essa biblioteca gera um svg de acordo com cada path implementado no arquivo map.js. Em cada path existem "n" atributos em forma de objeto podendo serem atribuídos com o valor de "key: value", por exemplo: Na implementação de Icó existe um atributo ({id: "Icó"}) que nos fornece o nome do município. Mas para podermos pegar essa informação é necessário gerarmos um método .data(). Esse método será responsável por trazer a informação direto do atributo path para o front-end. Sendo assim, trabalharemos da seguinte forma:

Vamos dizer que eu queira atribuir a localização do município:

`const Icó = src.path("...").attr({id: 'Icó', localization: 'Icó é um município brasileiro do estado do Ceará.'}).data('id', 'Icó').data('locazation', 'Icó é um município brasileiro do estado do Ceará.')` 

E assim sucessivamente até pegar todos atributos.

No arquivo map.js, Icó e Banabuiú estão montados com todos atributos. Caso tenha dúvidas, verificar neles. 

## Ferramentas utilizadas :wrench:
- HTML
- CSS
- JAVASCRIPT
- GULP
- NPM

## Rodando o projeto na sua máquina :computer:
Para rodar o projeto na sua máquina, precisamos instalar primeiro as dependências do projeto. Sendo assim, abra o terminal na pasta do projeto e digite:

`npm install`

Após a instalação ser concluída, no mesmo terminal, digite: 

`gulp`

E o projeto vai rodar na sua máquina. Provavelmente no <b>localhost:3000</b>, mas caso não esteja nessa porta, verifique no terminal em qual porta está sendo rodado o projeto.

## Autor :grin:
<b>Jardel Lima Batista</b> 

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jardel-lima-040b30164/)](https://www.linkedin.com/in/jardel-lima-040b30164/) 
[![Email Badge](https://img.shields.io/badge/-Email-red?style=flat-square&logo=Gmail&logoColor=white&link=https://www.gmail.com)](mailto:prof_jardel@hotmail.com)
