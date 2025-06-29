// store/hooks.ts
import { useDispatch, useSelector } from 'react-redux';
// 타입 안전한 hooks
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
