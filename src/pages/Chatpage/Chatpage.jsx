import './Chatpage.css'
import Left from '../../components/Left/Left'
import Chat from '../../components/Chat/Chat'
import Right from '../../components/Right/Right'

function Chatpage() {
  return (
    <div className='chat'>
      <Left />
      <Chat />
      <Right />
    </div>
  )
}

export default Chatpage