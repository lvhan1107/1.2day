let data=require('./mock/mock.json')

module.exports={
    devServer:{
        open:true,
        before(app){
            app.get('/getlist',(req,res)=>{
                res.send(data)
            })
        }
    }
}