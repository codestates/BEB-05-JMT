import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState} from "recoil";
import { modalAtom } from "../../recoil/modal/atom";
import './styles/Modal.css';

const SendModal = () => {
    const navigate = useNavigate();
    const [modal, setModal] = useRecoilState(modalAtom);

	return (<div className={`upgrade-modal ${modal.data?.error? (modal.data?.send ? 'upgrade-success':'upgrade-fail'): ''}`} onClick={()=>window.location.reload()}>
            {modal.data?.error?
                (modal.data?.send ?
                    `성공!`
                    :
                    `실패!`
                )
                :
                modal.data?.message
            }
    </div>);
}

export default SendModal;