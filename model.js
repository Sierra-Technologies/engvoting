const {Pool} = require('pg');


const pool = new Pool({
    connectionString:process.env.DATABASE_URL || 'postgres://rvedwtshfqhxht:93ea18cfbc24e2e202f38a2a0e2df6438d734d5acb72dddadf39bff77cb3fb31@ec2-3-223-213-207.compute-1.amazonaws.com:5432/dfuf3qqoobefl9',
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