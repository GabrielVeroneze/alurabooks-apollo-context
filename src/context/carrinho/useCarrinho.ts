import { useContext } from 'react'
import { CarrinhoContext } from './CarrinhoContext'

export const useCarrinho = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext)

    return {
        carrinho,
        setCarrinho,
    }
}
