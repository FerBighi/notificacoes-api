// src/controllers/ParticipanteController.js
const ParticipanteModel = require("../models/ParticipanteModel");

function index(req, res) {
    // Liste todos os participantes
    const participantes = ParticipanteModel.listarTodos();
    return res.json(participantes);
}

function show(req, res) {
    const id = parseInt(req.params.id);

    // Busque o participante por ID
    const participante = ParticipanteModel.buscarPorId(id);

    // Se não encontrar
    if (!participante) {
        return res.status(404).json({ erro: "Participante não encontrado" });
    }

    // Se encontrar
    return res.json(participante);
}

function store(req, res) {
    const { nome, email } = req.body;

    // Valide: nome e email são obrigatórios
    if (!nome || !email) {
        return res.status(400).json({ erro: "Nome e email são obrigatórios" });
    }

    // Crie o participante
    const novoParticipante = ParticipanteModel.criar({ nome, email });

    // Retorne com status 201
    return res.status(201).json(novoParticipante);
}

function update(req, res) {
    const id = parseInt(req.params.id);

    // Atualize o participante
    const participanteAtualizado = ParticipanteModel.atualizar(id, req.body);

    // Se não encontrar
    if (!participanteAtualizado) {
        return res.status(404).json({ erro: "Participante não encontrado" });
    }

    // Se encontrar
    return res.json(participanteAtualizado);
}

function destroy(req, res) {
    const id = parseInt(req.params.id);

    // Delete o participante
    const deletado = ParticipanteModel.deletar(id);

    // Se não encontrar
    if (!deletado) {
        return res.status(404).json({ erro: "Participante não encontrado" });
    }

    // Se encontrar
    return res.status(204).send();
}

module.exports = { index, show, store, update, destroy };