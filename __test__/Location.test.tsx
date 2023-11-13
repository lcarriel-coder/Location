
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../src/location/components/header/Header';



describe('Location component', () => {


    test('App without crashing', () => {
        render(<Header />);
        expect(screen.getByText(/where are you located?/i)).toBeTruthy();
    });


 
});