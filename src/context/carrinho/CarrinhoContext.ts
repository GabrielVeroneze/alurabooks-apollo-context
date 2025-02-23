import { createContext } from 'react'
import { CarrinhoCompra } from '@/interfaces/CarrinhoCompra'

interface CarrinhoContextType {
    carrinho: CarrinhoCompra | null
    setCarrinho: React.Dispatch<React.SetStateAction<CarrinhoCompra>>
}

const defaultValue: CarrinhoContextType = {
    carrinho: null,
    setCarrinho: () => {},
}

export const CarrinhoContext = createContext<CarrinhoContextType>(defaultValue)
CarrinhoContext.displayName = 'Carrinho'
