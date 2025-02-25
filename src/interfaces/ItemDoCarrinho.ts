import { OpcaoCompra } from '@/interfaces/OpcaoCompra'
import { Livro } from '@/interfaces/Livro'

export interface ItemDoCarrinho {
    quantidade: number
    livroId?: number
    opcaoCompraId?: number
    opcaoCompra: OpcaoCompra
    livro: Livro
}
