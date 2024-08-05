import { Clients, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {

	await db.insert(Clients).values([
		{ id: 1, name: "Lunes", age: 12, isActive: true},
		{ id: 2, name: "Martes", age: 22, isActive: false},
		{ id: 3, name: "Miercoles", age: 32, isActive: true},
		{ id: 4, name: "Jueves", age: 42, isActive: false},
		{ id: 5, name: "Viernes", age: 52, isActive: true},
	]);


	console.log('Seeds exe');
}
