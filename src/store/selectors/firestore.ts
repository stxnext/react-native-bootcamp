import { RootState } from 'app/store';

export const getData = (state: RootState) => state.firestore.data;
