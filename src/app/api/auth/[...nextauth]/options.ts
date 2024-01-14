import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginAdmin } from "@/controllers/adminControllers";

export const options: AuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: { label: "Username/Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				try {
					const user = await loginAdmin({
						username: credentials?.username as string,
						password: credentials?.password as string,
					});
					return { ...user, id: String(user.id) };
				} catch (e) {
					return null;
				}
			},
		}),
	],
	session: {
		maxAge: Number(process.env.SESSION_MAX_AGE) || 60 * 60 * 24 * 5, // env | 5 days
	},
	jwt: {
		// maxAge: 60 * 60 * 24 * 5, // 5 days
	},
	pages: {
		signIn: "/login",
	},
	secret: process.env.NEXTAUTH_SECRET,
	debug: process.env.NODE_ENV === "development",
	callbacks: {
		async jwt({ user, token }) {
			if (user) {
				token.user = { ...user };
			}
			return token;
		},
		async session({ session, token }) {
			if (token?.user) {
				session.user = token.user;
			}
			return session;
		},
	},
};
