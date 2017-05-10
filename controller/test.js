const conf = require('.././config');
const mysql  = require('mysql');  //调用MySQL模块
var connection = mysql.createConnection(conf.sql);
const test = {
    inter(req, res){
        //console.log(req)
        var results = {test:true}
        res.send(results)
    },
    get(req, res){
        const obj = {
            msg:'成功',
            data:'',
            result:0
        }
        var prames = req.query
        /*connection.query('select * from wxq_user', function(err, rows, fields) {
            if (err) {
                console.log('[query] - :'+err);
                return;
            }
            obj.data = rows
            res.send(obj)
        });*/
        var sql = 'select * from wxq_user '
        if(prames.id){
            sql += 'where id = ?'
        }
        connection.query(sql,[prames.id], function(err, rows, fields) {
            if (err) {
                console.log('[query] - :'+err);
                return;
            }
            obj.data = rows
            res.send(obj)
        });
    },
    add(req,res){
        const obj = {
            msg:'成功',
            result:0
        }
        var prames = req.query
        console.log(prames)
        if(!prames.name){
            obj.msg = '参数错误'
            obj.result = 1
            res.send(obj)
        }else if(!prames.age){
            obj.msg = '参数错误'
            obj.result = 1
            res.send(obj)
        }else {
            //var sql = 'INSERT INTO  wxq_user (name,age) value ("' + prames.name + '",'+ prames.age +');'
            var sql = 'INSERT INTO  wxq_user (name,age) value (?,?);'
            console.log(sql)
            connection.query(sql,[prames.name,prames.age], function(err, rows, fields) {
                if (err) {
                    console.log('[query] - :'+err);
                    return;
                }
                obj.msg = 'ok'
                res.send(obj)
            });

        }

    }
};

module.exports = test