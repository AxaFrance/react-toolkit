import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../Loader';
import LoaderModes from '../LoaderModes';

describe('<Loader>', () => {
  it.each`
    mode                 | message                                   | isMessageVisible | isSpinnerVisible
    ${LoaderModes.get}   | ${'Chargement des informations en cours'} | ${true}          | ${true}
    ${LoaderModes.none}  | ${'Chargement en cours'}                  | ${false}         | ${false}
    ${LoaderModes.error} | ${'Erreur de chargement'}                 | ${true}          | ${false}
  `(
    'renders Loader with mode : $mode and message : $message and isMessageVisible is $isMessageVisible and isSpinnerVisible is $isSpinnerVisible',
    ({ mode, message, isMessageVisible, isSpinnerVisible }) => {
      const { queryByText } = render(
        <Loader mode={mode} text={message}>
          <div>
            <h1>Title Child</h1>
            <span>Here your child component</span>
          </div>
        </Loader>
      );
      const messageLoader = document.getElementsByClassName(
        'af-spinner__caption'
      );
      if (isMessageVisible) {
        expect(messageLoader.length).toBe(1);
        expect(queryByText(message)).toBeInTheDocument();
      } else {
        expect(messageLoader.length).toBe(0);
        expect(queryByText(message)).not.toBeInTheDocument();
      }

      expect(queryByText('Title Child')).toBeInTheDocument();

      const animation = document.getElementsByClassName(
        'af-spinner__animation'
      );
      isSpinnerVisible
        ? expect(animation.length).toBe(1)
        : expect(animation.length).toBe(0);
    }
  );

  it.each`
    mode                  | isElementBusy | message
    ${LoaderModes.get}    | ${true}       | ${'Chargement en cours'}
    ${LoaderModes.post}   | ${true}       | ${'Sauvegarde en cours'}
    ${LoaderModes.delete} | ${true}       | ${'Suppression en cours'}
    ${LoaderModes.update} | ${true}       | ${'Mise à jour en cours'}
    ${LoaderModes.error}  | ${false}      | ${'Une erreur est survenue lors du chargement du composant'}
    ${LoaderModes.none}   | ${false}      | ${''}
  `(
    'renders Loader with mode : $mode, aria-busy should be set to $isElementBusy',
    ({ mode, isElementBusy, message }) => {
      const { queryByRole, queryByText } = render(
        <Loader mode={mode}>
          <div>
            <h1>Title Child</h1>
            <span>Here your child component</span>
          </div>
        </Loader>
      );
      const loader = queryByRole('alert');

      if (loader !== null) {
        expect(queryByText(message)).toBeInTheDocument();
        expect(loader.getAttribute('aria-busy')).toBe(isElementBusy.toString());
      }
    }
  );
});
