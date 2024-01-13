import prisma from "@/lib/prisma";

export interface LabMember {
	id: number;
	name: string;
	position: string;
	image: string;
	is_active: boolean;
}

export interface LabMembers {
	data: LabMember[] | LabMember | null;
	size?: number;
	total?: number;
	page?: number;
}

export const getMembers = async (page: number = 1, perPage: number = 10, search: string = ""): Promise<LabMembers> => {
	const where = {
		OR: [
			{
				name: {
					contains: search,
					mode: "insensitive" as const,
				},
			},
			{
				position: {
					contains: search,
					mode: "insensitive" as const,
				},
			},
		],
	};
	const total = await prisma.lab_member.count({ where });
	const data = await prisma.lab_member.findMany({
		skip: (page - 1) * perPage,
		take: perPage,
		where,
	});
	return { data, page, size: data.length, total };
};

export const getMember = async (id: number | string): Promise<LabMembers> => {
	const data = await prisma.lab_member.findUnique({
		where: {
			id: Number(id),
		},
	});
	return { data };
};

export const createMember = async (data: Omit<LabMember, "id" | "is_active">): Promise<LabMembers> => {
	const member = await prisma.lab_member.create({
		data,
	});
	return { data: member };
};

export const updateMember = async (id: number | string, data: Partial<LabMember>): Promise<LabMembers> => {
	const updatedMember = await prisma.lab_member.update({
		where: {
			id: Number(id),
		},
		data,
	});
	return { data: updatedMember };
};

export const deleteMember = async (id: number | string): Promise<LabMembers> => {
	const data = await prisma.lab_member.delete({
		where: {
			id: Number(id),
		},
	});
	return { data };
};

export const activateMember = async (id: number | string): Promise<LabMembers> => {
	const member = await updateMember(id, { is_active: true });
	return member;
};

export const deactivateMember = async (id: number | string): Promise<LabMembers> => {
	const member = await updateMember(id, { is_active: false });
	return member;
};
