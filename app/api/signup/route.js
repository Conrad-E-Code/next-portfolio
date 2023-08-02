import { connectToDB } from "/utils/database";
import User from "/models/user";
import bcrypt, {hash} from "bcrypt";

export const POST = async (req) => {
    const { username, password } = await req.json();
    try{
        console.log(username, password, "MY TRY")
        await connectToDB();
        const user = await User.findOne({ username });
        if (!user) {
            console.log("NO USER FOUND");
              const pHash = await bcrypt.hash(password, 10);
            const newUser = new User({
              username,
              password: pHash, 
            });
              await newUser.save();
              return new Response(JSON.stringify(newUser), { status: 201 });
          }
            return new Response(JSON.stringify({ error: "User already exists" }), {
                status: 409,
            });


    } catch (error) {
        console.log(error, "MY ERROR")
    }
};
