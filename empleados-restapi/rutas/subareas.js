const express = require('express')
const routes = express.Router()

routes.get('/v1/subareas/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM subareas', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.get('/v1/subareas/0/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT id, nombre FROM subareas WHERE area = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.get('/v1/subareas/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM subareas WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/v1/subareas/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO subareas set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('subareas added!')
        })
    })
})

routes.delete('/v1/subareas/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM subareas WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('subareas excluded!')
        })
    })
})

routes.put('/v1/subareas/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE subareas set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('subareas updated!')
        })
    })
})

module.exports = routes
