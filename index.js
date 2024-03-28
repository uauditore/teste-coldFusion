const artistasMock = ['Michael Jackson', 'Madonna', 'Elton John', 'Beyoncé', 'Rihanna', 'Bob Dylan', 'Adele', 'Taylor Swift', 'Prince', 'David Bowie'];
let escolhas = [];

const artistasSelect = document.getElementById('artistas');
artistasMock.forEach((artista, index) => {
    const option = document.createElement('option');
    option.value = index; // Usamos o índice como valor do option
    option.text = artista;
    artistasSelect.appendChild(option);
});

function salvarEscolhas() {
    const artistaSelecionado = artistasMock[document.getElementById('artistas').value];
    const posicaoSelecionada = document.getElementById('posicao').value;

    const escolha = {
        artista: artistaSelecionado,
        posicao: posicaoSelecionada
    };

    escolhas.push(escolha);
    escolhas.sort((a, b) => a.posicao - b.posicao);

    const listaArtistas = document.getElementById('listaArtistas');
    listaArtistas.innerHTML = '';
    
    escolhas.forEach((escolha, index) => {
        const novoItem = document.createElement('li');
        novoItem.textContent = `${escolha.posicao} - ${escolha.artista}`;
        listaArtistas.appendChild(novoItem);
    });
}