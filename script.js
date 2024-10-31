document.getElementById('ask-button').addEventListener('click', function() {
    const question = document.getElementById('user-question').value;
    const responseDiv = document.getElementById('response');

    // Aqui você pode integrar a lógica para processar a pergunta e gerar uma resposta
    if (question) {
        responseDiv.innerHTML = `<p><strong>Pergunta:</strong> ${question}</p>
                                 <p><strong>Resposta:</strong> Isso é uma resposta simulada para a pergunta "${question}".</p>`;
        document.getElementById('user-question').value = ''; // Limpa o campo de entrada
    } else {
        responseDiv.innerHTML = `<p style="color: red;">Por favor, digite uma pergunta.</p>`;
    }
});
