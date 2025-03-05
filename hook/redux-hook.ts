import {
  useDispatch,
  useSelector,
  useStore,
  TypedUseSelectorHook,
} from 'react-redux';
import { RootState, AppDispatch, AppStore } from '../store/createStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = () =>
  useSelector;
export const useAppStore = () => useStore<AppStore>();
