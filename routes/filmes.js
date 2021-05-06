const express = require('express')
const router = express.Router()
const mysql = require('../mysql').pool

// Listar todos os filmes
router.get('/', (req, res, next) => {

    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error}) }
        conn.query(
            'SELECT * FROM filmes;',
            (error, resultado, fields) => {
                if (error) { return res.status(500).send({ error: error}) }
                return res.status(200).send({ response: resultado })
            }
        )
    })


})

// Listar filmes sem avaliação
router.get('/sem_avaliacao', (req, res, next) => {

    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error}) }
        conn.query(
            'SELECT * FROM filmes where avaliacao is null;',
            (error, resultado, fields) => {
                if (error) { return res.status(500).send({ error: error}) }
                return res.status(200).send({ response: resultado })
            }
        )
    })


})

// Criar
router.post('/', (req, res, next) => {

    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error}) }

        conn.query(
            'INSERT INTO filmes (nome, descricao) values (?, ?);',
            [req.body.nome, req.body.descricao],
            (error, resultado, field) => {
                conn.release()
            
                if (error) {
                    return res.status(500).send({
                        mensagem: error,
                        response: null
                    })
                }

                res.status(201).send({
                    mensagem: 'Filme inserido com sucesso.',
                    id_filme: resultado.insertId
                })
            }
        )
    })

    
})

// Atualizar
router.put('/', (req, res, next) => {

    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error}) }
        conn.query(
            `UPDATE filmes
                SET nome        = ?,
                    descricao   = ?
                where id_filme = ?;`,

                [req.body.nome, req.body.descricao, req.body.id_filme],

            (error, resultado, fields) => {
                if (error) { return res.status(500).send({ error: error}) }
                return res.status(202).send({
                    mensagem: 'Produto alterado com sucesso.',
                 })
            }
        )
    })
})

// Deletar
router.delete('/', (req, res, next) => {

    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error}) }
        conn.query(
            'DELETE FROM filmes WHERE id_filme = ?;',
            [req.body.id_filme],
            (error, resultado, fields) => {
                if (error) { return res.status(500).send({ error: error}) }
                return res.status(202).send({ mensagem: `Filme deletado com sucesso.`})
            }
        )
    })
})

// Avaliar
router.patch('/', (req, res, next) => {

    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error}) }
        conn.query(
            `UPDATE filmes
                SET avaliacao = ?
                where id_filme = ?;`,

                [req.body.avaliacao, req.body.id_filme],

            (error, resultado, fields) => {
                if (error) { return res.status(500).send({ error: error}) }
                return res.status(202).send({
                    mensagem: 'Avaliação feita com sucesso.',
                 })
            }
        )
    })
})

module.exports = router;
