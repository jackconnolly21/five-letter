import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Rules } from './pages/Rules'
import { Home } from './pages/Home'
import { appContainerCss } from './styles/gameStyles'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className={`container ${appContainerCss}`}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/rules" component={Rules} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
