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

test('verifies compliance section products and no duplicate Qik RetainRight', () => {
  const { getByText, getAllByText, queryByText } = render(<App />);
  
  // Verify Compliance & Risk Management section exists
  const complianceSection = getByText(/Compliance & Risk Management/i);
  expect(complianceSection).toBeInTheDocument();
  
  // Verify Legal & Documentation section is removed
  const legalSection = queryByText(/Legal & Documentation/i);
  expect(legalSection).not.toBeInTheDocument();
  
  // Verify required products exist in Compliance section
  const policyManagement = getByText(/Qik Policy Management Portal/i);
  const whistleblower = getByText(/Qik Whistleblower/i);
  const legaDraft = getByText(/Qik LegaDraft/i);
  const nexusPost = getByText(/NexusPost/i);
  const emailValidator = getByText(/Qik Email Validator/i);
  
  expect(policyManagement).toBeInTheDocument();
  expect(whistleblower).toBeInTheDocument();
  expect(legaDraft).toBeInTheDocument();
  expect(nexusPost).toBeInTheDocument();
  expect(emailValidator).toBeInTheDocument();
  
  // Verify only one instance of Qik RetainRight exists
  const retainRightElements = getAllByText(/Qik RetainRight/i);
  expect(retainRightElements).toHaveLength(1);
});
