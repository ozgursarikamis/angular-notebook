import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import * as ProductActions from './product.actions';

const initialState: IProductState = {
	showThumbnails: false,
	products: [],
	currentProduct: null,
}

export const productReducer = createReducer<IProductState>(
	initialState as IProductState,
	on(ProductActions.toggleThumbnails, (state: IProductState) => {
			return {
				...state,
				showThumbnails: !state.showThumbnails
			}
	}),
	on(ProductActions.setCurrentProduct, (state, action): IProductState => {
		return {
			...state, currentProduct: +action.product.id
		}
	}),
	on(ProductActions.initializeCurrentProduct, (state): IProductState => {
		return {
			...state,
			currentProduct: 0
		}
	})
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