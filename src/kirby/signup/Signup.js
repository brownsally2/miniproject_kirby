import React, { useState } from 'react';
import imgArrow from '../images/left_b.png'
import { Link } from "react-router-dom";
import Modal from '../../utill/Modal.js';
import KhApi from '../api/khApi';

const SignupS1 = () =>{
    // 키보드 입력
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    const [inputConPw, setInputConPw] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPhone, setInputPhone] = useState("");

    // 오류 메시지
    const [idMessage, setIdMessage] = useState("");
    const [pwMessage, setPwMessage] = useState("");
    const [conPwMessage, setConPwMessage] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [phoneMessage, setPhoneMessage] = useState("");

    // 유효성 검사
    const [isId, setIsId] = useState("");
    const [isPw, setIsPw] = useState("");
    const [isConPw, setIsConPw] = useState("");
    const [isEmail, setIsEmail] = useState("");
    const [isPhone, setIsPhone] = useState("");
    // 팝업
    
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    const onChangId = (e) => {
        const idRegExp = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
        const idCurrent = e.target.value ;
      
        setInputId(e.target.value)
        if(!idRegExp.test(idCurrent.value)){
            setIdMessage("닉네임이 올바르지 않습니다.")
            setIsId(false);
        }
        if (e.target.value.length < 5 || e.target.value.length > 12) {
            setIdMessage("5자리 이상 12자리 미만으로 입력해 주세요.");
            setIsId(false);    
        } else {
            setIdMessage("올바른 형식 입니다.");
            setIsId(true);
        }
    }
    const onChangePw = (e) => {
        //const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]).{8,20}$/
        const passwordCurrent = e.target.value ;
        setInputPw(passwordCurrent)
        if (!passwordRegex.test(passwordCurrent)) {
            setPwMessage('숫자+영문자+대소문자 조합으로 8자리 이상 입력해주세요!')
            setIsPw(false)
        } else {
            setPwMessage('안전한 비밀번호에요 : )')
            setIsPw(true);
        }        
    }

  

    const onChangeConPw = (e) => {
        const passwordCurrent = e.target.value ;
        setInputConPw(passwordCurrent)
        if (passwordCurrent !== inputPw) {
            setConPwMessage('비밀 번호가 일치하지 않습니다.')
            setIsConPw(false)
        } else {
            setConPwMessage('비밀 번호가 일치 합니다. )')
            setIsConPw(true);
        }      
    }

    const onChangeEmail  = (e) => {
        const emailRegExp = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
        const EmailCurrent = e.target.value;
        setInputEmail(EmailCurrent)
        if(!emailRegExp.test(EmailCurrent)){
            setEmailMessage('이메일 형식이 맞지 않습니다.')
            setIsEmail(false)
        }else{
            setEmailMessage('올바른 이메일 입니다!')
            setIsEmail(true)
        }
    }
    const onChangePhone = (e) => {
        const phoneRegExp = /\d{3}-\d{4}-\d{4}/;
        const phoneCurrent= e.target.value;
        setInputPhone(phoneCurrent)
        if(!phoneRegExp.test(phoneCurrent)){
            setPhoneMessage('전화번호 형식이 맞지 않습니다.')
            setIsPhone(false)
        }else{
            setPhoneMessage('올바른 전화번호 입니다!')
            setIsPhone(true)
        }
    }
    // const autoHyphen2 = (EmailCurrent) => {
    //     EmailCurrent = EmailCurrent
    //       .replace(/[^0-9]/g, '')
    //      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
    //    }

    const onClickLogin = async() => {
        console.log("Click 회원가입");
        //let result = await EnnovaApi.userInfoCheckId(inputId);
        let result = await KhApi.userLogin(inputId, 1234);
        if (result.data.Code === "00") {
            console.log("가입된 아이디가 없습니다. 다음 단계 진행 합니다.")
            window.location.replace("/SignupS2");
        } else {
            console.log("아이디 및 패스워드를 재확인해 주세요.")
            setModalOpen(true);
        } 
    }
 

    return(
    <div>
        <div className="container">
            <Link to="/" className="left_arrow">
                <img src={imgArrow} alt="left" />
            </Link>
            
            <div className="sign">
                <span>Sign Up</span>
            </div>
            <div className="item2">
                <input className="input" placeholder="닉네임" value ={inputId} onChange={onChangId}/>
            </div>
            <div className="hint">
                    {inputId.length > 0 && <span className={`message ${isId ? 'success' : 'error'}`}>{idMessage}</span>}
            </div>
            <div className="item2">
                <input type={'password'} className="input" placeholder="패스워드" value ={inputPw} onChange={onChangePw}/>
                
            </div>
            <div className="hint">
                    {inputPw.length > 0 && (
                    <span className={`message ${isPw ? 'success' : 'error'}`}>{pwMessage}</span>)}
            </div>
            <div className="item2">
                <input type={'password'} className="input" placeholder="패스워드 확인" value ={inputConPw} onChange={onChangeConPw}/>
            </div>
            <div className="hint">
                    {inputPw.length > 0 && (
                    <span className={`message ${isConPw ? 'success' : 'error'}`}>{conPwMessage}</span>)}
            </div>
            <div className="item2">
                <input className="input" placeholder="이메일" value ={inputEmail} onChange={onChangeEmail}/>
            </div>
            <div className="hint">
                    {inputEmail.length > 0 && (
                    <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>)}
            </div>
            <div className="item2">
                <input className="input" placeholder="전화번호" value ={inputPhone} onChange={onChangePhone} />
            </div>
            <div className="hint">
                    {inputPhone.length > 0 && (
                    <span className={`message ${isPhone ? 'success' : 'error'}`}>{phoneMessage}</span>)}
            </div>

            <div className="item2">
                {(isId && isPw && isConPw && isEmail && isPhone) ? 
                <button className="enable_button" onClick={onClickLogin}>NEXT</button> :
                <button className="disable_button" onClick={onClickLogin}>NEXT</button>}
                <Modal open={modalOpen} close={closeModal} header="오류">중복된 아이디 입니다.</Modal>
            </div>
        </div>
    </div>
    )
 };

export default SignupS1;