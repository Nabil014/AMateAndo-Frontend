import { NavBar } from '../Navbar/NavBar'
import { Products } from '../Products/Products'

export function Home () {

  return (
    <div className='bg-slate-200 min-h-screen'>
      <NavBar />
      <Products />
    </div>
  )
}
