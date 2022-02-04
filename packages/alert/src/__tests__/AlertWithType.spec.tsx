import React from 'react';
import { render } from '@testing-library/react';
import AlertWithType, { TypeIcons, setWithProps } from '../AlertWithType';

describe('<AlertWithType>', () => {
  describe('typePropsToCoreProps', () => {
    describe(`classModifier is undefined`, () => {
      it('should set classModifier to type', () => {
        const result = setWithProps({ title: 'title', type: 'danger' });
        expect(result.classModifier).toBe('danger');
      });
    });
    describe(`classModifier is 'small'`, () => {
      it('should concat type to classModifier', () => {
        const result = setWithProps({
          title: 'title',
          classModifier: 'small',
          type: 'danger',
        });
        expect(result.classModifier).toBe('small danger');
      });
    });
    describe(`icon is undefined`, () => {
      it('should set icon according to type', () => {
        const type = 'danger';
        const result = setWithProps({ title: 'title', type });
        expect(result.iconClassName).toBe(TypeIcons[type]);
      });
    });
  });
  it('should render an alert of type error with an error style and exclamation-sign icon', () => {
    const { asFragment } = render(
      <AlertWithType
        type="error"
        title="Les caves et les garages situés dans le même corps de bâtiment que le logement assuré sont garantis d'office"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render an alert of type error with an error style and ban-circle icon', () => {
    const { asFragment } = render(
      <AlertWithType
        type="error"
        iconClassName="glyphicon glyphicon-ban-circle"
        title="Les caves et les garages situés dans le même corps de bâtiment que le logement assuré sont garantis d'office"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
