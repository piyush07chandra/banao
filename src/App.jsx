import './App.css'

import Body from './components/Body';
import Header from './components/Header'
import Posts from './components/Posts'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  

  return (
    <>
    <BrowserRouter>
    
    <Header/>

     
     <Routes>
      <Route path='/' element={ 
      <>
        <Body/> 
     <Posts/> 
      </>
     }/> *  
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
