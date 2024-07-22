import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDB";
export const post=async(req)=>{
    await connectDB()
    let body=await req.formData()
    body= object.formEntries(body)
    //check if razorpayorderid persent on the server
    let p= await Payment.findOne({oid:body.razorpay_body_id})
    if(!p){
        return NextResponse.json({success:false,message:"Order Id not found"})
    }
    //verify the payment
    let xx=validatePaymentVerification({"order_id":body.razorpay_order_id,"payment_id":body.razorpay_payment_id},body.razorpay_signature,process.env.KEY_SECRET)
    if(xx){
        //update the payment status
        const updatePayment=await Payment.findOneAndUpdate({oid:body.razorpay_order_id},{done:"true"},{new:"true"})
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatePayment.to_user}?paymentdone=true`)
        console.log(updatePayment)
    }
    else{
        return NextResponse.json({success:false,message:"Payment Verification Failed"})
    }
}