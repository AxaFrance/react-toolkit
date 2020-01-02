import React from 'react';
import Title from 'shared/Title';
import Stepper from 'shared/Stepper';
import './Confirm.scss';

export const Confirm = () => (
  <>
    <Title backHome classModifier="hasstepper">
      Confirmation
    </Title>
    <Stepper activeStep="confirm" />
    <div className="af-confirm">
      <span className="glyphicon glyphicon--ring glyphicon-ok" />
      <h2 className="af-confirm__message">Demande de devis ajoutée !</h2>
    </div>
  </>
);

export default Confirm;
