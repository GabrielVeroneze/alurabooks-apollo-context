import { useQuery } from '@apollo/client'
import { OBTER_CATEGORIAS } from '@/graphql/categorias/queries'
import { CategoriaDados } from '@/interfaces/CategoriaDados'

export const useCategorias = () => {
    const { data } = useQuery<{ categorias: CategoriaDados[] }>(OBTER_CATEGORIAS)

    return {
        data,
    }
}
