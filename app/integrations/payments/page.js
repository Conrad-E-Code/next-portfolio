"use client";
import React from 'react'
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk'
const page = () => {
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
                console.log(await response.json());
              }}
            locationId='LFX0FJ4TJ3RAS'
            >
                    <CreditCard />
            </PaymentForm>
    </div>
  )
}

export default page