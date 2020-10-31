export interface IProduct {
	id: string;
	name: string;
	inStock: boolean;
	image: any;
	categoryId: number;
	categoryName: string;
}

export interface ICategory {
	id: string;
	name: string;
}