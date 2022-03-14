const express = require('express')
const routes = express.Router()

routes.get('/v1/areas/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM `areas`', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.get('/v1/areas/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM areas WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/v1/areas/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO areas set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('area added!')
        })
    })
})

routes.delete('/v1/areas/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM area WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('area excluded!')
        })
    })
})

routes.put('/v1/areas/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE area set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('area updated!')
        })
    })
})

module.exports = routes
