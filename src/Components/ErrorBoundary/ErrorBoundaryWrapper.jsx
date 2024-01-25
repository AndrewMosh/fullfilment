// ErrorBoundaryWrapper.js
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import NotFound from './NotFound';

const ErrorBoundaryWrapper = ({ children }) => (
    <ErrorBoundary FallbackComponent={NotFound}>
        {children}
    </ErrorBoundary>
);

export default ErrorBoundaryWrapper;
