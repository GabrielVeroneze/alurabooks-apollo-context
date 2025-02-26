import { useNavigate } from 'react-router-dom'
import { limparToken } from '@/utils/token'
import BotaoIcone from '@/components/BotaoIcone'
import CarrinhoFlutuante from '@/components/CarrinhoFlutuante'
import sacola from '../assets/sacola.svg'
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
            <div className={styles.sacola}>
                <BotaoIcone
                    texto="Minha sacola"
                    imagem={sacola}
                    imagemAlt="Ícone representando uma sacola"
                />
                <CarrinhoFlutuante />
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
