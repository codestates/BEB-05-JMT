import React from 'react';
import { useRecoilState} from "recoil";
import { modalAtom } from "../../recoil/modal/atom";
import UpgradeModal from './UpgradeModal';
import FightScrollModal from './FightScrollModal';
import FightTokenModal from './FightTokenModal';
import MarketModal from './MarketModal';
import './styles/Modal.css';

const Modal = () => {
    const [modal, setModal] = useRecoilState(modalAtom);

    const close = () => {
        setModal({...modal, open: false, data: {}, type: ''});
    }

	return modal.open ? (
        <>
            <div className='dim' onClick={close}>
                {
                    modal.type == 'upgrade' ? 
                        <UpgradeModal />
                        : null
                },
                {
                    modal.type == 'fightScrollreward' ? 
                        <FightScrollModal />
                        : null
                },
                {
                    modal.type == 'fightTokenreward' ? 
                        <FightTokenModal />
                        : null
                }
            </div>
        </>
	): null;
}

export default Modal;
