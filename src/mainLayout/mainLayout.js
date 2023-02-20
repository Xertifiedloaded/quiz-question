import { React ,createContext,useState} from 'react'
import { Outlet } from 'react-router-dom'
export  const userContext=createContext()

const MainLayout = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
  return (
      <userContext.Provider value={{ currentQuestion, setCurrentQuestion, showScore, setScore, score, setShowScore }}>
          <div>
              <Outlet />
          </div>
     </userContext.Provider>
  )
}

export default MainLayout