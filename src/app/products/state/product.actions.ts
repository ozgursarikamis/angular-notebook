import { createAction, props } from "@ngrx/store";

export const toggleThumbnails = createAction('[Products] Toggle Product Code');
export const setCurrentProduct = createAction('[Products] Set Current Product', props<{id: number}>());
export const clearCurrentProduct = createAction('[Products] Clear Current Product');
export const initializeCurrentProduct = createAction('[Product] Initialize Current Product');
