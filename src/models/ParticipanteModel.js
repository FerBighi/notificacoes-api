// src/models/ParticipanteModel.js

// Dados iniciais (seed)
let participantes = [
    { id: 1, nome: "Maria Fernanda", email: "maria.fernanda@email.com" },
    { id: 2, nome: "Isadora", email: "isadora@email.com" },
    { id: 3, nome: "Maria Luiza", email: "maria.luiza@email.com" },
];

let proximoId = 4;

function listarTodos() {
    // Retorne todos os participantes
    return participantes;
}

function buscarPorId(id) {
    // Use .find() para buscar pelo ID
    return participantes.find((p) => p.id === id);
}

function criar(dados) {
    const novoParticipante = {
        id: proximoId,
        nome: dados.nome,
        email: dados.email
    };

    proximoId++;
    participantes.push(novoParticipante);
    return novoParticipante;
}

function atualizar(id, dados) {
    const index = participantes.findIndex((p) => p.id === id);

    // Se não encontrar
    if (index === -1) {
        return null;
    }

    // Atualiza usando spread
    participantes[index] = {
        ...participantes[index],
        ...dados
    };

    return participantes[index];
}

function deletar(id) {
    const index = participantes.findIndex((p) => p.id === id);

    // Se não existir
    if (index === -1) {
        return false;
    }

    // Remove
    participantes.splice(index, 1);
    return true;
}

module.exports = {
    listarTodos,
    buscarPorId,
    criar,
    atualizar,
    deletar,
};