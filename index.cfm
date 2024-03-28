<!DOCTYPE html>
<cfprocessingdirective pageencoding="utf-8">
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Artistas</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Melhores Artistas</h2>
        <div class="options">
            <select id="artistas">
                <option value="" class="placeholder" disabled selected hidden>Selecione um artista</option>
            </select>
            <select id="posicao" name="posicao">
                <option value="" class="placeholder" disabled selected hidden>Selecione uma posição</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <button onclick="salvarEscolhas()">Salvar</button>
        </div>

        <h3>Top 10 Artistas Escolhidos:</h3>
        <ul id="listaArtistas">
            <!-- Artistas serão preenchidos dinamicamente -->
        </ul>
    </div>

    <script src="./index.js"></script>
</body>

<!-- cfquery datasource="banco_de_dados" name="resultado">
    SELECT nome, sobrenome
    FROM tabela_usuarios
    WHERE idade > 18
 </cfquery -->
</html>