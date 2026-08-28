import './App.css'
import { Illustration } from 'react-zdog'
import Zdog from 'zdog'
import { notoSansFont } from './content/font'
import { ZText } from './ztext'

function App() {
  return (
    <div className="app">
      <Illustration
        rotate={{ x: (Zdog.TAU * -35) / 360, y: (Zdog.TAU * 1) / 8 }}
        element="canvas"
        dragRotate={true}
        style={{ width: '100vw', height: '100vh' }}
      >
        <ZText
          text="Hello \nWorld"
          fontSize={40}
          font={notoSansFont}
          color="#f5e0a3"
          textAlign="center"
          textBaseline="middle"
        />
      </Illustration>
    </div>
  )
}

export default App
