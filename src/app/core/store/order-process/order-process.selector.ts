import { OrderProcessState } from './order-process.state';
import { createFeatureSelector } from '@ngrx/store';
import { createSelector} from '@ngrx/store';
export const feature_orderProcess = createFeatureSelector<OrderProcessState>("feature_orderProcess");
export const pendingOrderProcessSelection = createSelector(feature_orderProcess, (state) => state.pendingOrderProcess)
