import { useNavigate } from 'react-router-dom'
import { AbBotao } from 'ds-alurabooks'
import { useCarrinhoContext } from '@/context/carrinho/useCarrinhoContext'
import styles from './CarrinhoFlutuante.module.scss'

const CarrinhoFlutuante = () => {
    const { carrinho } = useCarrinhoContext()
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <h4 className={styles.titulo}>Resumo da compra</h4>
            <ul className={styles.lista}>
                {carrinho?.itens.map(carrinho => (
                    <li className={styles.item}>
                        <h5 className={styles.livroTitulo}>
                            {carrinho.livro.titulo}
                        </h5>
                        <p className={styles.livroAutor}>
                            Autoria: {carrinho.livro.autor.nome}
                        </p>
                    </li>
                ))}
            </ul>
            <div className={styles.botao}>
                <AbBotao
                    texto="Ver sacola"
                    onClick={() => navigate('/minha-sacola')}
                />
            </div>
        </div>
    )
}

export default CarrinhoFlutuante
