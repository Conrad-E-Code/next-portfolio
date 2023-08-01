

  import { NextResponse } from "next/server";

export const middleware = (req) => {
   console.log(req)
   console.log("@@@@@@@@@@@@@@@@@@@@@@@MIDDLEWARE@@@@@@@@@@@@@@@@@@@@")
   
   return NextResponse.json({message: "hello form middleware"});
}



export const config = {
    matcher: '/api/test',
    }




    ///
    ///
    ///



    