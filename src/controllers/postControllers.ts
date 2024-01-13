import prisma, { type SortOrder } from "@/lib/prisma";
import { slugify } from "@/lib/utils";

export interface Post {
	id: number;
	title: string;
	image: string | null;
	content: string;
	is_active: boolean;
	slug: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface Posts {
	data: Post[] | Post | null;
	size?: number;
	total?: number;
	page?: number;
}

export const getPosts = async (page: number = 1, perPage: number = 10, search: string = "", sort: SortOrder = "desc"): Promise<Posts> => {
	const where = {
		OR: [
			{
				title: {
					contains: search,
					mode: "insensitive" as const,
				},
			},
			{
				content: {
					contains: search,
					mode: "insensitive" as const,
				},
			},
		],
	};
	const total = await prisma.post.count({ where });
	const data = await prisma.post.findMany({
		skip: (page - 1) * perPage,
		take: perPage,
		where: {
			OR: [
				{
					title: {
						contains: search,
						mode: "insensitive",
					},
				},
				{
					content: {
						contains: search,
						mode: "insensitive",
					},
				},
			],
		},
		orderBy: [
			{
				updatedAt: sort,
			},
		],
	});
	return { data, page, size: data.length, total };
};

export const getPost = async (slug: string): Promise<Posts> => {
	const data = await prisma.post.findUnique({
		where: {
			slug,
		},
	});
	return { data };
};

export const createPost = async (datas: { title: string; image: string | null; content: string }): Promise<Posts> => {
	const { title, image, content } = datas;
	const slug = slugify(title);
	const data = await prisma.post.create({
		data: {
			title,
			image,
			content,
			slug,
		},
	});
	return { data };
};

export const updatePost = async (slug: string, data: Partial<Post>): Promise<Posts> => {
	const updatedPost = await prisma.post.update({
		where: {
			slug,
		},
		data,
	});
	return { data: updatedPost };
};

export const deletePost = async (slug: string): Promise<Posts> => {
	const data = await prisma.post.delete({
		where: {
			slug,
		},
	});
	return { data };
};

export const activatePost = async (slug: string): Promise<Posts> => {
	const post = await updatePost(slug, { is_active: true });
	return post;
};

export const deactivatePost = async (slug: string): Promise<Posts> => {
	const post = await updatePost(slug, { is_active: false });
	return post;
};
