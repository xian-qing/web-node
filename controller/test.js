
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
        connection.query('select * from wxq_user', function(err, rows, fields) {
            if (err) {
                console.log('[query] - :'+err);
                return;
            }
            obj.data = rows
            res.send(obj)
        });

    }
};

module.exports = test