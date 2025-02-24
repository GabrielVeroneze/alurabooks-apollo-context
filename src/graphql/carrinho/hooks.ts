import { useMutation, useQuery } from '@apollo/client'
import { ADICIONAR_ITEM, OBTER_CARRINHO } from '@/graphql/carrinho/queries'
import { CarrinhoCompra } from '@/interfaces/CarrinhoCompra'

export const useCarrinho = () => {
    const { data } = useQuery<{ carrinho: CarrinhoCompra }>(OBTER_CARRINHO)

    return {
        data,
    }
}

export const useAdicionarItem = () => {
    const [adicionaItem] = useMutation(ADICIONAR_ITEM)

    return {
        adicionaItem,
    }
}
