import { useEffect } from 'react'
import './App.css'
import Productos from './pages/Productos'

function App() {
 
useEffect(() => {
  document.title='Educacion IT - Aplicacion administracion productos'


}, [])


  return (
    <main className='container'>
      <h1 className='text-danger display-2'>Proyecto Integrador!</h1>
      <hr />
      <Productos/>

    </main>
  )
}

export default App
