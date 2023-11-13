
import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputSearch } from '../../../src/location/components/search/InputSearch';


describe('InputSearch component', () => {

    test('Renders the InputSearch correctly', () => {
        const value = 'Test value';
        const setValue = jest.fn();
        render(<InputSearch value={value} setValue={setValue} />);
        const input = screen.getByRole('textbox') as HTMLInputElement;
        expect(input).toBeTruthy();
        expect(input.value).toEqual(value);
      });


});