import { createAction, props } from "@ngrx/store";
import { IProduct } from '../models/product';

export const toggleThumbnails = createAction('[Products] Toggle Product Thumbnail');
export const setCurrentProduct = createAction('[Products] Set Current Product', props<{id: number}>());
export const clearCurrentProduct = createAction('[Products] Clear Current Product');
export const initializeCurrentProduct = createAction('[Product] Initialize Current Product');

export const setProducts = createAction('[Products] Set All the Products', props<{products: IProduct[] }>());
