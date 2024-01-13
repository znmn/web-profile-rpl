const { hash } = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker/locale/id_ID");
const { slugify } = require("../src/lib/utils");

const prisma = new PrismaClient();

async function main() {
	await prisma.admin
		.create({
			data: {
				id: 1,
				username: "admin",
				email: "admin@email.test",
				password: await hash("password", 10),
			},
		})
		.then(console.log("Admin created"));

	const createPost = async () => {
		const title = faker.lorem.sentence();
		await prisma.post.create({
			data: {
				title,
				slug: slugify(title),
				content: faker.lorem.paragraphs(),
				image: faker.image.url(640, 480),
				// createdBy: 1,
			},
		});
	};

	const createCourse = async () => {
		await prisma.course.create({
			data: {
				title: faker.lorem.sentence(2),
				image: faker.image.url(200, 300),
			},
		});
	};

	const createLabMember = async () => {
		await prisma.lab_member.create({
			data: {
				name: faker.person.fullName(),
				image: faker.image.url(200, 300),
				position: faker.person.jobTitle(),
			},
		});
	};

	const createGallery = async () => {
		await prisma.gallery.create({
			data: {
				title: faker.lorem.sentence(),
				subtitle: faker.lorem.sentence(),
				image: faker.image.url(640, 480),
			},
		});
	};

	const promises = Array.from({ length: 10 }, () => Promise.all([createPost(), createCourse(), createLabMember(), createGallery()]));

	await Promise.all(promises.flat()).then(console.log("Seed created"));
}

main();
