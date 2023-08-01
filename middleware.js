import { NextResponse } from "next/server";
import { getIronSession } from "iron-session/edge";

export const middleware = async (req) => {
    const res = NextResponse.next();
    const session = await getIronSession(req, res, {
      cookieName: "auth_token",
      password: process.env.SECRET_COOKIE_PASSWORD,
      // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
      cookieOptions: {
        secure: process.env.NODE_ENV === "production",
      },
    });
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    // do anything with session here:
    session.user = res.username

    console.log("sessionafter", session);
    // like add some custom property:   
    // user.pimpin = true;
    // like mutate user:
    // user.something = someOtherThing;
    // or:
    // session.user = someoneElse;
  
    // uncomment next line to commit changes:
    await session.save();
    // or maybe you want to destroy session:
    // await session.destroy();
  
    // demo:
    // if (session.user) {
    //   // unauthorized to see pages inside admin/
    //   return NextResponse.redirect(new URL('/unauthorized', req.url)) // redirect to /unauthorized page
    // }
  
    return res;
  };

export const config = {
    matcher: '/api/sign-in',
  }


