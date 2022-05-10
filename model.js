const {Pool} = require('pg');


const pool = new Pool({
    connectionString:process.env.DATABASE_URL || 'postgres://fulqgbmrdlhgzx:fa32918905fa7a9d87ba096d1a5a47ea17d46318a30205f09cf28acbb0f4cbd8@ec2-34-201-95-176.compute-1.amazonaws.com:5432/dek4c69oqanvvj',
    ssl:{
    rejectUnauthorized:false}
});

pool.query('select * from nominee',(err,result)=>{
    if(err) console.log(err);
    else{
        console.log('Connected to database')
    }
})

module.exports = pool;