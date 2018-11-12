/* eslint import/extensions: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import 'github-markdown-css';

const Markdown = props => {
  if (props.data && props.data.length) {
    // eslint-disable-next-line no-underscore-dangle
    const __html = marked(props.data, { gfm: true, tables: true });

    // eslint-disable-next-line react/no-danger
    return <div className="markdown-body" dangerouslySetInnerHTML={{ __html }} />;
  }
  return null;
};

Markdown.propTypes = {
  data: PropTypes.string,
};

Markdown.defaultProps = {
  data: '',
};
export default Markdown;
