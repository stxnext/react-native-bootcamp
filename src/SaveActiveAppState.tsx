import React, { useCallback, useEffect, useRef } from 'react';
import { Alert, AppState } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { actions, selectors } from 'app/store';

const change = 'change';
const active = 'active';
const inactive = 'inactive';
const background = 'background';
const alertTitle = 'Last time app was active on ';

export const SaveActiveAppState: React.FC = ({ children }) => {
  const appState = useRef(AppState.currentState);
  const dispatch = useDispatch();
  const lastActiveDate = useSelector(selectors.getLastActiveDate);

  const matchState = (state: string) => appState?.current.match(state);

  const appStateListener = useCallback(() => {
    return AppState.addEventListener(change, (nextAppState) => {
      if (
        (matchState(active) && nextAppState === inactive) ||
        (matchState(active) && nextAppState === background)
      ) {
        const dateNow = new Date().toLocaleString();
        dispatch(actions.updateLastActiveDate(dateNow));
      }
      if ((matchState(background) || matchState(inactive)) && nextAppState === active) {
        Alert.alert(alertTitle + lastActiveDate);
      }
      appState.current = nextAppState;
    });
  }, [dispatch, lastActiveDate]);

  useEffect(() => {
    const subscription = appStateListener();
    return () => {
      subscription.remove();
    };
  }, [appStateListener, lastActiveDate]);

  return <>{children}</>;
};
