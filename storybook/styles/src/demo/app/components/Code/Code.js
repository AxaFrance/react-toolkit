import React from 'react';
import pretty from 'pretty';
import hljs from 'highlightjs';
import ReactDOM from 'react-dom';
import './Code.scss';

class Code extends React.Component {
  componentDidMount() {
    this.highlightCode();
  }
  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    const domNode = ReactDOM.findDOMNode(this);
    const nodes = domNode.querySelectorAll('pre code');
    if (nodes.length > 0) {
      for (let i = 0; i < nodes.length; i += 1) {
        hljs.highlightBlock(nodes[i]);
      }
    }
  }

  render() {
    const { template } = this.props;
    return (
      <div className="code-wrapper">
        <pre className="pre">
          <code className="html">
            {pretty(template())}
          </code>
        </pre>
      </div>
    );
  }
}

export default Code;
