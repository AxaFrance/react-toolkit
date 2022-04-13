import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../Loader';
import LoaderModes from '../LoaderModes';

describe('<Loader>', () => {
  it.each`
    mode                 | message                  | isMessageVisible | isSpinnerVisible
    ${LoaderModes.get}   | ${''}                    | ${true}          | ${true}
    ${LoaderModes.none}  | ${'Chargement en cours'} | ${false}         | ${false}
    ${LoaderModes.error} | ${''}                    | ${true}          | ${false}
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
      isMessageVisible
        ? expect(messageLoader.length).toBe(1)
        : expect(messageLoader.length).toBe(0);

      expect(queryByText('Title Child')).not.toBeNull();

      const animation = document.getElementsByClassName(
        'af-spinner__animation'
      );
      isSpinnerVisible
        ? expect(animation.length).toBe(1)
        : expect(animation.length).toBe(0);
    }
  );
});
