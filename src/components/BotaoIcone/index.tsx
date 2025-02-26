import styles from './BotaoIcone.module.scss'

interface BotaoIconeProps {
    texto: string
    imagem: string
    imagemAlt: string
    onClick?: () => void
}

const BotaoIcone = ({ texto, imagem, imagemAlt, onClick }: BotaoIconeProps) => {
    return (
        <button className={styles.botao} onClick={() => onClick && onClick()}>
            <img src={imagem} alt={imagemAlt} />
            {texto}
        </button>
    )
}

export default BotaoIcone
