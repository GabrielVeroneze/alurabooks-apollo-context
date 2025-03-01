import { useContext } from 'react'
import { CarrinhoContext } from './CarrinhoContext'

export const useCarrinhoContext = () => {
    const {
        carrinho,
        adicionarItemCarrinho,
        removerItemCarrinho,
        carregando,
    } = useContext(CarrinhoContext)

    return {
        carrinho,
        adicionarItemCarrinho,
        removerItemCarrinho,
        carregando,
    }
}
