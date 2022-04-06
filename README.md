# Critérios de Avaliação
Valor da entrega: 10 pontos


A avaliação será feita por entregáveis obrigatórios, cada um valerá uma quantidade de pontos, todos começarão com 0 pontos, a cada item entregue, você receberá a quantia pertinente aquela entrega. 


+ Persistir os dados através do PostgreSQL com o Sequelize. (2,0) ✔
+ Toda entrada de dados deve ser validada antes. (0,5) ✔
+ Criar um menu de navegação em todas as telas. (0,5) ✔
+ Criar as telas EJS. (1,5) ✔
+ Responsividade em todas as telas. (0,5) ✔
+ Criar a estilização das páginas. (1,0) ✔
+ Criar as rotas no arquivo INDEX.JS para controlar toda aplicação. (1,5) ✔
+ Após cadastrar exibir mensagem de sucesso. (0,5) ✔
+ Respeitar o padrão MVC. (1,0) ✔
+ Github organizado do projeto com licença, Read.me preenchido falando do projeto e Gitignore correto. (0,5) ✔
+ Projeto postado no Heroku. (0,5) ✔

+ ## **APRESENTAÇÃO**

💡 calendar  

&ensp;&ensp;
&ensp;&ensp;

-----

![image](/public/IMG/logo.png)
# [MiaMood](https://miamood.herokuapp.com/)

Projeto MVC desenvolvido utilizando Express, EJS e Sequelize, com banco de dados PostgreSQL.  

+ permite o registro, atualização e deleção de entradas.  
+ projetado para desktop (melhor experiência).  
+ responsivo. 

&ensp;&ensp;
&ensp;&ensp;

## ROTAS

-----

**GET**           |&ensp;&ensp;view
---|---
'/'               |&ensp;&ensp;mood/LATEST  
'/allMoods'       |&ensp;&ensp;mood/ALL  
'/newMood'        |&ensp;&ensp;mood/NEW  
'/updateMood/:id' |&ensp;&ensp;mood/UPDATE  
'/destroyMood/:id' |&ensp;&ensp;mood/DESTROY  
'/oops'           |&ensp;&ensp;OOPS (error)
'/destroy/:id'     |&ensp;&ensp;***

**POST**          |&ensp;&ensp;
---|---
/add'             |&ensp;&ensp;
'/update/:id'     |&ensp;&ensp;

&ensp;&ensp;
&ensp;&ensp;

## RECURSOS

-----

🔗 |&ensp;&ensp;
---|---
[Adobe Fonts](https://fonts.adobe.com/fonts/brother-1816) |&ensp;&ensp;fonte
[Remix Icon](https://remixicon.com/) |&ensp;&ensp;ícones
[Heroku](http://www.heroku.com) |&ensp;&ensp;deploy
[Heroku Postgres](https://elements.heroku.com/addons/heroku-postgresql)|&ensp;&ensp;banco de dados
[npm cookie-session](https://www.npmjs.com/package/cookie-session) |&ensp;&ensp;sessão e cookies
[npm connect-flash](https://www.npmjs.com/package/connect-flash) |&ensp;&ensp;mensagens de confirmação
