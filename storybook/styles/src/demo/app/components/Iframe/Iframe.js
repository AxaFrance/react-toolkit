/* eslint arrow-parens:0 */
import React from 'react';
import Frame from 'react-frame-component';
import classNames from 'classnames';
import iconsCss from '@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';
import './Iframe.scss';

const fontStyle = `
@font-face {
  font-family: icons;
  src: url(fonts/icons/icons.eot);
  src: url(fonts/icons/icons.eot) format("embedded-opentype"), url(assets/fonts/icons/icons.woff) format("woff"), url(assets/fonts/icons/icons.ttf) format("truetype"), url(assets/fonts/icons/icons.svg) format("svg");
  font-weight: 400;
  font-style: normal
}
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: local('Source Sans Pro'), local('SourceSansPro-Regular'), url(assets/fonts/typo/SourceSansPro-Regular.otf.woff) format('woff');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}

@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  src: local('Source Sans Pro Semibold'), local('SourceSansPro-Semibold'), url(assets/fonts/typo/SourceSansPro-Semibold.otf.woff) format('woff');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}

@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(assets/fonts/typo/SourceSansPro-Bold.otf.woff) format('woff');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}
`;

const Iframe = props => {
  const styles = [fontStyle, iconsCss]
    .concat(props.css)
    .map(style => `<style>${style}</style>`)
    .join('');
  return (
    <div className="iframe-wrapper">
      <Frame
        height={props.height}
        style={props.style}
        className={classNames('iframe', props.className)}
        initialContent={`
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                html {
                  background-color: #eee;
                  background-image: linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 2px, transparent 2px), linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px);
                  background-size: 10px 10px, 10px 10px, 20px 20px, 20px 20px;
                  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
                }
                body{margin:0;background-color: red;}
                .af-form__group, .af-demo-iframe {
                  width: 100%;
                }
              </style>
              <link href="assets/react-datepicker.css" rel="stylesheet" type="text/css" charset="UTF-8" />
              ${styles}
            </head>
            <body>
              <div id="mountHere"></div>
            </body>
          </html>
        `}
      >
        <div dangerouslySetInnerHTML={{ __html: props.template() }} />
        {props.children}
      </Frame>
    </div>
  );
};

export default Iframe;
