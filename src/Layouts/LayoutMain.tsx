import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const LayoutMain = () => {
  return (
    <div className='bg-red-600 h-screen'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default LayoutMain
