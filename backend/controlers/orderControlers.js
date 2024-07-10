const orderModel = require("../models/orderModel");


exports.createOrder =  async(req,res,next) =>{
    
    const cartItems= req.body;
    const amount = Number(cartItems.reduce((acc,item)=>(acc + item.product.price * item.qty),0)).toFixed(2)
    const status = 'pending';
    const dorder = {cartItems,amount,status}
 


    const order = await orderModel.create(dorder )

    res.json({
        success: true,
        dorder
})
}