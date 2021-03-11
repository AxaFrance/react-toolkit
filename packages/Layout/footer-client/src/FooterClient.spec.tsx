import React, { MouseEvent } from 'react';
import { render } from '@testing-library/react';
import {
  LanguageSelection,
  FooterClient,
  FooterClientList,
  FooterClientItem,
  SocialNetwork,
} from './index';

describe('<FooterClient>', () => {
  it('renders FooterClient correctly', () => {
    const onClick = (e: {
      path: string;
      event: MouseEvent<HTMLAnchorElement>;
    }) => {
      e.event.preventDefault();
    };

    const languages = [
      {
        name: 'English',
        value: 'en',
      },
      {
        name: 'Chinese',
        value: 'cn',
      },
    ];

    const currentLanguage = languages[0].value;

    const socialNetworkList = {
      facebook: '#',
      linkedin: '#',
      youtube: '#',
      instagram: '#',
      twitter: '#',
    };

    const { asFragment } = render(
      <FooterClient
        bottomComponent={
          <LanguageSelection
            onClick={() => onClick}
            languages={languages}
            currentLanguage={currentLanguage}
          />
        }
        copyright="Policy Privacy © 2016 AXA All Rights Reserved">
        <FooterClientList title="title" key="title">
          <FooterClientItem onClick={onClick} path="/3" key="/3">
            text
          </FooterClientItem>
          ))
        </FooterClientList>
        ))
        <FooterClientList title="Follow AXA">
          <SocialNetwork onClick={onClick} list={socialNetworkList} />
        </FooterClientList>
      </FooterClient>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
