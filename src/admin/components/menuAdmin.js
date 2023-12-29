import React from "react";
import { useState } from "react";

export default function MenuAdmin(props) {
  return (
    <div className="sidebar-wrapper">
      <div className="menu-list">
        <span style={{color:'#fff'}}>Meus Treinamentos</span>
        <a href="/dashcliente">
          <img src="assets/images/menu-icon/icon-1.png" alt="Icon" />
        </a>
        <br></br>
        <span style={{color:'#fff'}}>Acompanhamento</span>
        <a href="/dashgestor">
          <img src="assets/images/menu-icon/icon-2.png" alt="Icon" />
        </a>
        <br></br>
        <span style={{color:'#fff'}}>Usuarios</span>
        <a href="/dashadminUsuarios">
          <img src="assets/images/resources-icon/icon-2-2.png" alt="Icon" />
        </a>
        <br></br>
        <span style={{color:'#fff'}}>Treinamentos</span>
        <a href="/dashadminTreinamentos">
          <img src="assets/images/resources-icon/icon-2-1.png" alt="Icon" />
        </a>
        <br></br>
        <span style={{color:'#fff'}}>Empresas</span>
        <a href="/dashadminEmpresas">
          <img src="assets/images/menu-icon/icon-4.png" alt="Icon" />
        </a>
      </div>
    </div>
  );
}
