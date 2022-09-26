import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState} from "recoil";
import { modalAtom } from "../../recoil/modal/atom";
import './styles/Modal.css';

const FightScrollModal = () => {
    const navigate = useNavigate();
    const [modal, setModal] = useRecoilState(modalAtom);

	return (
    <div className={`fightScrollreward-modal ${modal.data?.error? (modal.data?.fightScrollreward ?
    'fightScrollreward-success ':'fightScrollreward-fail'): ''}`} onClick={()=>navigate('/fightresult')}>
            {modal.data?.error?
                (modal.data?.fightScrollreward ?
                    `스크롤 획득!`
                    :
                    `스크롤 획득 실패..`
                )
                :
                modal.data?.message
            }
    </div>);
}

export default FightScrollModal;
