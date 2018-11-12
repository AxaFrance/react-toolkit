import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Code from './../../../../components/Code/Code';
import Iframe from './../../../../components/Iframe/Iframe';
import fileInput from './input-file.pug';
import axaComponents from './axa-components.scss';

const demos = [{ title: 'File input', cmpt: fileInput }];
const styles = [axaComponents];

class ListFiles extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = (element) => {
      this.textInput = element;
    };
  }
  handleClick(index) {
    this.props.onClick(index);
  }
  render() {
    const isGoodFile = RegExp(this.props.regexFiles);
    return this.props.list ? (
      <ul className="af-form__filebrowser__listFiles">
        {Array.from(this.props.list).map((file, index) => (
          <li key={`af-form__filebrowser__file${index}`} className="af-form__filebrowser__file">
            <span
              className={`glyphicon glyphicon${
                isGoodFile.test(file.type) && file.size <= this.props.size ? '-ok' : '-remove'
              }-sign`}
            />
            <span className="af-form__filebrowser__filename">{file.name}</span>
            <a
              className="af-form__filebrowser__filedelete"
              href="#"
              onClick={this.handleClick.bind(this, index)}
              ref={this.setTextInputRef}
            >
              {this.props.listFiles.deletedLabel}
            </a>
          </li>
        ))}
      </ul>
    ) : null;
  }
}

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: null,
    };
  }

  handleChange(e) {
    this.setState({ files: e.target.files });
  }

  handleClick(index) {
    const newArrayFiles = Array.from(this.state.files);
    if (newArrayFiles.length > 0) {
      newArrayFiles.splice(index, 1);
      this.setState({ files: newArrayFiles });
    }
  }

  render() {
    return (
      <div className="af-form__group row">
        <div className="col-md-5">
          <label className="af-form__group-label" htmlFor="filebrowser2">
            Input Filebrowser *
          </label>
        </div>
        <div className="col-md-7">
          <div className="af-form__filebrowser">
            <input
              multiple
              className="af-form__input-filebrowser"
              id="filebrowser2"
              name="filebrowser2[]"
              type="file"
              onChange={this.handleChange.bind(this)}
            />
            <label className="af-form__input-filebrowser-label" htmlFor="filebrowser2">
              <span className="af-form__input-text">{this.props.inputText}</span>
              <span className="af-btn">{this.props.btnText}</span>
            </label>
          </div>
        </div>
        <div className="col-md-5" />
        <div className="col-md-7">
          <ListFiles
            list={this.state.files}
            regexFiles={this.props.regexFiles}
            size={this.props.size}
            onClick={this.handleClick.bind(this)}
            listFiles={this.props.listFiles}
          />
        </div>
      </div>
    );
  }
}

const File = () => (
  <article className="component">
    <h2 className="component__title">File input</h2>
    {demos.map(demo => (
      <div key={demo.title}>
        <h3 className="af-subtitle">{demo.title}</h3>
        <Tabs>
          <TabList>
            <Tab>Démo</Tab>
            <Tab>Code</Tab>
          </TabList>
          <TabPanel>
            <Iframe height="500" css={styles} template={demo.cmpt}>
              <FileUpload
                regexFiles={'image/*'}
                size={1000000}
                multiple
                className={'af-form__filebrowser'}
                inputText={'Choisir un fichier'}
                btnText={'Choisir un fichier'}
                listFiles={{ deletedLabel: 'Supprimer' }}
              />
            </Iframe>
          </TabPanel>
          <TabPanel>
            <Code template={demo.cmpt} />
          </TabPanel>
        </Tabs>
      </div>
    ))}
  </article>
);

export default File;
