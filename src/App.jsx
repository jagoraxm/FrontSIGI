import './App.css'
import Login from './Login'

function App() {
  return (
    <>
      <div className='text-white h-[100vh] flex items-center justify-center bg-cover' style={{backgroundImage:"url('../src/assets/IPNDECORA.jpg')"}}>
        <Login />
      </div>
    </>
  )
}

export default App