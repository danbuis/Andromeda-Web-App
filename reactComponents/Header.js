import React from 'react';
import Link from 'next/link';
import css from '../CSS/app.css'

class Header extends React.Component {
    render() {

        
        return <div className ={css.headerStyle}>
            <Link href="/" ><a className ={css.headerItem}>HOME</a></Link>
            <Link href="/resourcepage"><a className ={css.headerItem}>Resources</a></Link>
            <Link href="/alloypage"><a className ={css.headerItem}>Alloys</a></Link>
            <Link href="/componentpage"><a className ={css.headerItem}>Components</a></Link>
            <Link href="/assemblypage"><a className ={css.headerItem}>Assemblies</a></Link>
            <Link href="/corporationpage"><a className ={css.headerItem}>Corporations</a></Link>
        </div>;
    
    }
}

export default Header;