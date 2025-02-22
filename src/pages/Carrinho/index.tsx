import { Link } from 'react-router-dom'
import { AbBotao } from 'ds-alurabooks'
import { useCarrinho } from '@/graphql/carrinho/hooks'
import ItemCarrinho from '@/components/ItemCarrinho'
import styles from './Carrinho.module.scss'

const Carrinho = () => {
    const { data } = useCarrinho()

    return (
        <section className={styles.secao}>
            <h2 className={styles.titulo}>Itens selecionados</h2>
            <ul className={styles.lista}>
                {data?.carrinho.itens.map(item => (
                    <ItemCarrinho key={item.livro.id} item={item} />
                ))}
            </ul>
            <Link className={styles.link} to="#">
                Continuar comprando
            </Link>
            <hr />
            <div className={styles.totalCompra}>
                <p className={styles.textoTotal}>
                    Total da compra{' '}
                    <strong className={styles.valorTotal}>R$ 65,80</strong>
                </p>
                <AbBotao texto="Finalizar compra" />
            </div>
        </section>
    )
}

export default Carrinho
