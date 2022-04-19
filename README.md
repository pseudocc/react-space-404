# REACT SPACE 404

React component for 404 page with animations.

## Screencast

![outer space 404](/screencast/en-v1.0.0.gif)

## Usage

Talk is cheap. Here the code is.

```jsx
import Space404 from 'react-space-404';

<Space404 palette={custom_palette} countdown={10} href="/redirect" />

// simplifed Chinese with default wordings
<Space404 language="chs" />

// with customized wordings
<Space404 i18n={i18n_protoss} language="protoss" />
```

- palette

    custom colors.

- countdown

    redirect countdown in seconds.

- redirect

    URL that redirect to when time is up.

- i18n

    i18next instance, [reference](https://react.i18next.com/latest/i18next-instance).

- language

    language name in string, the built-in i18n instance supports `chs` and `en`.

    the default value is `en`.

- stay

    stay in this page without redirect.

    the default value is `false`.

## Dependencies

- React
- MUI(Material UI)
- gsap

## Development

Powered by storybook, use `npm run storybook` to start the dev server.

## Test

Powered by jest, use `npm test` to run tests.

1. Component
2. i18n

## Credits

- The astronaut vector image:
    [catalyststuff](https://www.freepik.com/catalyststuff)
- Stars vector images:
    [svgrepo](https://www.svgrepo.com/page/licensing)

## License

MIT License.
