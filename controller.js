const pool = require('./model');
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
dotenv.config()

let parser = bodyParser.urlencoded({extended:false})


let generatePinVoteCount = (pin)=>{
    let pinCount = {
        'A':100,
        "B":50,
        "C":10,
        "D":5,
        "E":1
    }
    return pinCount[pin[0]]

}



module.exports = function(app){
    app.get('/',(req,res)=>{
        pool.query('SELECT * FROM nominee',(err,result)=>{

            if(err) res.status(400).send(err)

            else{
                let names = result.rows.map(obj => [obj.name,obj.id,obj.category])
                let categories = new Set(result.rows.map(obj => obj.category))
                res.render('home',{names,categories:Array.from(categories)})
                
            }
        })
    app.post('/r-x',parser,(req,res)=>{

        let {pin,name,category} = req.body
        
        pool.query('SELECT id FROM nominee WHERE name = $1 and category = $2',[name,category],(err,result)=>{
            if(err) res.status(400).send(err)
            else{
                if(result.rows.length == 0){
                    res.status(400).send('No such nominee')
                }
                else{
                    let nomineeId = result.rows[0].id
      
                    pool.query('SELECT * FROM ticket WHERE pin = $1',[pin],(err,result)=>{
                        if(err){
                            res.status(405).send('error')
                        }
                        else{
                            if(result.rows.length <= 0){
                                res.status(404).send('Pin is invalid')
                                
                                
                            }
                            else{
                                if(result.rows[0].status === 'used'){
                                    res.status(400).send('Pin has already been used')
                                }
                                else{
                                    let count = generatePinVoteCount(pin)
            
                                    pool.query('INSERT INTO vote(vcount,nominee,ticket) values($1,$2,$3)',[count,nomineeId,result.rows[0].id],(err,result)=>{
                                        if(err){
                                            res.status(405).send(err.stack)
                                        }
                                        else{
                                            pool.query(`UPDATE ticket SET status = 'used' WHERE pin = $1 RETURNING *`,[pin],(err,result)=>{
                                                if(err){
            
                                                    res.status(405).send(err.stack)
                                                }
                                                else{
                                                    res.status(200).send('Sucessfully voted.')    
                                                }
            
                                            })
                                           
                                        }
            
                                    })
            
                                }
                            }
            
            
                        }
                    })





                }
            }
        })

        
    
        
    })
    
    })


 }

