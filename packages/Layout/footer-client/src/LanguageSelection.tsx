import React, { MouseEvent } from 'react';

type LanguageSelectionProps = {
  languages: { value: string; name: string }[];
  currentLanguage: string;
  onClick: (action: { path: string }) => void;
};

const onClickHandler = (
  onClick: (action: { path: string }) => void,
  path: string
) => (e: MouseEvent<HTMLButtonElement>) => {
  if (onClick) {
    e.preventDefault();
    onClick({ path });
  }
};

const LanguageSelection = ({
  onClick,
  languages,
  currentLanguage,
}: LanguageSelectionProps) => (
  <div className="af-languageSelection">
    <h3 className="af-languageSelection__title"> Languages: </h3>
    <ul className="af-languageSelection__list">
      {languages.map((language) => (
        <li
          key={language.value}
          className={`af-languageSelection__item ${
            currentLanguage === language.value
              ? 'af-languageSelection__item--active'
              : ''
          }`}>
          <button
            type="button"
            onClick={onClickHandler(onClick, language.value)}
            className="af-languageSelection__item-button">
            {language.name}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default LanguageSelection;
