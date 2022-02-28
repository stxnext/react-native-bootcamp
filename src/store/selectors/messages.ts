import { RootState } from 'app/store';

export const getMessages = (state: RootState) => state.messsages.messages;
