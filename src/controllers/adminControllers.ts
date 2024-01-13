import prisma from "@/lib/prisma";
import { compare, hash } from "bcryptjs";

export interface Admin {
	id: number;
	username?: string;
	email?: string;
	password?: string;
}

export interface Admins {
	data: Admin[] | Admin | null;
	total?: number;
	page?: number;
}

const passwordRule = {
	pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/,
	message: "Password must contain at least 6 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character",
};

export const getAdmin = async (id: number | string): Promise<Admins> => {
	const data = await prisma.admin.findUnique({
		where: {
			id: Number(id),
		},
		select: {
			id: true,
			username: true,
			email: true,
		},
	});
	return { data };
};

export const loginAdmin = async (datas: { username: string; password: string }): Promise<Admin> => {
	const { username, password } = datas;
	const admin = await prisma.admin.findFirst({
		where: {
			OR: [
				{
					email: username,
				},
				{
					username,
				},
			],
		},
	});
	if (!admin) throw new Error("Admin not found");
	const valid = await compare(password, admin.password);
	if (!valid) throw new Error("Password is not valid");

	const { password: p, ...output } = admin;

	return output;
};

export const updateAdminPass = async (id: number | string, password: string, new_password: string): Promise<Admins> => {
	if (!passwordRule.pattern.test(new_password)) throw new Error(passwordRule.message);

	const admin = await prisma.admin.findUnique({
		where: {
			id: Number(id),
		},
	});
	if (!admin) throw new Error("Admin not found");
	const valid = await compare(password, admin.password);
	if (!valid) throw new Error("Password is not valid");

	const hashed = await hash(new_password, 10);
	const updatedAdmin = await prisma.admin.update({
		where: {
			id: Number(id),
		},
		data: {
			password: hashed,
		},
	});

	return { data: updatedAdmin };
};
