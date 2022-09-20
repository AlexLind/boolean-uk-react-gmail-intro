import './styles/app.css'

import Header from './components/Header/Header.js'
import LeftMenu from './components/Left-Menu/LeftMenu'
import Main from './components/Main/Main.js'



function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Main />
    </div>
  )
}

export default App
