import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './site/pages/home';
import Sobre from './site/pages/sobre';
import Treinamentos from './site/pages/treinamentos';
import Contato from './site/pages/contato';
import Detalhe from './site/pages/detalhe';
import Login from './site/pages/login';
import TreinamentoBPF from './treinamento/treinamentoBPF';
import TreinamentoBPFManipulador from './treinamento/treinamentoManipulador';
import AdminCliente from './treinamento/dashcliente';
import AdminClienteGestor from './treinamento/dashgestor';
import AdminOwner from './treinamento/dashadmin';
import AdminOwnerEmpresas from './treinamento/dashadminEmpresas';
import AdminOwnerTreinamentos from './treinamento/dashadminTreinamentos';



export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                {/* SITE */}
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/treinamentos" element={<Treinamentos/>}/>
                <Route path="/detalhe" element={<Detalhe/>}/>
                <Route path="/contato" element={<Contato/>}/>
                <Route path="/login" element={<Login/>}/>
                {/* ADMIN */}
                <Route path="/treinamentoBPF" element={<TreinamentoBPF/>}/>
                <Route path="/treinamentoManipulador" element={<TreinamentoBPFManipulador/>}/>
                <Route path="/dashcliente" element={<AdminCliente/>}/>
                <Route path="/dashgestor" element={<AdminClienteGestor/>}/>
                <Route path="/dashadmin" element={<AdminOwner/>}/>
                <Route path="/dashadminEmpresas" element={<AdminOwnerEmpresas/>}/>
                <Route path="/dashadminTreinamentos" element={<AdminOwnerTreinamentos/>}/>

                
            </Routes>
        </BrowserRouter>
    )
}