import React, { MouseEvent } from 'react';

const icon: { [key: string]: string } = {
  facebook: 'facebook',
  linkedin: 'linkedin-logo',
  youtube: 'youtube-symbol',
  instagram: 'instagram',
  twitter: 'twitter-logo-silhouette',
};

type Props = {
  list: { [key: string]: string };
  onClick?: (action: {
    path: string;
    event: MouseEvent<HTMLAnchorElement>;
  }) => void;
};

const SocialNetwork = ({ list, onClick }: Props) => (
  <ul className="social-network__list">
    {Object.entries(list).map(([key, value]) => (
      <li className="social-network__item">
        <a
          href={value}
          onClick={(event) => onClick && onClick({ path: key, event })}
          className="social-network__link"
          rel="noreferrer"
          target="_blank">
          <i
            className={`social-network__icon glyphicon glyphicon-${icon[key]}`}
          />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialNetwork;
