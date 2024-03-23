import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TRootState } from "./configureStore";

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelect: TypedUseSelectorHook<TRootState> = useSelector;
