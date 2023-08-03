"use client";

import React from 'react'
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk'
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { Context } from '/context/Context';

const SquareClient = () => {
  const {setIsPaymentCompleted} = useContext(Context)
    const router = useRouter();
  return (
    <div className='pt-[30vh] flex items-center justify-center h-screen bg-fixed bg-center bg-no-repeat handshake bg-cover sm:bg-top md:bg-center lg:bg-contain'>
      <div className="opacity-70 ">
    <PaymentForm
        applicationId='sandbox-sq0idb-SElf9Yc1IyaxeegBCURt-A'
        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
          console.log(token, "TOKEN!!!!!!!!")
            const response = await fetch("/api/pay", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                sourceId: token.token
              }),
            });
            const res = await response.json()
            if (res.payment.status === "COMPLETED") {
              console.log("PAYMENT SUCCESSFUL")
              setIsPaymentCompleted(true)
              router.push("/")
            }
            else {
              console.log(res, "RES")
              console.log("PAYMENT FAILED")
            }
          }}
        locationId='LFX0FJ4TJ3RAS'
        >
                <CreditCard />
                
        </PaymentForm>
    </div>
</div>
    
  )
}

export default SquareClient