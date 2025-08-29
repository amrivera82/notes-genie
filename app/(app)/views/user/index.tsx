import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../../store';
import { AccountManagement } from './AccountManagement';

// stack navigation with support, account-management; logout transitions to login
export default function Login() {
    return (
      <Provider store={store}>
        <AccountManagement />
      </Provider>
    );
};