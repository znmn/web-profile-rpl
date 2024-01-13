import prisma from "@/lib/prisma";

export interface Gallery {
	id: number;
	title: string;
	subtitle: string | null;
	image: string;
	is_active: boolean;
}

export interface Galleries {
	data: Gallery[] | Gallery | null;
	size?: number;
	total?: number;
	page?: number;
}

export const getGalleries = async (page: number = 1, perPage: number = 10, search: string = ""): Promise<Galleries> => {
	const where = {
		OR: [
			{
				title: {
					contains: search,
					mode: "insensitive" as const,
				},
			},
			{
				subtitle: {
					contains: search,
					mode: "insensitive" as const,
				},
			},
		],
	};
	const total = await prisma.gallery.count({ where });
	const data = await prisma.gallery.findMany({
		skip: (page - 1) * perPage,
		take: perPage,
		where,
	});
	return { data, page, size: data.length, total };
};

export const getGallery = async (id: number | string): Promise<Galleries> => {
	const data = await prisma.gallery.findUnique({
		where: {
			id: Number(id),
		},
	});
	return { data };
};

export const createGallery = async (data: Omit<Gallery, "id" | "is_active">): Promise<Galleries> => {
	const gallery = await prisma.gallery.create({
		data,
	});
	return { data: gallery };
};

export const updateGallery = async (id: number | string, data: Partial<Gallery>): Promise<Galleries> => {
	const updatedGallery = await prisma.gallery.update({
		where: {
			id: Number(id),
		},
		data,
	});
	return { data: updatedGallery };
};

export const deleteGallery = async (id: number | string): Promise<Galleries> => {
	const data = await prisma.gallery.delete({
		where: {
			id: Number(id),
		},
	});
	return { data };
};

export const activateGallery = async (id: number | string): Promise<Galleries> => {
	const gallery = await updateGallery(id, { is_active: true });
	return gallery;
};

export const deactivateGallery = async (id: number | string): Promise<Galleries> => {
	const gallery = await updateGallery(id, { is_active: false });
	return gallery;
};
