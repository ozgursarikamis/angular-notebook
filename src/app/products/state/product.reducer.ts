import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { IProduct } from '../models/product';


const initialState: IProductState = {
	showThumbnails: false,
	products: [],
	currentProduct: null,
}

export const productReducer = createReducer<IProductState>(
	initialState as IProductState,
	on(createAction('[Products] Toggle Product Code', (state: IProductState) => {
			return {
				...state,
				showThumbnail: !state.showThumbnails
			}
		})
	)
);

export interface State extends AppState.IState {
	products: IProductState
}

export interface IProductState {
	showThumbnails: boolean;
	products: [],
	currentProduct?: number
}

const getProductFeatureState = createFeatureSelector<IProductState>('products');

export const getShowThumbnails = createSelector(
	getProductFeatureState, state => {
		return state.showThumbnails
	}
);

export const getCurrentProduct = createSelector(
	getProductFeatureState, state => state.currentProduct
);

export const getProducts = createSelector(
	getProductFeatureState, state => state.products
);