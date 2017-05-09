module.exports  = {
    inter(req, res){
        //console.log(req)
        var results = {test:true}
        res.send(results)
    },
    get(req, res){
        var results = {
            result:0,
            data:[
                {id:1,name:'撒旦法'},
                {id:2,name:'的双方各'},
                {id:3,name:'个'},
            ],
            msg:'成功'
        }
        res.send(results)
    }
};