import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

export default function NavBar(){


    return(
       <nav className={styles.navbar}>
         <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" >
         <ion-icon name="menu-sharp"></ion-icon>
         </button>
         <h1>CRUD - REACT</h1>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style={{"width":"350px"}}>
                <div className={`offcanvas-header ${styles.headerMenu}`}>
                 <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Modúlo do Sistema</h5>
                 <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className={`offcanvas-body ${styles.menuBody}`}>
                 <ul>
                    <li>
                     <Link to="/"> User </Link>
                    </li>
                    <li>
                     <Link to="/users">View Users</Link>
                    </li>
                 </ul>
                </div>
            </div>
       </nav>
    )
}