import { createContext } from 'react'
import { CarrinhoCompra } from '@/interfaces/CarrinhoCompra'
import { ItemDoCarrinho } from '@/interfaces/ItemDoCarrinho'

interface CarrinhoContextType {
    carrinho: CarrinhoCompra | null
    adicionarItemCarrinho: (item: ItemDoCarrinho) => void
    removerItemCarrinho: (item: ItemDoCarrinho) => void
    carregando: boolean
}

const defaultValue: CarrinhoContextType = {
    carrinho: null,
    adicionarItemCarrinho: () => {},
    removerItemCarrinho: () => {},
    carregando: false,
}

export const CarrinhoContext = createContext<CarrinhoContextType>(defaultValue)
CarrinhoContext.displayName = 'Carrinho'
