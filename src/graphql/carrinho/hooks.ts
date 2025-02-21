import { useQuery } from '@apollo/client'
import { OBTER_CARRINHO } from '@/graphql/carrinho/queries'
import { CarrinhoCompra } from '@/interfaces/CarrinhoCompra'

export const useCarrinho = () => {
    const { data } = useQuery<{ carrinho: CarrinhoCompra }>(OBTER_CARRINHO)

    return {
        data,
    }
}
