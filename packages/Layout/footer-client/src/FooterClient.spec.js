import React from 'react';
import renderer from 'react-test-renderer';
import {
  LanguageSelection,
  FooterClient,
  FooterClientList,
  FooterClientItem,
  SocialNetwork,
} from './index';

describe('<FooterClient>', () => {
  it('renders FooterClient correctly', () => {
    const onClick = (e) => {
      e.event.preventDefault();
      e.event = {};
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

    const currentLanguage = 'en';

    const ComponentLanguageSelection = () => (
      <LanguageSelection
        onClick={onClick}
        languages={languages}
        currentLanguage={currentLanguage}
      />
    );

    const socialNetworkList = {
      facebook: '#',
      linkedin: '#',
      youtube: '#',
      instagram: '#',
      twitter: '#',
    };

    const tree = renderer
      .create(
        <FooterClient
          bottomComponent={ComponentLanguageSelection()}
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
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
