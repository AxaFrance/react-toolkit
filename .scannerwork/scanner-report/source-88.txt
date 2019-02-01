import React from 'react';
import PropTypes from 'prop-types';
import TabsStateless from './TabsStateless';
import Title from './Tabs.Title';
import Tab from './Tab';

const propTypes = {
  onChange: PropTypes.func,
};

const defaultProps = {
  onChange: null,
};

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  onchange = index => {
    this.setState({ activeIndex: index });
    const { onChange } = this.props;
    if (onChange) {
      onChange(index);
    }
  };

  render() {
    const { activeIndex } = this.state;
    const { children } = this.props;
    return (
      <TabsStateless activeIndex={activeIndex} onChange={this.onchange}>
        {children.map(tab => tab)}
      </TabsStateless>
    );
  }
}

Tabs.Tab = Tab;
Tabs.Title = Title;
Tabs.defaultProps = defaultProps;
Tabs.propTypes = propTypes;

export default Tabs;
