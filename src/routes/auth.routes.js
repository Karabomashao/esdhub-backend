import { ExpressAuth } from "@auth/express"
import Google from "@auth/express/providers/google"
import dotenv from "dotenv"

dotenv.config()

export const authHandler = ExpressAuth({
  providers: [Google],
  secret: process.env.BETTER_AUTH_SECRET,
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("https://thankful-ground-04f584e0f.4.azurestaticapps.net")) return url
      if (url.startsWith("/")) return `${baseUrl}${url}`
      return baseUrl
    },
  },
})
