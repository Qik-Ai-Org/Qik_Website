import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the new artistic heading and verifies phone numbers are removed', () => {
  const { getByText, queryByText } = render(<App />);
  
  // Test for the new artistic heading "The Art of the Agreement"
  const mainHeadingElement = getByText(/The Art of the Agreement/i);
  expect(mainHeadingElement).toBeInTheDocument();
  
  // Test for the new subtitle about AI and legal elegance
  const subHeadingElement = getByText(/Where artificial intelligence meets legal elegance/i);
  expect(subHeadingElement).toBeInTheDocument();
  
  // Verify phone numbers are not present
  const usPhoneNumber = queryByText(/\+1 8453637505/);
  const inPhoneNumber = queryByText(/\+91-9209157677/);
  const altPhoneNumber = queryByText(/\+91 9503122314/);
  
  expect(usPhoneNumber).not.toBeInTheDocument();
  expect(inPhoneNumber).not.toBeInTheDocument();
  expect(altPhoneNumber).not.toBeInTheDocument();
});
