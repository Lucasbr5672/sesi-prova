import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../Home/Home.jsx"
import Sobre from "../Sobre/Sobre.jsx"
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"
import Login from "../Login/Login.jsx"
import Administradores from "../Administradores/Administradores.jsx"



const App = () => {
    return(
        <BrowserRouter>
        <Header/>
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Sobre" element={<Sobre/>} />               
                <Route path="/Administradores" element={<Administradores/>} />               
                <Route path="/login" element={<Login/>}/>
             </Routes>
             <Footer/>
        </BrowserRouter>
    )
}
export default App;