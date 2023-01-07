
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "959587312379-jc59iroj805gg40ug13p1d0kf5lfe72e.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  //custom page sign in
  pages :{
    signIn: '/auth/signin' 
  }
}
export default NextAuth(authOptions)

