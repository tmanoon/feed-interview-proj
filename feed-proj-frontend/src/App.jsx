import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { CommentIndex } from './pages/CommentIndex'
import './style/main.css'

function App() {
  return (
    <Router>
      <div className="main-app">
        <main className='container'>
          <Switch>
            <Route path="/" component={CommentIndex} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
