import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCategorias } from '@/graphql/categorias/hooks'
import { obterToken } from '@/utils/token'
import CategoriaMenu from './CategoriaMenu'
import UsuarioNaoLogado from './UsuarioNaoLogado'
import UsuarioLogado from './UsuarioLogado'
import logo from './assets/logo.png'
import styles from './BarraNavegacao.module.scss'

const BarraNavegacao = () => {
    const { data } = useCategorias()

    const [modalLoginAberta, setModalLoginAberta] = useState<boolean>(false)
    const [modalCadastroAberta, setModalCadastroAberta] = useState<boolean>(false)

    const token = obterToken()

    const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(token !== null)

    return (
        <header className={styles.header}>
            <Link to="/">
                <img src={logo} alt="Logo da AluraBooks" />
            </Link>
            <nav className={styles.navegacao}>
                <ul className={styles.lista}>
                    <li className={styles.item}>
                        <p className={styles.link}>Categorias</p>
                        <div className={styles.menu}>
                            {data?.categorias.map(categoria => (
                                <CategoriaMenu categoria={categoria} />
                            ))}
                        </div>
                    </li>
                    <li className={styles.item}>
                        <Link to="/favoritos" className={styles.link}>
                            Favoritos
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/minha-estante" className={styles.link}>
                            Minha Estante
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.usuario}>
                {!usuarioEstaLogado && (
                    <UsuarioNaoLogado
                        modalLoginAberta={modalLoginAberta}
                        modalCadastroAberta={modalCadastroAberta}
                        setModalLoginAberta={setModalLoginAberta}
                        setModalCadastroAberta={setModalCadastroAberta}
                        setUsuarioEstaLogado={setUsuarioEstaLogado}
                    />
                )}
                {usuarioEstaLogado && (
                    <UsuarioLogado
                        setUsuarioEstaLogado={setUsuarioEstaLogado}
                    />
                )}
            </div>
        </header>
    )
}

export default BarraNavegacao
