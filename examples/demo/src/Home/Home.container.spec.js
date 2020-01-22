
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, waitForElement, getByText } from '@testing-library/react';
import { HomeContainer } from './Home.container';
import {BrowserRouter as Router} from "react-router-dom";

const fetch = () => Promise.resolve([{
        id: "0001",
        firstname: "Olivier",
        lastname: "Youf",
        type: "auto",
        agent: "Guillaume Chervet",
        birthdate: "02/03/1984",
        begin: "04/04/2011"
}]);

describe('Home.container', () => {

  it('HomeContainer render correctly', async () => {
    const { asFragment, getByText } = render(<Router><HomeContainer fetch={fetch} /></Router>);
    const messageEl = await waitForElement(() => getByText('Olivier Youf'));
    expect(messageEl).toHaveTextContent(
      'Olivier Youf'
    );
    expect(asFragment()).toMatchSnapshot();
  });

});

