
import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "app/api/db"
import GithubProvider from "next-auth/providers/github"
import { Adapter } from "next-auth/adapters"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise) as Adapter
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
