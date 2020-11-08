import { createAction, createReducer, on } from '@ngrx/store';
import * as AppState from '../../state/app.state';

export const productReducer = createReducer<IProductState>(
	{ showThumbnail: true } as IProductState,
	on(createAction('[Products] Toggle Product Code', (state: IProductState) => {
			return {
				...state,
				showThumbnail: !state.showThumbnail
			}
		})
	)
);

export interface State extends AppState.IState {
	products: IProductState
}

export interface IProductState {
	showThumbnail: boolean;
	products: [],
	currentProduct?: number
}