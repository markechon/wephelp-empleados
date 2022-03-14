const express = require('express')
const routes = express.Router()

const query_empleados = 
'SELECT '+
'epaginado.* '+
'FROM '+
'( '+
'SELECT '+
'@rownum := @rownum +1 AS rownum, '+
'eordenado.* '+
'FROM '+
'( '+
'SELECT '+
'@rownum := 0 '+
') r, '+
'( '+
'SELECT '+
'( '+
'SELECT '+
'COUNT(*) '+
'FROM '+
'empleados cont '+
') AS registros, '+
'e.id, '+
'CONCAT(e.nombres, ", ", e.apellidos) AS nombre, '+
'CONCAT("(", t.nombre, ") - ", e.documento) AS documento, '+
'CONCAT(a.nombre, " - ", s.nombre) AS area '+
'FROM '+
'empleados e '+
'INNER JOIN tiposdocumentos t ON '+ 
'e.tipodocumento = t.id '+
'INNER JOIN subareas s ON '+
'e.subarea = s.id '+
'INNER JOIN areas a ON '+
's.area = a.id '+
'ORDER BY '+
'e.nombres, '+
'   e.apellidos '+
') eordenado '+
') epaginado';

routes.get('/v1/empleados/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        var inicio = (req.query.inicio!=null&&req.query.inicio>=0)?req.query.inicio-1:0;
        var limite = (req.query.limite!=null&&req.query.limite>=0)?req.query.limite:inicio+10;
        inicio=(inicio<0)?0:inicio;
        limite=(limite<=0)?1:limite;
        var query_empleados_paginado =query_empleados+ ' LIMIT '+limite+' OFFSET '+inicio+' ';
        conn.query(query_empleados_paginado, (err, rows)=>{
            if(err) return res.send({"error":true,"mensaje":"error al intentar consultar el listado de empleados"})
            res.json({"error":false,"mensaje":"consulta realizada con exito","datos":rows,"registros":rows.size})
        })
    })
})

routes.get('/v1/empleados/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query(query_empleados + 'WHERE e.id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/v1/empleados/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO empleados set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('empleados added!')
        })
    })
})

routes.delete('/v1/empleados/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM empleados WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('empleados excluded!')
        })
    })
})

routes.put('/v1/empleados/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE empleados set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('empleados updated!')
        })
    })
})

module.exports = routes
