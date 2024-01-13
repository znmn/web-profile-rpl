import prisma from "@/lib/prisma";

export interface Course {
	id: number;
	title: string;
	image: string;
	is_active: boolean;
}

export interface Courses {
	data: Course[] | Course | null;
	size?: number;
	total?: number;
	page?: number;
}
export const getCourses = async (page: number = 1, perPage: number = 10, search: string = ""): Promise<Courses> => {
	const where = {
		OR: [
			{
				title: {
					contains: search,
					mode: "insensitive" as const,
				},
			},
		],
	};
	const total = await prisma.course.count({ where });
	const data = await prisma.course.findMany({
		skip: (page - 1) * perPage,
		take: perPage,
		where,
	});
	return { data, page, size: data.length, total };
};

export const getCourse = async (id: number | string): Promise<Courses> => {
	const data = await prisma.course.findUnique({
		where: {
			id: Number(id),
		},
	});
	return { data };
};

export const createCourse = async (data: Omit<Course, "id" | "is_active">): Promise<Courses> => {
	const course = await prisma.course.create({
		data,
	});
	return { data: course };
};

export const updateCourse = async (id: number | string, data: Partial<Course>): Promise<Courses> => {
	const updatedCourse = await prisma.course.update({
		where: {
			id: Number(id),
		},
		data,
	});
	return { data: updatedCourse };
};

export const deleteCourse = async (id: number | string): Promise<Courses> => {
	const data = await prisma.course.delete({
		where: {
			id: Number(id),
		},
	});
	return { data };
};

export const activateCourse = async (id: number | string): Promise<Courses> => {
	const course = await updateCourse(id, { is_active: true });
	return course;
};

export const deactivateCourse = async (id: number | string): Promise<Courses> => {
	const course = await updateCourse(id, { is_active: false });
	return course;
};
