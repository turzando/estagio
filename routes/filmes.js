const express = require('express')
const router = express.Router()
const mysql = require('../mysql').pool

// Listar
router.get('/', (req, res, next) => {
    // res.status(200).send({
    //     mensagem: 'Usando o GET dentro da rota de filmes'
    // })

    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error}) }
        conn.query(
            'SELECT * FROM filmes;',
            (error, resultado, fields) => {
                if (error) { return res.status(500).send({ error: error}) }
                return res.status(200).send({ responde: resultado })
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
    res.status(201).send({
        mensagem: 'Usando o PUT dentro da rota de filmes'
    })
})

// Deletar
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota de filmes'
    })
})

// Criar metodo Avaliar


module.exports = router;
