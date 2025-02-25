import BotaoIcone from '@/components/BotaoIcone'
import ModalLoginUsuario from '@/components/ModalLoginUsuario'
import ModalCadastroUsuario from '@/components/ModalCadastroUsuario'
import usuario from '../assets/usuario.svg'

interface UsuarioNaoLogadoProps {
    modalLoginAberta: boolean
    modalCadastroAberta: boolean
    setModalLoginAberta: (value: boolean) => void
    setModalCadastroAberta: (value: boolean) => void
    setUsuarioEstaLogado: (value: boolean) => void
}

const UsuarioNaoLogado = ({
    modalLoginAberta,
    modalCadastroAberta,
    setModalLoginAberta,
    setModalCadastroAberta,
    setUsuarioEstaLogado,
}: UsuarioNaoLogadoProps) => {
    const aoEfetuarLogin = () => {
        setModalLoginAberta(false)
        setUsuarioEstaLogado(true)
    }

    return (
        <>
            <div>
                <BotaoIcone
                    texto="Login"
                    imagem={usuario}
                    imagemAlt="Icone representando um usuário"
                    onClick={() => setModalLoginAberta(true)}
                />
                <ModalLoginUsuario
                    aberta={modalLoginAberta}
                    aoFechar={() => setModalLoginAberta(false)}
                    aoEfetuarLogin={aoEfetuarLogin}
                />
            </div>
            <div>
                <BotaoIcone
                    texto="Cadastrar-se"
                    imagem={usuario}
                    imagemAlt="Icone representando um usuário"
                    onClick={() => setModalCadastroAberta(true)}
                />
                <ModalCadastroUsuario
                    aberta={modalCadastroAberta}
                    aoFechar={() => setModalCadastroAberta(false)}
                />
            </div>
        </>
    )
}

export default UsuarioNaoLogado
