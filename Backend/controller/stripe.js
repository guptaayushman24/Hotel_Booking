const stripe = require("stripe")('sk_test_tR3PYbcVNZZ796tH88S4VQ2u');
async function stripepayment (req,res){
    try{
        const {product,token} = req.body;
        console.log("Price",product.price);
        const idempotencyKey  =  'KG5LxwFBepaKHyUD';
        return stripe.customers.create({
            source:token.id
        }).then(customer=>{
            stripe.charges.create({
                amount:product.price*100,
                currency:'usd',
                customer:customer.id,
                receipt_email:token.email,
                description:product.name
            
          
            },{idempotencyKey});
        })
        .then(result=>res.status(200).json(result))
        .catch(err=>console.log(err));
    }
    catch(err){
     
        return res.json({'message':'Payment Issue'});
    }
}
module.exports = {
    stripepayment
}