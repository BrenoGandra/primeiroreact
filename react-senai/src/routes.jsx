import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Produtos";
import Projetos from "./pages/Serviços";
import Contato from "./pages/Login";

function AppRoutes(){
    return(
        <BrowserRouter>
             <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/sobre" element={<Sobre />}></Route>
                <Route path="/projetos" element={<Projetos />}></Route>
                <Route path="/contato" element={<Contato />}></Route>

             </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes