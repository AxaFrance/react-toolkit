import React from 'react';
import classnames from 'classnames';

class Button extends React.Component {
  onClick = (e) => {
    const { onClick, path } = this.props;
    if (onClick) {
      e.preventDefault();
      onClick({ path });
    }
  };

  render() {
    const { name } = this.props;
    return (
      <button
        type="button"
        onClick={this.onClick}
        className="af-languageSelection__item-button">
        {name}
      </button>
    );
  }
}

const LanguageSelection = ({ onClick, languages, currentLanguage }) => (
  <div className="af-languageSelection">
    <h3 className="af-languageSelection__title"> Languages: </h3>
    <ul className="af-languageSelection__list">
      {languages.map((language) => (
        <li
          key={language.value}
          className={classnames({
            'af-languageSelection__item': true,
            'af-languageSelection__item--active':
              currentLanguage === language.value && true,
          })}>
          <Button
            name={language.name}
            onClick={onClick}
            path={language.value}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default LanguageSelection;
