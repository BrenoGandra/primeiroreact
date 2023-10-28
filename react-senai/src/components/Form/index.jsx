import styles from "./Form.module.css";

function Form() {
    return(
        <section className={styles.container}>
            
            <form action="">
                <h2>Preencha os campos para fazer login!</h2>
                <div>
                    <label>
                        <input type="text" placeholder="Digite seu nome" required="required"/>
                        
                    </label>
                </div>
                <div>
                    <label >
                        <input type="email" placeholder="Digite seu email" required="required"/>

                    </label>
                </div>
                <div>
                    <label>
                        <input type="password" placeholder="Digite sua senha" />
                    </label>
                </div>
                <div>
                    <button>Fazer Login</button>
                </div>
               
            </form>
        </section>

    )
}

export default Form