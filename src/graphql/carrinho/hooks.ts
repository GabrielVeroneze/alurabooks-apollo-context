import { useMutation, useQuery } from '@apollo/client'
import { ADICIONAR_ITEM, OBTER_CARRINHO, REMOVER_ITEM } from '@/graphql/carrinho/queries'
import { CarrinhoCompra } from '@/interfaces/CarrinhoCompra'

export const useCarrinho = () => {
    const { data, loading } = useQuery<{ carrinho: CarrinhoCompra }>(OBTER_CARRINHO)

    return {
        data,
        loading,
    }
}

export const useAdicionarItem = () => {
    const [adicionaItem, { loading }] = useMutation(ADICIONAR_ITEM, {
        refetchQueries: [
            'ObterCarrinho'
        ],
    })

    return {
        adicionaItem,
        loading,
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
