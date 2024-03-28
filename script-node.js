const express = require('express');

const Sequelize = require('sequelize')
const sequelize = new Sequelize('nome_do_banco_de_dados', 'root', '2912Fauditore@', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('conectado com sucesso')
}).catch(function(erro){
    console.log('falha:'+erro)
})

// Definição do modelo Artista
const Artistas = sequelize.define('artistas', {
    nome: Sequelize.STRING,
  });
  
  // Sincronização do modelo com o banco de dados
  sequelize.sync()
    .then(() => {
      console.log('Banco de dados e tabelas sincronizadas.');
    });

    const app = express();

    app.get('/', async (req, res) => {
        try {
          // Busca todos os artistas do banco de dados
          const artistas = await Artista.findAll();
          console.log(artistas);
        } catch (error) {
        console.error('Erro:', error);
        res.status(500).send('Erro interno do servidor');
      }
    });

module.exports = Artistas;