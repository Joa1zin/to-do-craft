import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'styled-components'
import { tema } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'
import Logo from './components/Logo'
import Header from './components/Header'
import Content from './components/Section'




function App() {

  return (
    <ThemeProvider theme={tema}>
      <GlobalStyle/>
      <Logo/>
      <Header/>
      <Content/>
      <Toaster position='top-right' toastOptions={{
        style: {
          fontSize: '0.8rem',
        },
      }}
      />
    </ThemeProvider>

  )
}

export default App
