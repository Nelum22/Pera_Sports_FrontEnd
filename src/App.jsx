import './App.css'
import Team from './pages/Team'
import Home from './pages/Home'
import AdminDashBoard from './pages/AdminDashBoard'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route index path='/' element={<Home/>}></Route>
          <Route path='/team' element={<Team/>}/>
          <Route path='/dashboard' element={<AdminDashBoard/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
