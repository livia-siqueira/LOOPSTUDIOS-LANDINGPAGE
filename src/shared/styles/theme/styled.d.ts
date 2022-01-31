import 'styled-components'
import theme from '.'

type themeLandingPage = typeof theme;


declare module 'styled-components'{
    export interface DefaultTheme extends themeLandingPage{}
}
