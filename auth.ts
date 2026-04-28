import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({

    trustHost: true,

    pages: {
        signIn: "/login",
    },

    providers: [
        Credentials({
            name: "Credentials",

            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                try{
                    const response = await fetch(`${process.env.APIURL}/account/login/`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(credentials),
                    });
                    
                    const text = await response.text();

                    let data;
                    try {
                        data = JSON.parse(text);
                    } catch {
                        console.error("LOGIN API returned non-JSON:", text);
                        return null;
                    }
                    

                    if(response.ok && data.success){
                        return {
                            id: data.user_id,
                            email: data.email,
                            name: data.fullname,
                            role: data.role,
                            access: data.access,
                        };
                    }

                    return null;

                } catch(e){
                    console.error("AUTH ERROR:", e);
                    return null;
                }
            }
        })
    ],

    session: {
        strategy: "jwt",
    },


    callbacks: {
        async jwt({token,  user }){
            if(user){
                token.id = user.id;
                token.accessToken = user?.access;
                token.name = user?.name;
                token.email = user?.email;
                token.role = user?.role;
            }

            return token;
        },

        async session({ session, token}) {
            session.accessToken = token.accessToken;
            session.user.name = token.name;
            session.user.email = token.email;
            session.user.id = token.id;
            session.user.role = token.role;
            
            return session;
        }
    },

    
})