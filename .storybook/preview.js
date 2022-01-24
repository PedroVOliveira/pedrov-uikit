
import { muiTheme } from 'storybook-addon-material-ui'
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from "../src/themes/defaultTheme"

export const decorators = [
    muiTheme(theme)
];

addDecorator((story) => (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
));