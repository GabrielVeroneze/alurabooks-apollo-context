import { useContext } from 'react'
import { CarrinhoContext } from './CarrinhoContext'

export const useCarrinhoContext = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext)

    return {
        carrinho,
        setCarrinho,
    }
}
