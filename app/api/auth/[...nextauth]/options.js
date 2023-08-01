import CredentialsProvider from "next-auth/providers/credentials"
export const NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Username" },
                password: { label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials) {
                // retrieve user data here
                const user = { id: 1, name: "Admin", password: "1234"}
            
            if (credentials?.username === user.name && credentials?.password === user.password) {
                return user
            }
            else {
                return null
            }

            }
            }
        )

            
    ]
}