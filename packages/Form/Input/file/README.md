# `@axa-fr/react-toolkit-form-input-file`

1. [File](#file)
2. [File with values](#file-with-values)
3. [File with errors](#file-with-errors)
4. [FileInput](#fileinput)
   1. [FileInput Required](#fileinput-required)

## File

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-file
npm i @axa-fr/react-toolkit-button
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { File } from '@axa-fr/react-toolkit-form-input-file';
import '@axa-fr/react-toolkit-form-input-file/dist/af-file.css';
import '@axa-fr/react-toolkit-button/dist/af-button.css';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const FileInput = () => (
  <form className="af-form" name="myform">
    <div className="col-md-4">
      <File
        id="uniqueid"
        name="placeImage"
        accept="image/jpeg, image/png, application/*"
        onChange={(e) => {
          console.log(e);
        }}
        label="Browse"
        icon="open"
      />
    </div>
  </form>
);
export default FileInput;
```

## File with values

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-file
npm i @axa-fr/react-toolkit-button
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { File, FileTable } from '@axa-fr/react-toolkit-form-input-file';
import '@axa-fr/react-toolkit-form-input-file/dist/af-file.css';
import '@axa-fr/react-toolkit-button/dist/af-button.css';
import { HelpMessage } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const values = [
  {
    id: '000003',
    file: {
      name: 'error-file.jpg',
      size: 100,
      preview: 'https://via.placeholder.com/150Cx50',
      type: 'image',
    },
  },
  {
    id: '000004',
    file: {
      name: 'fichier.png',
      size: 100,
      preview: 'https://via.placeholder.com/150Cx50',
      type: 'image',
    },
  },
  {
    id: '000005',
    file: {
      name: 'fichier.csv',
      size: 100,
      preview: 'https://via.placeholder.com/150Cx50',
    },
  },
];

const FileWithValues = () => (
  <form className="af-form" name="myform">
    <div className="col-md-4">
      <File
        id="uniqueid"
        name="placeImage"
        accept="image/jpeg, image/png, application/*"
        onChange={() => {
          console.log('your function');
        }}
        label="Browse"
        icon="open"
      />
      <FileTable
        errors={[]}
        values={values}
        onClick={(e) => {
          console.log(e);
        }}
      />
      <HelpMessage message="Enter the place name, ex : Webcenter" />
    </div>
  </form>
);
export default FileWithValues;
```

## File with errors

### Installation

```shell script
npm i @axa-fr/react-toolkit-form-input-file
npm i @axa-fr/react-toolkit-button
npm i @axa-fr/react-toolkit-form-core
```

### Import

```javascript
import { File, FileTable } from '@axa-fr/react-toolkit-form-input-file';
import '@axa-fr/react-toolkit-form-input-file/dist/af-file.css';
import '@axa-fr/react-toolkit-button/dist/af-button.css';
import { HelpMessage } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const values = [
  {
    id: '000003',
    file: {
      name: 'error-file.jpg',
      size: 100,
      preview: 'https://via.placeholder.com/150Cx50',
      type: 'image',
    },
  },
  {
    id: '000004',
    file: {
      name: 'fichier.png',
      size: 100,
      preview: 'https://via.placeholder.com/150Cx50',
      type: 'image',
    },
  },
  {
    id: '000005',
    file: {
      name: 'fichier.csv',
      size: 100,
      preview: 'https://via.placeholder.com/150Cx50',
    },
  },
];

let errors = [
  {
    id: '000003',
    file: {
      name: 'error-file.jpg',
      size: 100,
      preview: 'https://via.placeholder.com/150Cx50',
    },
  },
  {
    id: '000004',
    file: {
      name: 'fichier.png',
      size: 100,
      preview: 'https://via.placeholder.com/150Cx50',
    },
  },
  {
    id: '000005',
    file: {
      name: 'fichier.csv',
      size: 100,
      preview: 'https://via.placeholder.com/150Cx50',
    },
  },
];

const FileWithErrors = () => (
  <form className="af-form" name="myform">
    <div className="col-md-4">
      <File
        id="uniqueid"
        name="placeImage"
        accept="image/jpeg, image/png, application/*"
        multiple={false}
        label="Browse"
        icon="open"
        onChange={(e) => e}
      />
      <HelpMessage message="Enter the place name, ex : Webcenter" />
      <FileTable
        errors={errors}
        values={values}
        onClick={(e) => {
          console.log(e);
        }}
      />
    </div>
  </form>
);
export default FileWithErrors;
```

## FileInput

### Import

```javascript
import { FileInput } from '@axa-fr/react-toolkit-form-input-file';
import '@axa-fr/react-toolkit-form-input-file/dist/af-file.css';
import '@axa-fr/react-toolkit-button/dist/af-button.css';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import '@axa-fr/react-toolkit-form-core/dist/af-form.css';
```

### Use

```javascript
const FileInputReturn = () => (
  <FileInput
    id="uniqueid"
    label="Picture"
    name="placeImage"
    accept="image/jpeg, image/png, application/*"
    onChange={(e) => {
      console.log(e);
    }}
    helpMessage="Take a photo af a place"
    messageType={MessageTypes.error}
  />
);
export default FileInputReturn;
```

### FileInput Required

To achieve FileInput Required, you need to add this :

```javascript
classModifier = 'required';
```

to the **FileInput** component
