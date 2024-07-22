"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { useSession } from "next-auth/react";
import { fetchuser,fetchpayments,initiate } from "@/actions/useractions";

const PaymentPage = ({username}) => {
//const{data:session}=useSession()
const [paymentform,setPaymentform]=useState({})
const [currentuser, setcurrentuser] = useState({})
//const [payments, setPayments] = useState([])

//useEffect(()=>{
 //  getData()
//},[])
const handleChange=(e)=>{
    setPaymentform({...paymentform,[e.target.name]: e.target.value})
}
//const getData=async()=>{
 // let u= await fetchuser(username)
 // setcurrentuser(u)
 // let dbpayments=await fetchpayments(username)
 // setPayments(dbpayments)
 // console.log(u,dbpayments)
//}
    const pay=async(amount)=>{
        //get the order id
      let a= await initiate(amount,username,paymentform)
      let orderId=a.id
        var options={
            "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
        
    }
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      



      <div className='cover w-full bg-red-50 relative'>
      <img className='object-cover w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/16.gif?token-time=1722729600&token-hash=uD8NWNHY4QogM8Eap1XAdek8mQQjgAm5opRSjBgVcA4%3D" alt="" />
      <div className='absolute -bottom-20 right-[46%] border-2 border-white rounded-lg'>
        <img className='rounded-full' width={150}  height={150}  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" alt="" />
      </div>
    </div>
    <div className="info flex justify-center items-center my-24 mb-32 flex-col gap-2">
      <div className='font-bold text-lg'>
    @{username}
    </div>
    <div className='text-slate-400'>
    Creating Animated art for VTT's

    </div>
    <div className='text-slate-400'>
   12,001members .86posts$15 .810/release   
   </div>
   <div className='payment flex gap-3 w-[80%] mt-11'>
    <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
   {/* Show list of all the supporters  as a leaderboard */}
   <h2 className='text-2xl font-bold my-5'>Supporters</h2>
   <ul className='mx-5 text-lg'>
    
     
    
   <li className='my-4 flex gap-2 items-center'>
     <img width={33} src="wired-flat-21-avatar.gif" alt="user avatar" />
     <span>Ankit Yadav<span className='font-bold'>₹30</span> with a message "Bro your Project is very good"</span>
   </li>
   <li  className='my-4 flex gap-2 items-center'>
     <img width={33} src="wired-flat-21-avatar.gif" alt="user avatar" />
     <span>Shubham donated<span className='font-bold'>₹30</span> with a message "Bro you are great.I supported you"</span>
   </li>
   <li  className='my-4 flex gap-2 items-center'>
     <img width={33} src="wired-flat-21-avatar.gif" alt="user avatar" />
     <span>Shivam donated<span className='font-bold'>₹20</span> with a message "Bro you are great.I supported you"</span>
   </li>
   <li  className='my-4 flex gap-2 items-center'>
     <img width={33} src="wired-flat-21-avatar.gif" alt="user avatar" />
     <span>Rohan donated<span className='font-bold'>₹20</span> with a message "Bro you are great.I supported you"</span>
   </li>
   

   </ul>
    </div>
    <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
    <h2 className='text-2xl font-bold my-5'>Male a Payment</h2>
    <div className='flex gap-2 flex-col'>
      {/*input for name and message*/}
    <input onChange={handleChange} value={paymentform.name} name="name" type="text" className='w-full p-3  rounded-lg bg-slate-800' placeholder='Enter Name'/>
    <input onChange={handleChange} value={paymentform.message} name="message" type="text" className='w-full p-3  rounded-lg bg-slate-800' placeholder='Enter Message'/>
  <input onChange={handleChange} value={paymentform.amount} name="amount" type="text" className='w-full p-3  rounded-lg bg-slate-800' placeholder='Enter Amount'/>
  <button type="button"  onClick={()=>pay(Number.parseInt(paymentform.amount)*100)} className="text-white  bg-gradient-to-r from-cyan-800 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
    </div>
    {/*or choose from these amounts*/}
    <div className='flex gap-2 mt-5'>
    <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(10000)}>Pay ₹10</button>
    <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(2000)}>Pay ₹20</button>
    <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(3000)}>Pay ₹30</button>
    </div>
    </div>

   </div>
    </div>
    </>
  );
};

export default PaymentPage;
