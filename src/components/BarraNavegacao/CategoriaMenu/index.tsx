import { Link } from 'react-router-dom'
import { CategoriaDados } from '@/interfaces/CategoriaDados'
import styles from './CategoriaMenu.module.scss'

interface CategoriaMenuProps {
    categoria: CategoriaDados
}

const CategoriaMenu = ({ categoria }: CategoriaMenuProps) => {
    return (
        <div className={styles.opcao}>
            <Link className={styles.link} to={`/categorias/${categoria.slug}`}>
                {categoria.nome}
            </Link>
        </div>
    )
}

export default CategoriaMenu
