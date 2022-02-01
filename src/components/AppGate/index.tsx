import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions, selectors } from 'app/store';

export const AppGate: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const ready = useSelector(selectors.isAuthInitialized);

  useEffect(() => {
    dispatch(actions.initializeAuth());
  }, [dispatch]);

  return <>{ready ? children : null}</>;
};
