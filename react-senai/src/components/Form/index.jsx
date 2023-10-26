import styles from "./Form.module.css";

function Form() {
    return(
        <section className={styles.container}>
            
            <form action="">
                <h2>Complete o formulário para entrar em contato!</h2>
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
                        <textarea className="textarea" cols="110" rows="8" placeholder="Digite um comentário"></textarea>
                    </label>
                </div>
                <div>
                    <button>Enviar formulário</button>
                </div>
               
            </form>
        </section>

    )
}

export default Form