import React from "react";
import { useState } from "react";

export default function MenuAdmin(props) {
    
    return (
        <div className="sidebar-wrapper">
        <div className="menu-list">
          <a href="/dashadmin">
            <img src="assets/images/resources-icon/icon-2-2.png" alt="Icon" />
          </a>
          <a href="/dashadminEmpresas">
            <img src="assets/images/menu-icon/icon-4.png" alt="Icon" />
          </a>
          <a href="/dashadminTreinamentos">
            <img src="assets/images/resources-icon/icon-2-1.png" alt="Icon" />
          </a>
        </div>
      </div>
    );
  }


