import { useCarrinho } from '@/graphql/carrinho/hooks'
import { ItemDoCarrinho } from '@/interfaces/ItemDoCarrinho'
import { CarrinhoContext } from './CarrinhoContext'

interface CarrinhoProviderProps {
    children: React.ReactNode
}

export const CarrinhoProvider = ({ children }: CarrinhoProviderProps) => {
    const { data } = useCarrinho()

    const adicionarItemCarrinho = (item: ItemDoCarrinho) => {
        console.log('[CarrinhoProvider] - adicionarItemCarrinho', item)
    }

    return (
        <CarrinhoContext.Provider
            value={{
                carrinho: data?.carrinho ?? null,
                adicionarItemCarrinho: adicionarItemCarrinho,
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}
