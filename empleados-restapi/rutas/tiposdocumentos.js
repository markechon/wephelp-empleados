const express = require('express')
const routes = express.Router()

routes.get('/v1/tiposdocumentos/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM tiposdocumentos', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.get('/v1/tiposdocumentos/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM tiposdocumentos WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/v1/tiposdocumentos/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO tiposdocumentos set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('tiposdocumentos added!')
        })
    })
})

routes.delete('/v1/tiposdocumentos/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM tiposdocumentos WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('tiposdocumentos excluded!')
        })
    })
})

routes.put('/v1/tiposdocumentos/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE tiposdocumentos set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('tiposdocumentos updated!')
        })
    })
})

module.exports = routes
