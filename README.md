
# React Component Library with Parcel

A reusable React component library bundled with Parcel.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Providers](#providers)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the library, use npm or yarn:

```bash
npm install react-component-library-parcel
```

or

```bash
yarn add react-component-library-parcel
```

## Usage

Here is a basic example of how to use a component from the library:

```jsx
import React from 'react';
import { MyComponent } from 'react-component-library-parcel';

const App = () => (
  <div>
    <MyComponent />
  </div>
);

export default App;
```

### Advanced Usage

```jsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NotificationProvider } from 'react-component-library-parcel';
import { ModalProvider } from 'react-component-library-parcel';
import type { HTMLAttributes } from 'react';
import type { Styled } from 'styled-components';
import { css, useTheme } from 'styled-components';
import styled from 'styled-components';
import type { CssFunction, StyleVariants } from 'react-component-library-parcel/styled';
import { opacity } from 'react-component-library-parcel/utilities';
import { Font, FontType, Article, Heading, Paragraph, Quote, Mono, Notification } from 'react-component-library-parcel';

const App = () => (
    <ThemeProvider theme={theme}>
        <NotificationProvider>
            <ModalProvider>
                <Font>Font</Font>
            </ModalProvider>
        </NotificationProvider>
    </ThemeProvider>
);

export default App;
```

## Components

### Ariatext

The `Ariatext` component provides accessible text for screen readers.

### Button

The `Button` component is a customizable button.

### Font

The `Font` component is highly customizable and can be used to render different types of text elements.

#### Props

- `type` (FontType): The type of font. Options include `heading`, `paragraph`, `quote`, `mono`, `default`.
- `level` (FontLevels): The level of the font, affecting its size. Options are 1, 2, or 3.
- `semibold` (boolean): If true, renders the text in semibold.
- `bold` (boolean): If true, renders the text in bold.
- `italic` (boolean): If true, renders the text in italic.
- `inputCss` (CssFunction): Additional CSS styles to apply.

### Icons

The `Icons` component provides a set of customizable icons.

### Modal

The `Modal` component is used to display modal dialogs.

### Notification

The `Notification` component displays notifications.

### Portal

The `Portal` component is used for rendering children into a DOM node that exists outside the DOM hierarchy of the parent component.

### StateContext

The `StateContext` component provides a context for managing state.

### TextField

The `TextField` component is a customizable input field.

## Providers

### ThemeProvider

Wrap your application with `ThemeProvider` to apply themes.

### NotificationProvider

Wrap your application with `NotificationProvider` to enable notifications.

### ModalProvider

Wrap your application with `ModalProvider` to manage modals.

## Contributing

We welcome contributions to this project. To get started:

1. Fork the repository.
2. Clone your forked repository.
3. Create a new branch for your feature or bugfix.
4. Make your changes.
5. Submit a pull request.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
