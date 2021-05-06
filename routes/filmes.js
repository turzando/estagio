const express = require('express')
const router = express.Router()

// Listar
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de filmes'
    })
})

// Criar
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de filmes'
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
