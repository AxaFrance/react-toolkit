# Migration Guide

- ## [From version 1.x to 2.0.x](#from-version-1x-to-20x)

## From version 1.x to 2.0.x

### Package `react-toolkit-all`

The component `Title` (from `@axa-fr/react-toolkit-layout-header`) has been renamed to `HeaderTitle` to add `@axa-fr/react-toolkit-title` to the `@axa-fr/react-toolkit-all` package.

```diff
- import { Title } from '@axa-fr/react-toolkit-all';
+ import { HeaderTitle } from '@axa-fr/react-toolkit-all';
```
