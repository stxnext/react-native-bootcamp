import { createAction } from '@reduxjs/toolkit';

import { RequestFirestoreID } from 'app/types';
import { FirebaseDocument } from 'app/types/firebase';

export const firebaseCollectionData = createAction(
  'firestore/collection/data',
  (data: FirebaseDocument[]) => ({
    payload: data,
    meta: {
      request: {
        id: RequestFirestoreID.NEW_DATA,
      },
    },
  }),
);
