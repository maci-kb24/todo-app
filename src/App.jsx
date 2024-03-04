import './App.css'
import List from './components/list/List'
import Search from './components/search/Search'

function App() {

  return (
    <div className='app'>
      <h1>Todos</h1>
      <Search />
      <List />
    </div>
  )
}

export default App
