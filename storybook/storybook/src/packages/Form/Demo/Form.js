import React from 'react';
import { TextInput } from '@axa-fr/react-toolkit-form-input-text';
import { DateInput } from '@axa-fr/react-toolkit-form-input-date';
import { FileInput } from '@axa-fr/react-toolkit-form-input-file';
import HelpButton from '@axa-fr/react-toolkit-help';
import { SelectInput } from '@axa-fr/react-toolkit-form-input-select';
import { Summary } from '@axa-fr/react-toolkit-form-summary';

const Form = ({ handleChange, handleSubmit, form }) => (
  <form className="form-horizontal" onSubmit={handleSubmit}>
    <div className="card form-header">
      <h1>Place</h1>
      <Summary
        messages={form.errorMessages}
        isVisible={form.hasFormSubmittedOnce}
        classModifier="error"
      />
      <h3>Characteristics</h3>
      <TextInput
        label="Place name *"
        name="placeName"
        onChange={handleChange}
        helpMessage="Enter the place name, ex : Webcenter"
        {...form.placeName}>
        <HelpButton>
          Paris est la capitale de la France. Elle se situe au cœur d&apos;un
          vaste bassin sédimentaire aux sols fertiles et au climat tempéré, le
          bassin parisien, sur une boucle de la Seine, entre les confluents de
          celle-ci avec la Marne et l&apos;Oise. Ses habitants s’appellent les
          Parisiens.
        </HelpButton>
      </TextInput>
      <TextInput
        label="Author *"
        name="author"
        onChange={handleChange}
        helpMessage="Enter the author name, ex : Steve"
        {...form.author}
      />
      <DateInput
        label="Date *"
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
      <h3>Image</h3>
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
        <div className="col-md-2" />
        <div className="col-md-10">
          <button
            className="btn btn-primary float-right float-md-left"
            name="submit"
            type="submit">
            Share
          </button>
        </div>
      </div>
    </div>
  </form>
);

export default Form;
