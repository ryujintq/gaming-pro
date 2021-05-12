//CSS FILES
import './bootstrap.min.css'
import './App.css'

//COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'

//PAGES
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/' component={Home} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
