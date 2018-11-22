import React from 'react';
import Title from '../shared/Title';
import Stepper from '../shared/Stepper';
import {
  TextInput,
  SelectInput,
  DateInput,
  Button
} from '@axa-fr/react-toolkit-all';
import './New.scss';
import {
  FIRSTNAME,
  LASTNAME,
  AGENT,
  CONTRACT,
  BIRTHDATE,
  BEGIN
} from './constants';

const New = ({ fields, onChange, hasSubmit, onSubmit }) => (
  <>
    <Title backHome classModifier="hasstepper">
      Nouveau devis
    </Title>
    <Stepper />
    <div className="af-form">
      <form className="container" name="myform">
        <h1 className="af-title--content">Nouveau devis</h1>
        <article className="af-panel af-panel--new">
          <section className="af-panel__content">
            <TextInput
              id={LASTNAME}
              label="Nom *"
              name={LASTNAME}
              value={fields[LASTNAME].value}
              onChange={onChange}
              helpMessage="Ex : Meunier"
              classNameContainerLabel="col-md-4"
              classNameContainerInput="col-md-8"
              forceDisplayMessage={hasSubmit}
              message={fields[LASTNAME].errorMessage}
              messageType="error"
            />
            <SelectInput
              label="Votre agent *"
              name={AGENT}
              id={AGENT}
              value={fields[AGENT].value}
              helpMessage="Ex : Guillaume Chervet"
              onChange={onChange}
              options={[
                { value: 'Guillaume Chervet', label: 'Guillaume Chervet' },
                { value: 'Cyril Lakech', label: 'Cyril Lakech' }
              ]}
              classNameContainerLabel="col-md-4"
              classNameContainerInput="col-md-8"
              forceDisplayMessage={hasSubmit}
              message={fields[AGENT].errorMessage}
              messageType="error"
            />
            <TextInput
              id={CONTRACT}
              label="Numéro de contrat *"
              name={CONTRACT}
              value={fields[CONTRACT].value}
              onChange={onChange}
              helpMessage="Ex : 00123456"
              classNameContainerLabel="col-md-4"
              classNameContainerInput="col-md-8"
              forceDisplayMessage={hasSubmit}
              message={fields[CONTRACT].errorMessage}
              messageType="error"
            />
          </section>
          <section className="af-panel__content">
            <TextInput
              id={FIRSTNAME}
              label="Prénom *"
              name={FIRSTNAME}
              value={fields[FIRSTNAME].value}
              onChange={onChange}
              helpMessage="Ex : Johnathan"
              classNameContainerLabel="col-md-4"
              classNameContainerInput="col-md-8"
              forceDisplayMessage={hasSubmit}
              message={fields[FIRSTNAME].errorMessage}
              messageType="error"
            />
            <DateInput
              label="Date de naissance *"
              locale="fr-fr"
              name={BIRTHDATE}
              id={BIRTHDATE}
              value={fields[BIRTHDATE].value}
              onChange={onChange}
              helpMessage="jj/mm/aaaa"
              classNameContainerLabel="col-md-4"
              classNameContainerInput="col-md-8"
              forceDisplayMessage={hasSubmit}
              message={fields[BIRTHDATE].errorMessage}
              messageType="error"
            />
            <DateInput
              label="Date d'entrée *"
              name={BEGIN}
              id={BEGIN}
              locale="fr-fr"
              value={fields[BEGIN].value}
              onChange={onChange}
              helpMessage="jj/mm/aaaa"
              classNameContainerLabel="col-md-4"
              classNameContainerInput="col-md-8"
              forceDisplayMessage={hasSubmit}
              message={fields[BEGIN].errorMessage}
              messageType="error"
            />
          </section>
          <Button
            classModifier="hasiconRight confirm"
            id="myForm"
            onClick={onSubmit}
          >
            <span className="af-btn-text">Valider</span>
            <i className="glyphicon glyphicon-arrowthin-right" />
          </Button>
        </article>
      </form>
    </div>
  </>
);

export default New;
