export interface IProduct {
	id: string;
	name: string;
	categoryId: string;
	inStock: boolean;
	color: string;
}

export interface IColor {
	id: string;
	color: string;
}