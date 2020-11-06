export class User {
	id: number;
	birthDate: Date;
	avatar: string;
	bio: string;

	notes: Notes[] = [];
}

export class Notes {
	id: number;
	title: string;
	date: Date;
}
