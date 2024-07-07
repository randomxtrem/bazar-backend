const orderQueries = require('../queries/orderQueries');

const getorder = async (req,res) =>{
    try {
        const recentorder = await pool.query(orderQueries.recentorder)
        res.status(200).send(recentorder.rows);
    }
    catch(err){

    }
}
