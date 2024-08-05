import { Clients, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {

	await db.insert(Clients).values([
		{ name: "Lunes", age: 12, isActive: true},
		{ name: "Martes", age: 22, isActive: false},
		{ name: "Miercoles", age: 32, isActive: true},
		{ name: "Jueves", age: 42, isActive: false},
		{ name: "Viernes", age: 52, isActive: true},
	]);


	console.log('Seeds exe');
}
