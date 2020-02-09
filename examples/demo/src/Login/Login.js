import React from 'react';
import axaIcon from '@axa-fr/react-toolkit-core/dist/assets/logo-axa.svg';
import { TextInput, Button } from '@axa-fr/react-toolkit-all';
import './Login.scss';
import { LOGIN, PASSWORD } from './constants';

const New = ({ fields, onChange, hasSubmit, onSubmit }) => (
  <form name="myform" className="af-form af-form--login">
    <article className="af-panel af-panel--login">
      <img className="af-icon-login" src={axaIcon} alt="Axa Icon" />
      <TextInput
        label="Identifiant"
        onChange={onChange}
        classNameContainerLabel="col-md-12"
        classNameContainerInput="col-md-12"
        placeholder="N° Client Banque ou adresse e-mail;"
        forceDisplayMessage={hasSubmit}
        messageType="error"
        {...fields[LOGIN]}
      />
      <TextInput
        label="Code confidentiel"
        onChange={onChange}
        classNameContainerLabel="col-md-12"
        classNameContainerInput="col-md-12"
        forceDisplayMessage={hasSubmit}
        messageType="error"
        {...fields[PASSWORD]}
      />
      <Button classModifier="connect-user" id="connect" onClick={onSubmit}>
        <span className="af-btn-text">Me connecter</span>
      </Button>
      <Button classModifier="new-user" id="new" onClick={onSubmit}>
        <span className="af-btn-text">Créer un espace client</span>
      </Button>
      <ul className="af-links">
        <li className="af-links-item">
          <a className="af-link" href="/">
            Faire opposition
          </a>
        </li>
        <li className="af-links-item">
          <a className="af-link" href="/">
            Besoin d'aide pour me connecter
          </a>
        </li>
        <li className="af-links-item">
          <a className="af-link" href="/">
            Sécurité bancaire
          </a>
          |
          <a className="af-link" href="/">
            Mentions légales
          </a>
        </li>
      </ul>
    </article>
  </form>
);

export default New;
