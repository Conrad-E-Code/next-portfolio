"use client";
import React from 'react'
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk'

const page = () => {
  return (
    <div className='pt-16 flex items-center justify-center'>
        <PaymentForm
            applicationId='sandbox-sq0idb-SElf9Yc1IyaxeegBCURt-A'
            cardTokenizeResponseReceived={ (token, verifiedBuyer) => {
                console.log('token: ', token)
                console.log('verifiedBuyer: ', verifiedBuyer)
            }}
            locationId='LFX0FJ4TJ3RAS'
            >
                <div className='bg-primaryColor/50 pt-10 w-[55vw] flex items-center flex-col'>
                    <CreditCard />
                </div>

            </PaymentForm>

    </div>
  )
}

export default page