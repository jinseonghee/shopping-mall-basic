import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import { jest } from '@storybook/jest';

const queryClient = new QueryClient();

export default {
  title: 'App',
  component: App,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      </BrowserRouter>
    ),
  ],
};

export const Default = () => <App />;

export const LoadingState = () => {
  // Mock the useQuery hook to simulate loading state
  jest.mock('react-query', () => ({
    ...jest.requireActual('react-query'),
    useQuery: () => ({
      isLoading: true,
      error: false,
      data: null,
    }),
  }));

  return <App />;
};

export const ErrorState = () => {
  // Mock the useQuery hook to simulate error state
  jest.mock('react-query', () => ({
    ...jest.requireActual('react-query'),
    useQuery: () => ({
      isLoading: false,
      error: true,
      data: null,
    }),
  }));

  return <App />;
};

export const DataLoadedState = () => {
  // Mock the useQuery hook to simulate loaded data state
  jest.mock('react-query', () => ({
    ...jest.requireActual('react-query'),
    useQuery: () => ({
      isLoading: false,
      error: false,
      data: { name: 'Test User' },
    }),
  }));

  return <App />;
};