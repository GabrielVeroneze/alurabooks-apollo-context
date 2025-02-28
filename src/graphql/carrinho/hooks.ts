import { useMutation, useQuery } from '@apollo/client'
import { ADICIONAR_ITEM, OBTER_CARRINHO, REMOVER_ITEM } from '@/graphql/carrinho/queries'
import { CarrinhoCompra } from '@/interfaces/CarrinhoCompra'

export const useCarrinho = () => {
    const { data } = useQuery<{ carrinho: CarrinhoCompra }>(OBTER_CARRINHO)

    return {
        data,
    }
}

export const useAdicionarItem = () => {
    const [adicionaItem] = useMutation(ADICIONAR_ITEM, {
        refetchQueries: [
            'ObterCarrinho'
        ],
    })

    return {
        adicionaItem,
    }
}

export const useRemoverItem = () => {
    const [removeItem] = useMutation(REMOVER_ITEM, {
        refetchQueries: [
            'ObterCarrinho'
        ]
    })

    return {
        removeItem
    }
}
