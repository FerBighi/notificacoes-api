// src/routes/inscricaoRoutes.js
const express = require("express");
const router = express.Router();

const InscricaoController = require("../controllers/InscricaoController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Inscricao:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         eventoId:
 *           type: integer
 *         participanteId:
 *           type: integer
 *         dataInscricao:
 *           type: string
 *         status:
 *           type: string
 */

/**
 * @swagger
 * /inscricoes:
 *   get:
 *     summary: Listar todas as inscrições
 *     tags: [Inscricoes]
 */
router.get("/", InscricaoController.index || ((req, res) => res.send("index não implementado")));

/**
 * @swagger
 * /inscricoes:
 *   post:
 *     summary: Criar inscrição
 *     tags: [Inscricoes]
 */
router.post("/", InscricaoController.store || ((req, res) => res.send("store não implementado")));

/**
 * @swagger
 * /inscricoes/evento/{eventoId}:
 *   get:
 *     summary: Buscar por evento
 *     tags: [Inscricoes]
 */
router.get(
    "/evento/:eventoId",
    InscricaoController.getByEvento || ((req, res) => res.send("getByEvento não implementado"))
);

/**
 * @swagger
 * /inscricoes/{id}/cancelar:
 *   patch:
 *     summary: Cancelar inscrição
 *     tags: [Inscricoes]
 */
router.patch(
    "/:id/cancelar",
    InscricaoController.cancelar || ((req, res) => res.send("cancelar não implementado"))
);

module.exports = router;