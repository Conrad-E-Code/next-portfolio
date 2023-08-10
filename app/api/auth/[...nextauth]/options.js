import { connectToDB } from "/utils/database";
import User from "/models/user";
import bcrypt from "bcrypt";
import  CredentialsProvider from "next-auth/providers/credentials";

export const NextAuthOptions = {
  providers: [
    // Other providers if any
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "Admin", value: "Admin" },
          password: { label: "Password", type: "password", placeholder: "1234", value: "1234" }
        },
        async authorize(credentials) {
          try {
            // Connect to the database
            await connectToDB();
  
            // Find the user in the database based on the provided username
            const user = await User.findOne({ username: credentials.username });
  
            if (!user) {
              // User not found, return null to indicate failed authentication
              return null;
            }
  
            // User found, check if password matches
            const passwordMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );
  
            if (passwordMatch) {
              // Password matches, return the user object
              return user;
            } else {
              // Password doesn't match, return null to indicate failed authentication
              return null;
            }
          } catch (error) {
            // Handle any errors that might occur during the authentication process
            console.error("Authentication error:", error);
            return null;
          }
        }
      })
  ]
};
