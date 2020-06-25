import React, { useState } from 'react'
import './Cms.css'

const Cms = props => {

    const [toggle, handleToggle] = useState(true)

    return (
        <container className="Cms-container">
            <header className="Cms-header">
                <div className="Cms-header-toggle">
                    <a onClick={() => handleToggle(!toggle)}>
                        <i className={`fa fa-chevron-right ${toggle ? 'iconToggleTrue' : 'iconToggleFalse'}`}aria-hidden="true"></i>
                    </a>
                </div>
                <div className="Cms-header-title"><span>ÁREA DO ADMINISTRADOR</span></div>
                <div className="Cms-header-exit"><a href="/">SAIR</a></div>
            </header>
            {toggle &&
                <aside className="Cms-aside">
                    <nav>
                        <ul>
                            <li>Layout</li>
                        </ul>
                    </nav>
                </aside>
            }
            <main className="Cms-main">
                <span>Corpo</span>
            </main>

        </container>
    )
}
export default Cms