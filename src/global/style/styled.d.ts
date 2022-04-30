import styled from 'styled-components';
import theme from './theme';

declare module 'styled-components'{
    type ThemeType = typeof theme;

    export interface defaultTheme extends ThemeType {}
}