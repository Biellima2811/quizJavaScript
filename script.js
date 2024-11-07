const quizForm = document.getElementById('quizForm');

function calcularNota() {
    const gabarito = {
        q1: 'b',
        q2: 'b',
        q3: 'a',
        q4: 'a',
        q5: 'a',
        q6: 'a',
        q7: 'a',
        q8: 'a',
        q9: 'c',
        q10: 'b'
    };

    let pontuacao = 0;
    let questoesErradas = [];

    for (let i = 1; i <= 10; i++) {
        const resposta = document.querySelector(`input[name='q${i}']:checked`);

        if (resposta) {
            localStorage.setItem(`resposta_q${i}`, resposta.value);
            if (resposta.value === gabarito[`q${i}`]) {
                pontuacao += 1;
            } else {
                questoesErradas.push(i);
            }
        } else {
            questoesErradas.push(i);
        }
    }

    document.getElementById('resultado').innerText = `Sua nota é: ${pontuacao} de 10`;

    const media = 6;
    let mensagemResultado = '';

    if (pontuacao >= media) {
        mensagemResultado = 'Média acima de 6 - Aprovado!!';
    } else {
        mensagemResultado = 'Que pena, ficou abaixo da média, infelizmente reprovado...';
    }

    if (questoesErradas.length > 0) {
        mensagemResultado += ` Questões erradas: ${questoesErradas.join(', ')}`;
    }

    const resultadoElement = document.createElement('p');
    resultadoElement.id = 'media';
    resultadoElement.innerText = mensagemResultado;
    document.body.appendChild(resultadoElement);
}
