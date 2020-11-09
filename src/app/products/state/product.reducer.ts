import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { IProduct } from '../models/product';
import * as ProductActions from './product.actions';

export const productReducer = createReducer<IProductState>(
	{ showThumbnails: true } as IProductState,
	on(ProductActions.toggleThumbnails, (state: IProductState) => {
			return {
				...state,
				showThumbnails: !state.showThumbnails
			}
	}),
	on(ProductActions.setCurrentProduct, (state, action): IProductState => {
		return {
			...state, currentProduct: action.id
		}
	}),
	on(ProductActions.initializeCurrentProduct, (state): IProductState => {
		return {
			...state,
			currentProduct: 0
		}
	}),
	on(ProductActions.setProducts, (state, action): IProductState => {
		return { 
			...state,
			products: action.products
		};
	}),
	on(ProductActions.setProducts, (state, action): IProductState => {
		return {
			...state,
			products: action.products
		}
	})
);

export interface State extends AppState.IState {
	products: IProductState
}

export interface IProductState {
	showThumbnails: boolean;
	products: IProduct[],
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