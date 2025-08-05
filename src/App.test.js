import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders business heading and verifies phone numbers are removed', () => {
  const { getByText, queryByText } = render(<App />);
  const headingElement = getByText(/Every business tool you will ever need to fuel your business growth/i);
  expect(headingElement).toBeInTheDocument();
  
  // Verify phone numbers are not present
  const usPhoneNumber = queryByText(/\+1 8453637505/);
  const inPhoneNumber = queryByText(/\+91-9209157677/);
  const altPhoneNumber = queryByText(/\+91 9503122314/);
  
  expect(usPhoneNumber).not.toBeInTheDocument();
  expect(inPhoneNumber).not.toBeInTheDocument();
  expect(altPhoneNumber).not.toBeInTheDocument();
});
