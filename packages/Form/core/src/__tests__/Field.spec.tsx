import React from 'react';
import { render } from '@testing-library/react';
import Field from '../Field';
import HelpMessage from '../HelpMessage';
import FieldInput from '../FieldInput';

const defaultProps = {
  children: '',
  label: 'my label',
};

describe('<Field>', () => {
  it('Render <Field/> when is not visible', () => {
    const { asFragment, queryByText } = render(
      <Field {...defaultProps} isVisible={false} />
    );
    expect(queryByText('my label')).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Render <Field/> when is visible', () => {
    const { asFragment, getByText } = render(<Field {...defaultProps} />);
    expect(getByText('my label')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Render <Field/> when have message and forceDisplayMessage equal true', () => {
    const { asFragment, getByText } = render(
      <Field {...defaultProps} message="error message" forceDisplayMessage />
    );
    expect(getByText('error message')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Render <Field/> when have children HelpMessage', () => {
    const { asFragment, getByText } = render(
      <Field {...defaultProps}>
        <HelpMessage message="Want help ?" />
      </Field>
    );
    expect(getByText('Want help ?')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Render <Field/> when have children HelpMessage and have message and forceDisplayMessage equal true', () => {
    const { asFragment, getByText, queryByText } = render(
      <Field {...defaultProps} message="error message" forceDisplayMessage>
        <HelpMessage message="Want help ?" />
      </Field>
    );
    expect(getByText('error message')).toBeInTheDocument();
    expect(queryByText('Want help ?')).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Render <Field/> when have children complete example without error message', () => {
    const EnhancedInput = () => <input type="text" name="name" id="id" />;
    const { asFragment, getByText } = render(
      <Field {...defaultProps}>
        <FieldInput className="af-form__field">
          <EnhancedInput />
        </FieldInput>
        <HelpMessage message="Want help ?" />
      </Field>
    );
    expect(getByText('Want help ?')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Render <Field/> when have children complete example with error message', () => {
    const EnhancedInput = ({ classModifier = '' }) => (
      <input
        type="text"
        name="name"
        id="id"
        className={`ìnput--${classModifier}`}
      />
    );
    const { asFragment, getByText, queryByText, container } = render(
      <Field {...defaultProps} message="error message" forceDisplayMessage>
        <FieldInput className="af-form__field">
          <EnhancedInput classModifier="error" />
        </FieldInput>
        <HelpMessage message="Want help ?" />
      </Field>
    );

    expect(
      container.querySelector('.af-form__field--error')
    ).toBeInTheDocument();
    expect(container.querySelector('.ìnput--error')).toBeInTheDocument();
    expect(
      container.querySelector('.af-form__message--error')
    ).toBeInTheDocument();
    expect(container.querySelector('.af-form__error-text')).toBeInTheDocument();
    expect(getByText('error message')).toBeInTheDocument();
    expect(queryByText('Want help ?')).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
