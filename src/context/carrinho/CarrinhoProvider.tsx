import { useState } from 'react'
import { CarrinhoCompra } from '@/interfaces/CarrinhoCompra'
import { CarrinhoContext } from './CarrinhoContext'

interface CarrinhoProviderProps {
    children: React.ReactNode
}

export const CarrinhoProvider = ({ children }: CarrinhoProviderProps) => {
    const [carrinho, setCarrinho] = useState<CarrinhoCompra>({
        itens: [],
        total: 0,
    })

    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    )
}
