import { connectToDB } from "@/utils/database";
import User from "@/models/user";
import bcrypt, { hash } from "bcrypt";

export const POST = async (req, res) => {
  console.log("MY REQUEST");
  console.log(
    "**************************************************************************************"
  );
  const { username, password } = await req.json();
  try {
    console.log(username, password);
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
    console.log(user);
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      return new Response(JSON.stringify(user), { status: 200 });
    } else {
      return new Response(
        JSON.stringify({ message: "Password does not match" }),
        { status: 403 }
      );
    }
  } catch (error) {
    console.log(error);
    return new Response(
        JSON.stringify({ error: "Something went wrong!" }),
        { status: 500 }
    );
  }
};
