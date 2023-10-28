import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return(
        <header className={styles.header}>
            <Link to="/">
                <span>Petzin</span>
            </Link>  
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Produtos</Link>
                <Link to="/projetos">Serviços</Link>
                <Link to="/contato">Login</Link>
            </nav>
        </header>

    )
}

export default Header