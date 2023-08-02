"use client";

import React from 'react'
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk'
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { Context } from '/context/Context';

const SquareClient = () => {
    const {paymentStatus, setPaymentStatus} = useContext(Context)
    const router = useRouter();
  return (
    <div className='pt-16 flex items-center justify-center'>
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
              setPaymentStatus("COMPLETED")
              router.push("/")
            }
            else {
                setPaymentStatus("FAILED")
              console.log(res, "RES")
              console.log("PAYMENT FAILED")
            }
          }}
        locationId='LFX0FJ4TJ3RAS'
        >
                <CreditCard />
                {paymentStatus !== "COMPLETED" || null && <div className='text-red-500'>Payment Not Completed</div>}
        </PaymentForm>
</div>
    
  )
}

export default SquareClient