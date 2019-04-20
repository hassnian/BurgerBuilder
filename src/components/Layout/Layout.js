import React from 'react'


import './Layout.css'
const Layout=(props)=>(
    <React.Fragment>
        <div>Toolbar,SideDrawer,Backdrop</div>
        <main className="content">
            {props.children}
        </main>
    </React.Fragment>
);
export default Layout