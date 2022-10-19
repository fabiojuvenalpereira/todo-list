# ATIVYdades diárias
Este é um desafio técnico realizado para a Ativy com o intuito de ocupar a vaga de desenvolvedor fullstack jr.

## TABELA DE CONTEÚDOS
<!--ts-->
  * [Detalhes do Projeto](#detalhes-do-projeto)
	  * [Case](#case)
	  * [Requisitos Técnicos](#requisitos-técnicos-ou-stacks-utilizadas)
	  * [Funcionalidades](#funcionalidades)
	  * [Estrutura](#estrutura)
		  * [Frontend](#frontend)
 		  * [Backend](#backend)
	  * [Desenvolvimento](#desenvolvimento)
		  * [Como Foi Feito](#como-foi-feito)
 		  * [Próximos Passos](#próximos-passos)
  * [Softwares Utilizados](#softwares-e-ferramentas-utilizadas)
  * [Como  Instalar](#como-instalar)
  * [Referências](#referências)
  * [Sobre Mim](#sobre-mim)
<!--te-->

## DETALHES DO PROJETO
### IMAGENS
![Login](https://i.imgur.com/QebXyjt.png)

![Cadastro](https://i.imgur.com/xmYZOGP.png)

![Lista](https://i.imgur.com/wyQnmf0.png)
### CASE
Elaborar um projeto full stack, ou seja, uma aplicação que contenha backend e frontend. Neste caso, a aplicação é uma lista de tarefas que conta com tela de login,  tela de cadastro, tela com lista de atividades onde é possível ler, criar, alterar e deletar atividades relacionadas a um usuário  específico, notificando-o sempre que alguma alteração for realizada.

### REQUISITOS TÉCNICOS OU STACKS UTILIZADAS
Backend
- Node com TypesCript
- Express
- Banco de dados NoSQL (MongoDb)*
- Arquitetura MSC (Model - Service - Controller)
- Conceitos de Clean Code

FrontEnd
- React.js
- ContextApi
- styledComponents
- Hooks

##
### FUNCIONALIDADES
O projeto conta com um CRUD básico, onde é possível:
**para usuários:**
* Inserir um novo usuário no banco de dados;
* Ler um usuário individualmente utilizando validação de permissão de leitura, através de token jwt
* Deletar um usuário individualmente através de validação.

**para tarefas:**
Todas as informações de tarefas estão diretamente atreladas a um usuário, por esse motivo, todos os eventos relacionados a elas, passarão por validação de token, para que somente o usuário que a criou tenha acesso e possa realizar alterações nela.

* Inserir uma nova tarefa.
* Listar tarefas.
* Listar uma tarefa específica.
* Atualizar tarefa.
* Deletar uma tarefas.
* Deletar todas tarefas.

*CRUD = (create - read - update - delete)* ou *(criar-ler-atualizar-deletar)*

##
### ESTRUTURA
O projeto está estruturado em dois módulos, frontend e backend. aqui estão os links de cada um deles, falando mais sobre a estrutura de pastas e documentação para uso.

FRONTEND
BACKEND

##
### DESENVOLVIMENTO

#### COMO FOI FEITO
A princípio tentei pensar em escala macro, como seria a aplicação de forma completa, sendo assim fiz um breve rascunho no papel, pensando como seria as telas da aplicação e o que ela precisaria para funcionar conforme o esperado.

Iniciei o desenvolvimento pela parte de backend, por acreditar que seria a parte mais desafiadora. Escolhi fazer a aplicação em Node.js com typescript, que aprendi recentemente e venho colocando em prática a fim de melhorar a minha qualidade de desenvolvimento. 

Comecei realizando a instalação das dependências necessárias as configurações inicias de ambiente. Logo após, iniciei o desenvolvimento da aplicação em si, até certo momento estava pensando em utilizar como sistema de persistência de dados o SQL, que neste caso, faria super sentido, porém, acabei optando por noSQL por questões de burocracia. Como ainda não tinha trabalhado com Typescript e SQL, depois de algumas horas estudando e tentando aplicar o uso do Sequelize como ORM, me deparei com muitos problemas, que demandaria muito tempo para resolver com o conhecimento que possuo atualmente, como este é um projeto que possui um prazo determinado, pensei em outras possibilidades, uma delas seria migrar ou iniciar um novo projeto em Node.js com javascript, que já utilizei antes e teria mais segurança para executá-lo. Porém, preferi manter o Typescript e alterar a forma de persistência de dados para noSQL e futuramente adicionar o TypeORM que encontrei em algumas pesquisas para configurar um banco SQL na aplicação, até para estudos futuros.

Depois de finalmente definida a forma de persistência de dados, parti para as regras de negócio. Criei uma aplicação seguindo alguns conceitos de solid e boas práticas de programação, ainda estou estudando e tenho muito a melhorar, mas venho colocando em prática o máximo possível, sempre visando uma aplicação que tenha possibilidade de escalar e que possua baixa acoplagem. Meu objetivo é fazer com que cada parte do código tenha somente uma responsabilidade, por isso, modularizo o máximo possível, com o objetivo de fazer com que seja mais fácil a manutenção e também melhorar/ aumentar a reusabilidade de código.

Segui uma estrutura de camadas chamada MSC (models,services,controllers) onde a camada de modelo é a camada responsável por lidar diretamente com o banco de dados, a camada de serviço lida com todas as regras de negócios e a camada de controle é responsável por lidar com a "comunicação" com o cliente que neste caso será o frontend que irá consumir.

No frontend iniciei definindo uma estrutura básica e criando algumas páginas e componentes de maneira bruta, sem regras específicas, para poder trabalhar posteriormente com as regras de negócio de cada componente da aplicação de maneira mais definitiva, criei arquivos separados para lidar com as solicitações que serão realizadas para o backend, estes arquivos poderão ser encontrados na pasta API localizada no módulo de frontend.

Comecei a desenvolver a tela de login e cadastro como um brainstorm, utilizando somente uma regra de negócio básica para fazer a aplicação funcionar de maneira local, para poder ir polindo e melhorando conforme a evolução da aplicação e das funcionalidades. Comecei a criar um design, para saber se atenderia a ideia que eu tinha inicialmente e para poder melhorar a aplicação pensando em usabilidade do usuário.

Utilizei uma estratégia de dividir o desenvolvimento do frontend baseado em componentes e a lógica que  ele necessitaria, talvez não tenha sido a melhor estratégia a ser abordada, se tivesse começando o projeto agora, abordaria a seguinte estratégia, elaboraria todo o esqueleto da aplicação primeiro, e somente depois iria para a parte de estilização e melhoria de código, assim eu conseguiria escrever códigos melhores e em menor tempo.

Confesso que a parte de desenvolvimento frontend foi a mais complexa, isso, devido ao tempo que fiquei utilizá-lo, principalmente React. Acredito que com este desafio, poderei treinar ainda mais o frontend e principalmente a refatoração de código.

##
### PRÓXIMOS PASSOS
Pretendo realizar os testes de toda a aplicação a fim de minimizar a possibilidade de erro e amplificar a manutenibilidade da aplicação, além disso, percebi também alguns pontos onde posso melhorar tanto a leitura como a qualidade de código, percebi que em alguns quesitos, principalmente do frontend, exitem outras possibilidades que tornariam o código muito mais limpo, pretendo fazer isso futuramente.

##
### CONCLUSÃO
Achei um projeto bem interessante, pude explorar muito dos meus conhecimentos, além de poder estudar e aprender muito durante o desenvolvimento da aplicação, acredito que esse tipo de projeto, por mais simples que possa parecer, sempre será um desafio começar do zero, e pensar em toda arquitetura, e design da aplicação. Ainda não estou 100% satisfeito, faltaram algumas coisas, como por exemplo os testes, devido ao tempo, acabei optando por fazer a aplicação funcionar e realizar a implementação de testes juntamente com a atualização e melhoria de código.
##

## SOFTWARES E FERRAMENTAS UTILIZADAS

- [Visual Code Studio](https://code.visualstudio.com/) - O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código. [1.64.2]

- [Npm](https://www.npmjs.com/) - É um gerenciador de pacotes para o Node.JS npm, Inc. é uma subsidiária do GitHub, que fornece hospedagem para desenvolvimento de software e controle de versão com o uso do Git. npm é o gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.js

- [Node.js]((https://nodejs.org/)) - Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. [14 ou superior].



## COMO INSTALAR
Para conseguir instalar e fazer com que o código execute em seu computador, você vai precisar seguir alguns requisitos.

Primeiro você precisará de ter os softwares utilizados para criar instalados em sua máquina, mas não se preocupe você poderá encontrá-los na seção de softwares e ferramentas utilizadas, que é esta [aqui](#softwares-e-ferramentas-utilizadas). As versões dos softwares que utilizei, estão logo ao final da síntese, contidas entre colchetes assim como neste exemplo: **[1.64.2]**. 

Tendo os softwares instalados em sua máquina você precisará realizar os seguintes passos:
##

#### Antes de tudo selecione uma pasta onde será clonado o projeto e então siga os seguintes passos.

### Você precisará de clonar o repositório em sua máquina, para isso utilize o seguinte comando:

	git clone git@github.com:fabiojuvenalpereira/todo-list.git

### Depois você precisará entrar na pasta que será criada em seu computador, utilizando o seguinte comando:

	cd todo-list

##

### Agora, precisaremos instalar as dependências necessárias nos módulos do projeto:

### Primeiro, vamos instalar as dependências necessárias do módulo de front end:

Para isso, já dentro da pasta to-do,  vamos entrar na pasta chamada frontend, utilizando o seguinte comando:

	cd frontend
	
Logo depois, precisaremos realizar o comando para baixar e instalar as dependências para o projeto.

	 npm install

Espere a instalação de todas as dependências, e então prossiga para os próximos passos
##

### Depois de instaladas as dependências do módulo de front, vamos instalar as dependências do módulo de backend.

Precisaremos de voltar para a pasta principal da aplicação, logo em seguida entrar na pasta do módulo de backend. Podemos utilizar este comando.

	cd ../backend

Em seguida, realizar o comando para baixar e instalar as dependências.
	
	npm install

Aguarde até que todas as dependências sejam baixadas.

##




### Depois de instaladas todas as dependências e configuradas as variáveis de ambiente em ambos os módulos, iremos iniciar o projeto em localhost.

precisaremos de usar dois terminais, um para startar o frontend e outro para o backend. 

Caso esteja utilizando o vscode, é possível fazer isso por dentro do próprio software, basta clicar no menu superior `Terminal`, `Novo Terminal`.

Certifique-se que você esteja na pasta raiz do projeto, ou seja, na pasta todo-list.
Em um terminal execute o comando.

	cd backend

Logo em seguida, no terminal do backend execute o comando.
  
	npm run dev

*Certifique se que o MongoDb esteja rodando localmente.


Se tudo aconteceu conforme o esperado, no terminal deve aparecer uma mensagem dizendo que a aplicação foi iniciada na porta `application runs in 3001 port`.


No segundo terminal, certifique-se que está na pasta raiz do projeto, ou seja, na pasta to-do e execute o comando para entrar no módulo de frontend.
 
 	cd frontend

Logo em seguida, execute o comando para dar inicio a aplicação.

	npm start

  
Se tudo estiver ocorrido conforme o esperado, no terminal deve aparecer uma mensagem dizendo que a aplicação foi iniciada na porta `localhost:3000` e você será redirecionado para seu navegador. Visualizando a tela principal da aplicação. Caso isso não aconteça, você poderá tentar digitar em seu navegador o seguinte link:

	http://localhost:3000/
  
Com tudo rodando de forma correta será possível utilizar a aplicação.
 
## REFERÊNCIAS

#### Os links abaixo contém alguns sites e fóruns, que serviram de referência para a elaboração do desafio.
- [Trybe](https://www.betrybe.com/)
- [HackerRank](https://www.hackerrank.com/)
- [Mozila ](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Fórum Stack Overflow](https://stackoverflow.com/)
- [w3schools](https://www.w3schools.com/jsref/default.asp)
- [electronics-tutorials](https://www.electronics-tutorials.ws/blog/7-segment-display-tutorial.html)

## Sobre Mim
[Linkedin](https://www.linkedin.com/in/fabiojuvenalpereira/)
[GitHub](https://github.com/fabiojuvenalpereira)
fabiojuvenalpereira@gmail.com


