
/* global __DEV__ */
/**
 * @format
 */

 import { act } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import TestRenderer from 'react-test-renderer'; // ES6
import App from './../App.tsx';


 it('renders correctly', () => {
    act(() => {
      TestRenderer.create(
        <App />
      )}
    );
 });