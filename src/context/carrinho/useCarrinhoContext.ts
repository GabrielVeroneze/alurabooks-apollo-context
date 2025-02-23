import { useContext } from 'react'
import { CarrinhoContext } from './CarrinhoContext'

export const useCarrinhoContext = () => {
    const { carrinho, adicionarItemCarrinho } = useContext(CarrinhoContext)

    return {
        carrinho,
        adicionarItemCarrinho,
    }
}
