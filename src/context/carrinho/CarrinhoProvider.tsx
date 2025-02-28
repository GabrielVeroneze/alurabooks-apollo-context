import { useAdicionarItem, useCarrinho } from '@/graphql/carrinho/hooks'
import { ItemDoCarrinho } from '@/interfaces/ItemDoCarrinho'
import { CarrinhoContext } from './CarrinhoContext'

interface CarrinhoProviderProps {
    children: React.ReactNode
}

export const CarrinhoProvider = ({ children }: CarrinhoProviderProps) => {
    const { data } = useCarrinho()
    const { adicionaItem } = useAdicionarItem()

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
        console.log('[CarrinhoProvider] - removerItemCarrinho', item)
    }

    return (
        <CarrinhoContext.Provider
            value={{
                carrinho: data?.carrinho ?? null,
                adicionarItemCarrinho: adicionarItemCarrinho,
                removerItemCarrinho: removerItemCarrinho,
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}
