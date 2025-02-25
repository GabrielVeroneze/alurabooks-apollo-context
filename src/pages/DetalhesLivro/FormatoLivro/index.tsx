import { AbGrupoOpcao, AbGrupoOpcoes } from 'ds-alurabooks'
import styles from './FormatoLivro.module.scss'

interface FormatoLivroProps {
    opcaoCompra: AbGrupoOpcao | null
    setOpcaoCompra: (opcao: AbGrupoOpcao | null) => void
    opcoes: AbGrupoOpcao[]
}

const FormatoLivro = ({ opcaoCompra, setOpcaoCompra, opcoes }: FormatoLivroProps) => {
    return (
        <div className={styles.formato}>
            <h3 className={styles.titulo}>Selecione o formato de seu livro:</h3>
            <div className={styles.opcoes}>
                <AbGrupoOpcoes
                    opcoes={opcoes}
                    valorPadrao={opcaoCompra}
                    onChange={setOpcaoCompra}
                />
            </div>
            <p className={styles.texto}>
                *Você terá acesso às futuras atualizações do livro.
            </p>
        </div>
    )
}

export default FormatoLivro
