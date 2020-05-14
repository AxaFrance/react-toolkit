import React, { Fragment } from 'react';
import { TextInput } from '@axa-fr/react-toolkit-form-input-text';
import { DateInput } from '@axa-fr/react-toolkit-form-input-date';
import { FileInput } from '@axa-fr/react-toolkit-form-input-file';
import HelpButton from '@axa-fr/react-toolkit-help';
import { SelectInput } from '@axa-fr/react-toolkit-form-input-select';
import { Summary } from '@axa-fr/react-toolkit-form-summary';
import Button from '@axa-fr/react-toolkit-button';
import Title from '@axa-fr/react-toolkit-title';

const Form = ({ handleChange, handleSubmit, form }) => (
  <Fragment>
    <Title>Demo Place form</Title>
    <form className="af-form" onSubmit={handleSubmit}>
      <Summary
        messages={form.errorMessages}
        isVisible={form.hasFormSubmittedOnce}
        classModifier="error"
      />
      <h3 className="af-subtitle">Informations</h3>
      <TextInput
        label="Place name"
        classModifier="required"
        name="placeName"
        onChange={handleChange}
        helpMessage="Enter the place name, ex : Webcenter"
        {...form.placeName}>
        <HelpButton classModifier="small" mode="hover">
          Paris est la capitale de la France. Elle se situe au cœur d&apos;un
          vaste bassin sédimentaire aux sols fertiles et au climat tempéré, le
          bassin parisien, sur une boucle de la Seine, entre les confluents de
          celle-ci avec la Marne et l&apos;Oise. Ses habitants s’appellent les
          Parisiens.
        </HelpButton>
      </TextInput>
      <TextInput
        label="Author"
        classModifier="required"
        name="author"
        onChange={handleChange}
        helpMessage="Enter the author name, ex : Steve"
        {...form.author}
      />
      <DateInput
        label="Date"
        classModifier="required"
        name="date"
        onChange={handleChange}
        helpMessage="Enter the actuel date"
        {...form.date}
      />
      <SelectInput
        name="placeType"
        label="Place type"
        onChange={handleChange}
        {...form.placeType}
      />
      <h3 className="af-subtitle">Image</h3>

      <FileInput
        label="Upload image"
        accept="image/jpeg, image/png"
        onChange={handleChange}
        name="files"
        {...form.files}
      />

      <TextInput
        label="Image title *"
        name="imageTitle"
        onChange={handleChange}
        helpMessage="Enter the image title, ex : Sunset"
        {...form.imageTitle}
      />
      <div className="row">
        <div className="col-md-10 offset-md-2">
          <Button
            type="submit"
            name="submit"
            id="next"
            classModifier="hasiconRight">
            <span className="af-btn__text">Share</span>
            <i className="glyphicon glyphicon-arrowthin-right" />
          </Button>
        </div>
      </div>
    </form>
  </Fragment>
);

export default Form;
