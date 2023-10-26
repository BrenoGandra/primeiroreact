import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import styles from './Home.module.css'


function Home() {
    return (
        <>
            <Header />
            <Container />
                <section className={styles.home}>
                    <div className={styles.apresentacao}>
                        <p>
                            Olá, eu sou o <br />
                            <span>Breno Gandra</span> <br />
                            Estudante Dev
                        </p>
                    <Link to="/sobre" className={`${styles.btn}`}>Saiba mais</Link>
                    </div>
                    <figure><img className='img-home' src="home.svg" alt="foto inicial" /></figure>
                </section>
            

            <Footer />
        </>
    )
}

export default Home
