import React from 'react';
import Title from 'shared/Title';
import Stepper from 'shared/Stepper';
import {
  TextInput,
  SelectInput,
  DateInput,
  Button,
} from '@axa-fr/react-toolkit-all';
import './New.scss';
import {
  FIRSTNAME,
  LASTNAME,
  AGENT,
  CONTRACT,
  BIRTHDATE,
  BEGIN,
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
              label="Nom *"
              onChange={onChange}
              helpMessage="Ex : Meunier"
              classNameContainerLabel="col-md-4"
              classNameContainerInput="col-md-8"
              forceDisplayMessage={hasSubmit}
              messageType="error"
              {...fields[LASTNAME]}
            />
            <SelectInput
              label="Votre agent *"
              name={AGENT}
              id={AGENT}
              helpMessage="Ex : Guillaume Chervet"
              onChange={onChange}
              options={[
                { value: 'Guillaume Chervet', label: 'Guillaume Chervet' },
                { value: 'Cyril Lakech', label: 'Cyril Lakech' },
              ]}
              classNameContainerLabel="col-md-4"
              classNameContainerInput="col-md-8"
              forceDisplayMessage={hasSubmit}
              messageType="error"
              {...fields[AGENT]}
            />
            <TextInput
              label="Numéro de contrat *"
              onChange={onChange}
              helpMessage="Ex : 00123456"
              classNameContainerLabel="col-md-4"
              classNameContainerInput="col-md-8"
              forceDisplayMessage={hasSubmit}
              messageType="error"
              {...fields[CONTRACT]}
            />
          </section>
          <section className="af-panel__content">
            <TextInput
              label="Prénom *"
              onChange={onChange}
              helpMessage="Ex : Johnathan"
              classNameContainerLabel="col-md-4"
              classNameContainerInput="col-md-8"
              forceDisplayMessage={hasSubmit}
              messageType="error"
              {...fields[FIRSTNAME]}
            />
            <DateInput
              label="Date de naissance *"
              locale="fr-fr"
              onChange={onChange}
              helpMessage="jj/mm/aaaa"
              classNameContainerLabel="col-md-4"
              classNameContainerInput="col-md-8"
              forceDisplayMessage={hasSubmit}
              messageType="error"
              {...fields[BIRTHDATE]}
            />
            <DateInput
              label="Date d'entrée *"
              locale="fr-fr"
              onChange={onChange}
              helpMessage="jj/mm/aaaa"
              classNameContainerLabel="col-md-4"
              classNameContainerInput="col-md-8"
              forceDisplayMessage={hasSubmit}
              {...fields[BEGIN]}
              messageType="error"
            />
          </section>
        </article>
        <Button
          classModifier="hasiconRight confirm"
          id="myForm"
          onClick={onSubmit}>
          <span className="af-btn-text">Valider</span>
          <i className="glyphicon glyphicon-arrowthin-right" />
        </Button>
      </form>
    </div>
  </>
);

export default New;
