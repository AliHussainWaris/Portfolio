import React from 'react'
import { Intro } from './Intro'
import { Routes , Route } from 'react-router-dom';
import { Main } from './Components/Main';
import { About } from './Components/About/About';
import { Services } from './Components/Service/Service';
import { Contact } from './Components/Contact/Contact';
import { Portfolio } from './Components/Portfolio/Portfolio';

const App = () =>{
  return<>
        <Routes>
          <Route path = "/" exact element={<Intro/>} />
          <Route path = "/Main" element={<Main/>} />
          <Route path = "/Home" element={<Main/>} />
          <Route path = "/About" element={<About/>} />
          <Route path = "/Portfolio" element={<Portfolio/>} />
          <Route path = "/Services" element={<Services/>} />
          <Route path = "/Contact" element={<Contact/>} />
        </Routes>
  </>
}
export default App;