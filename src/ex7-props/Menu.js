import React from 'react';

const Menu = (props) => {


    return (
    
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">  
                <ul className="navbar-nav">
                    {
                    props.menuList.map(menu => {
                        return <li key={menu.id} className="nav-item">
                                    <a className={`nav-link ${menu.active}`} href={menu.path}>{menu.name}</a>
                                </li>
                      })  
                    }                   
                </ul>
            </div>
        </nav> 
      
    );
};

export default Menu;