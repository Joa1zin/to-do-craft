import { ThemeProvider } from 'styled-components'
import { tema } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import Logo from './components/Logo'
import Header from './components/Header'
import Section from './components/Section'


function App() {

  return (
    <ThemeProvider theme={tema}>
      <GlobalStyle/>
      <Logo/>
      <Header/>
      <Section/>
    </ThemeProvider>

  )
}

export default App
