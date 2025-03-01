import { useAdicionarItem, useCarrinho, useRemoverItem } from '@/graphql/carrinho/hooks'
import { ItemDoCarrinho } from '@/interfaces/ItemDoCarrinho'
import { CarrinhoContext } from './CarrinhoContext'

interface CarrinhoProviderProps {
    children: React.ReactNode
}

export const CarrinhoProvider = ({ children }: CarrinhoProviderProps) => {
    const { data, loading: loadingCarrinho } = useCarrinho()
    const { adicionaItem, loading: loadingAdicionar } = useAdicionarItem()
    const { removeItem } = useRemoverItem()

    const adicionarItemCarrinho = (item: ItemDoCarrinho) => {
        adicionaItem({
            variables: {
                item: {
                    livroId: item.livro.id,
                    opcaoCompraId: item.opcaoCompra.id,
                    quantidade: item.quantidade,
                },
            },
        })
    }

    const removerItemCarrinho = (item: ItemDoCarrinho) => {
        removeItem({
            variables: {
                item: {
                    livroId: item.livro.id,
                    opcaoCompraId: item.opcaoCompra.id,
                    quantidade: item.quantidade,
                },
            },
        })
    }

    return (
        <CarrinhoContext.Provider
            value={{
                carrinho: data?.carrinho ?? null,
                adicionarItemCarrinho: adicionarItemCarrinho,
                removerItemCarrinho: removerItemCarrinho,
                carregando: loadingCarrinho || loadingAdicionar
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}
