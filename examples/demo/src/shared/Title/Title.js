import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './Title.scss';

const TitleBar = ({ onClick, children, className }) => (
  <div className={className}>
    <div className="container-fluid container af-title-bar__wrapper">
      {onClick && (
        <a title="Retour à l'accueil" className="btn af-btn--circle" onClick={onClick}>
          <i className="glyphicon glyphicon-home" />
        </a>
      )}
      <h1 className="af-title-bar__title">{children}</h1>
    </div>
  </div>
);

TitleBar.defaultProps = {
  backHome: false,
  children: null,
  className: '',
};

TitleBar.propTypes = {
  backHome: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
};

export default TitleBar;
