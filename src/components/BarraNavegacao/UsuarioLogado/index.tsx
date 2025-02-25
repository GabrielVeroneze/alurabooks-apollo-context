import { Link, useNavigate } from 'react-router-dom'
import { limparToken } from '@/utils/token'
import BotaoIcone from '@/components/BotaoIcone'
import usuario from '../assets/usuario.svg'
import styles from './UsuarioLogado.module.scss'

interface UsuarioLogadoProps {
    setUsuarioEstaLogado: (value: boolean) => void
}

const UsuarioLogado = ({ setUsuarioEstaLogado }: UsuarioLogadoProps) => {
    const navigate = useNavigate()

    const efetuarLogout = () => {
        setUsuarioEstaLogado(false)
        limparToken()
        navigate('/')
    }

    return (
        <>
            <div>
                <Link className={styles.conta} to="/minha-conta/pedidos">
                    Minha conta
                </Link>
            </div>
            <div>
                <BotaoIcone
                    texto="Logout"
                    imagem={usuario}
                    imagemAlt="Icone representando um usuário"
                    onClick={efetuarLogout}
                />
            </div>
        </>
    )
}

export default UsuarioLogado
