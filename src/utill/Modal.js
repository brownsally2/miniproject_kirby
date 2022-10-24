import React from "react";
import '../App.css';
import './Modal.css';

// 상태창 이름이 바껴야 하므로 props 이용해 구조분해 
const Modal = (props) =>{
    const {open, close, header} = props;
    return(
        <div className={open ? 'openModal modal' : 'modal'}>
            {open && 
                <section>
                    <header>
                        {header}
                        <button className='close' onClick={close}>
                            &times;
                        </button>
                    </header>
                    {/* props.children: 태그와 태그사이의 문구가 들어옴  */}
                    <main>{props.children}</main>
                    <footer>
                        <button className='close' onClick={close}>close</button>
                    </footer>
                </section>
            }
        </div>
    );
};
export default Modal;