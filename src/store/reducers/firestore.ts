import { createReducer } from '@reduxjs/toolkit';

import * as firestoreActions from 'app/store/actions/firestore';
import { FirebaseDocument } from 'app/types/firebase';

export interface FirestoreState {
  data: FirebaseDocument[];
}

export const initialState: FirestoreState = {
  data: [],
};

export const firestoreReducer = createReducer(initialState, (builder) => {
  builder.addCase(firestoreActions.firebaseCollectionData, (state, action) => {
    state.data = action.payload;
  });
});
