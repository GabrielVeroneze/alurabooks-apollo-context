import { AbInputQuantidade } from 'ds-alurabooks'
import { useCarrinhoContext } from '@/context/carrinho/useCarrinhoContext'
import { formatador } from '@/utils/formatador-moeda'
import { ItemDoCarrinho } from '@/interfaces/ItemDoCarrinho'
import lixeira from './assets/lixeira.svg'
import styles from './ItemCarrinho.module.scss'

interface ItemCarrinhoProps {
    item: ItemDoCarrinho
}

const ItemCarrinho = ({ item }: ItemCarrinhoProps) => {
    const { adicionarItemCarrinho } = useCarrinhoContext()

    const alterarQuantidadeDoItem = (quantidade: number) => {
        adicionarItemCarrinho({
            livro: item.livro,
            quantidade: quantidade,
            opcaoCompra: item.opcaoCompra,
        })
    }

    return (
        <li className={styles.item}>
            <div className={styles.info}>
                <img
                    className={styles.imagem}
                    src={item.livro.imagemCapa}
                    alt={item.livro.descricao}
                />
                <h3 className={styles.titulo}>{item.livro.titulo}</h3>
                <p className={styles.descricao}>{item.livro.descricao}</p>
                <p className={styles.autor}>Por: {item.livro.autor.nome}</p>
            </div>
            <div className={styles.compra}>
                <div className={styles.preco}>
                    <h4 className={styles.rotulo}>Preço</h4>
                    <p className={styles.valor}>
                        {formatador.format(item.opcaoCompra.preco)}
                    </p>
                </div>
                <AbInputQuantidade
                    value={item.quantidade}
                    onChange={alterarQuantidadeDoItem}
                />
                <button className={styles.botao}>
                    <img src={lixeira} alt="Ícone de uma lixeira" />
                </button>
            </div>
        </li>
    )
}

export default ItemCarrinho
