import React from 'react';
import { render, screen } from '@testing-library/react';
import { ItemData } from '../../../src/location/components/search/ItemData';
import { useSearch } from '../../../src/hooks/useSearch';
import { useUiStore } from '../../../src/hooks/useUiStore';
import { Suggestion } from 'use-places-autocomplete';

// Mock the useSearch and useUiStore modules
jest.mock('../../../src/hooks/useSearch', () => {
  const originalModule = jest.requireActual('../../../src/hooks/useSearch');
  const useSearchMock = jest.fn().mockReturnValue({
    onSearchPlaceZip: jest.fn().mockResolvedValue(true),
  });
  return {
    ...originalModule,
    useSearch: useSearchMock,
  };
});

jest.mock('../../../src/hooks/useUiStore', () => {
  const originalModule = jest.requireActual('../../../src/hooks/useUiStore');
  const useUiStoreMock = jest.fn().mockReturnValue({
    openDateModal: jest.fn(),
  });
  return {
    ...originalModule,
    useUiStore: useUiStoreMock,
  };
});

describe('ItemData component', () => {
  test('renders the suggestion correctly', async () => {
    const suggestion = {
      place_id: '1234567890',
      description: 'Test suggestion 1',
      structured_formatting: {
        main_text: 'Test suggestion 1',
        secondary_text: 'Test secondary text',
      },
    } as Suggestion;

    render(<ItemData suggetion={suggestion} />);

    const suggestionElement = screen.getByText(suggestion.structured_formatting.main_text);
    expect(suggestionElement).toBeTruthy();
    
  
  });
});