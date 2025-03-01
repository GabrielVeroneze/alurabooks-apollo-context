import Loader from '@/components/Loader'
import styles from './LoadingCarrinho.module.scss'

const LoadingCarrinho = () => {
    return (
        <div className={styles.loader}>
            <Loader />
        </div>
    )
}

export default LoadingCarrinho
