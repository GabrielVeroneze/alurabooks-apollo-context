import { Link } from 'react-router-dom'
import { AbBotao } from 'ds-alurabooks'
import { useCarrinhoContext } from '@/context/carrinho/useCarrinhoContext'
import { formatador } from '@/utils/formatador-moeda'
import TituloPrincipal from '@/components/TituloPrincipal'
import ItemCarrinho from '@/components/ItemCarrinho'
import LoadingCarrinho from './LoadingCarrinho'
import styles from './Carrinho.module.scss'

const Carrinho = () => {
    const { carrinho, carregando } = useCarrinhoContext()

    return (
        <section>
            <TituloPrincipal texto="Minha sacola" />
            <div className={styles.conteudo}>
                <h2 className={styles.titulo}>Itens selecionados</h2>
                <ul className={styles.lista}>
                    {carrinho?.itens.map(item => (
                        <ItemCarrinho key={item.livro.id} item={item} />
                    ))}
                </ul>
                <Link className={styles.link} to="/">
                    Continuar comprando
                </Link>
                <hr />
                <div className={styles.totalCompra}>
                    <p className={styles.textoTotal}>
                        Total da compra{' '}
                        <strong className={styles.valorTotal}>
                            {formatador.format(carrinho?.total || 0)}
                        </strong>
                    </p>
                    <AbBotao texto="Finalizar compra" />
                </div>
            </div>
            {carregando && <LoadingCarrinho />}
        </section>
    )
}

export default Carrinho
