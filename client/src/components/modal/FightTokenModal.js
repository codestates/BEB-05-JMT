import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState} from "recoil";
import { modalAtom } from "../../recoil/modal/atom";
import './styles/Modal.css';

const FightTokenModal = () => {
    const navigate = useNavigate();
    const [modal, setModal] = useRecoilState(modalAtom);

	return (
    <div className={`fightTokenreward-modal ${modal.data?.error? (modal.data?.fightTokenreward ? 
    'fightTokenreward-success ':'fightTokenreward-fail'): ''}`} onClick={()=>navigate('/fightresult')}>
            {modal.data?.error?
                (modal.data?.fightTokenreward ?
                    `${modal.data?.message}JMT 토큰 획득! `
                    :
                    `JMT 토큰 획득 실패..`
                )
                :
                modal.data?.message
            }
    </div>);
}

export default FightTokenModal;
