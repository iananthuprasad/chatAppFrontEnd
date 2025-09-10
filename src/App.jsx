import './App.css'
import Left from './components/Left/Left'
import Chat from './components/Chat/Chat'
import Right from './components/Right/Right'

function App() {
  return (
    <div className='chat'>
      <Left />
      <Chat />
      <Right />
    </div>
  )
}

export default App
