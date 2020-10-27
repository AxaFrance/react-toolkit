import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ClassManager } from '@axa-fr/react-toolkit-core';
import { withInput } from '@axa-fr/react-toolkit-form-core';
import CardGroupStateless from './CardGroupStateless';
import cardType from './Constants';

const defaultClassName = 'af-rccard-group';

const CardGroup = ({
  type,
  title,
  children,
  onChange,
  className,
  classModifier,
  name,
  values,
  value,
}) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  let isActive = false;

  if (type === cardType.CHECKBOX) {
    isActive = values ? values.length > 0 : false;
  } else {
    isActive = value !== 'undefined' && value !== null;
  }

  return (
    <CardGroupStateless
      type={type}
      title={title}
      name={name}
      onChange={onChange}
      values={values}
      value={value}
      propClassName={classNames(componentClassName, {
        'af-rccard-group--active': isActive,
      })}>
      {children}
    </CardGroupStateless>
  );
};

const propTypes = {
  values: PropTypes.array,
  value: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  title: PropTypes.node,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
const defaultProps = {
  values: null,
  value: null,
  className: defaultClassName,
  classModifier: '',
  name: 'defaultName',
};

const handlers = {
  onChange: (props) => (e) => {
    const { type, values, name, id, onChange } = props;
    if (type === cardType.CHECKBOX) {
      let newValues = [];
      if (values) {
        newValues = [...values];
      }

      const index = newValues.indexOf(e.value);
      const checked = index <= -1;
      if (checked) {
        newValues.push(e.value);
      } else {
        newValues.splice(index, 1);
      }
      onChange({
        values: newValues,
        target: {
          value: e.value,
          checked,
        },
        name,
        id,
      });
    } else {
      onChange({ value: e.value, name, id });
    }
  },
};

const EnhancedComponent = withInput(
  defaultClassName,
  propTypes,
  defaultProps,
  handlers
)(CardGroup);

EnhancedComponent.displayName = 'CardGroup';

export default EnhancedComponent;
