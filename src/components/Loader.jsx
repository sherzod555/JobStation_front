import Image from 'next/image';
import { Loading } from './icons';
import cls from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={cls.loader}>
            <div>
                <Loading />
            </div>
        </div>
    );
}

export default Loader;
