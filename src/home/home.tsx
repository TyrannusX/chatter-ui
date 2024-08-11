import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import '../App.css'

function Home(){
    return (
        <>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Chatter</h1>
          <div className="card">
            <p>
              A place to commune!
            </p>
          </div>
          <p className="read-the-docs">
            Copyright&copy; {new Date().getFullYear()} Robert Reyes
          </p>
        </>
    )
}

export default Home;