import './App.css'
import Team from './pages/Team'
import Home from './pages/Home'
import AdminDashBoard from './pages/AdminDashBoard'
import Login from './pages/Login'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import LeaderDashboard from './pages/LeaderDashboard'

function App() {

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='team' element={<Team/>}/>
        <Route path='dashboard' element={<AdminDashBoard/>}/>
        <Route path='leaderboard' element={<LeaderDashboard/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
