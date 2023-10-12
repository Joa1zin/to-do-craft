import { ThemeProvider } from 'styled-components'
import { tema } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import Logo from './components/Logo'
import Header from './components/Header'

function App() {
  return (
    <ThemeProvider theme={tema}>
      <GlobalStyle/>
      <Logo/>
      <Header/>
    </ThemeProvider>

  )
}

export default App
