import React from "react";
import Logo from "../assets/images/logo.svg";


function Nav() {
    return (<nav className='nav-wrapper'>
        <div className='nav-content'>
            <ul className='list-styled'>
                <li>
                    <img src={Logo}/>
                </li>
                <li>
                    <a className="link-styled">Store</a>
                </li>
                <li>
                    <a className="link-styled">Store</a>
                </li>
                <li>
                    <a className="link-styled">Store</a>
                </li>
                <li>
                    <a className="link-styled">Store</a>
                </li>
            </ul>

        </div>

    </nav>);
}

export { Nav };