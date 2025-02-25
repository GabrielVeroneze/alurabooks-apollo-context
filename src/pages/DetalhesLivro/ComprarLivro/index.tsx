import { AbBotao, AbInputQuantidade } from 'ds-alurabooks'
import styles from './ComprarLivro.module.scss'

interface ComprarLivroProps {
    quantidade: number
    setQuantidade: React.Dispatch<React.SetStateAction<number>>
    adicionarItem: () => void
}

const ComprarLivro = ({ quantidade, setQuantidade, adicionarItem }: ComprarLivroProps) => {
    return (
        <div className={styles.comprar}>
            <AbInputQuantidade value={quantidade} onChange={setQuantidade} />
            <AbBotao texto="Comprar" onClick={adicionarItem} />
        </div>
    )
}

export default ComprarLivro
