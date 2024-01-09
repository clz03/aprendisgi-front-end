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
import TreinamentoFoodDefense from './treinamento/treinamentoFoodDefense';
import AdminCliente from './admin/dashcliente';
import AdminClienteGestor from './admin/dashgestor';
import AdminOwner from './admin/dashadmin';

import AdminOwnerUsuarios from './admin/usuarios/dashadminUsuarios';
import AdminNovoUsuario from './admin/usuarios/novoUsuario';
import AdminEditarUsuario from './admin/usuarios/editarUsuario';

import AdminOwnerEmpresas from './admin/empresas/dashadminEmpresas';
import AdminNovoEmpresa from './admin/empresas/novoEmpresa';
import AdminEditarEmpresa from './admin/empresas/editarEmpresa';

import AdminOwnerProdutos from './admin/produtos/dashadminTreinamentos';
import AdminNovoProduto from './admin/produtos/novoProduto';
import AdminEditarProduto from './admin/produtos/editarProduto';



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
                <Route path="/dashgestor" element={<AdminClienteGestor/>}/>
                <Route path="/dashadmin" element={<AdminOwner/>}/>
                
                <Route path="/dashadminEmpresas" element={<AdminOwnerEmpresas/>}/>
                <Route path="/empresaNovo" element={<AdminNovoEmpresa/>}/>
                <Route path="/empresa/:id" element={<AdminEditarEmpresa/>}/>
                
                <Route path="/dashadminUsuarios" element={<AdminOwnerUsuarios/>}/>
                <Route path="/usuarioNovo" element={<AdminNovoUsuario/>}/>
                <Route path="/usuario/:id" element={<AdminEditarUsuario/>}/>
                
                <Route path="/dashadminTreinamentos" element={<AdminOwnerProdutos/>}/>
                <Route path="/treinamentoNovo" element={<AdminNovoProduto/>}/>
                <Route path="/treinamento/:id" element={<AdminEditarProduto/>}/>
                
                {/* TREINAMENTOS CLIENTE */}
                <Route path="/treinamentoBPF" element={<TreinamentoBPF/>}/>
                <Route path="/treinamentoManipulador" element={<TreinamentoBPFManipulador/>}/>
                <Route path="/treinamentoFoodDefense" element={<TreinamentoFoodDefense/>}/>
                <Route path="/dashcliente" element={<AdminCliente/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}