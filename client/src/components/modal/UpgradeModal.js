import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState} from "recoil";
import { modalAtom } from "../../recoil/modal/atom";
import './styles/Modal.css';

const UpgradeModal = () => {
    const navigate = useNavigate();
    const [modal, setModal] = useRecoilState(modalAtom);

	return (<div className={`upgrade-modal ${modal.data?.error? (modal.data?.upgrade ? 'upgrade-success':'upgrade-fail'): ''}`} onClick={()=>navigate('/inventory')}>
            {modal.data?.error?
                (modal.data?.upgrade ?
                    `강화 성공! ${modal.data?.message}`
                    :
                    `강화 실패`
                )
                :
                modal.data?.message
            }
    </div>);
}

export default UpgradeModal;
