# `@axa-fr/react-toolkit-title`

## Default

### Installation

```shell script
npm i @axa-fr/react-toolkit-title
```

### Import

```javascript
import Title from '@axa-fr/react-toolkit-title';
import '@axa-fr/react-toolkit-title/dist/af-title.css';
```

### Use

```javascript
const TitleDefault = () => (
  <Title classModifier="" className="">
    Sample Title
  </Title>
);
export default TitleDefault;
```

By default, using this component produces a level 2 title (level 1 is restricted to the title bar of the page). If you want another title level you can specify the `heading` property with the value `h2`, `h3`, `h4`. For now `h5` and `h6` are not supported.

```javascript
const TitleDefault = () => <Title heading="h3">Sample Title</Title>;
export default TitleDefault;
```
