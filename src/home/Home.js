import React, {useState, useEffect} from 'react';
import member from '../kirby/image/kriby_study2.png'
import logo from '../kirby/image/sleep_kirby.gif';
// import '../cuby/style.css';
import styled from 'styled-components';
import './SassComponent.scss';
import { Link } from "react-router-dom";

const GoHome = () => {
    
    const onClickLogo = () => {
        console.log("home이동");
        window.location.replace("/GoHome");
    }
    const onClickQa =() =>{
        console.log("질문 이동");
        window.location.replace("/GoQA")
    }
    const onClickJob =() => {
        console.log("취업진로 이동");
        window.location.replace("/GoJob")
    }
    // const onClickmemberInfo =() =>{
    //     console.log("회원정보 이동");
    //     window.location.replace("/GoMemberInfo")
    // }
    // const onClickLogOut = () => {
    //     console.log("로그아웃 이동");
    //     window.location.replace("/GoLogout")
    // }
    const onClickMustEat = () => {
        console.log("맛집추천 이동");
        window.location.replace("/GoMustEat")
    }
    const onClickFree =() =>{
        console.log("자유 이동");
        window.location.replace("/GOFree")
    }
    const onClickFaithful = () => {
        console.log("성실회원 이동")
        window.location.replace("/onClickFaithful");
    }
    const onClickPop = () => {
        console.log("실시간 인기글")
        window.location.replace("/onClickPop");
    }
    const onClickHottest = () => {
        console.log("HOT 게시물 이동")
        window.location.replace("/onClickHottest");
    }



    // const onClickWallet = async() => {
    // }

    // const onClickEFT = () => {
    //     console.log("EFT로 이동");
    //     window.location.replace("/GoEFT");
    // }



    return(

<div>
    <div className="container1">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="로고" width="150" height="100" />
                   <p className= "MainName" onClick={onClickLogo}>개발하는 커비</p> 
                    <div className="search">
                           
                            <nav className="navbar navbar-light bg-light">
                                <div className="container-fluid">
                                  <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                  </form>
                                </div>
                              </nav>
                    </div>
                </div>
            </div>
        

            <div className="memberinfo">
                    <img src={member} alt="회원사진" width="100" height="70" />

                    <div className ="memberid">
                        <div className="nickname">닉네임</div>
                        <div>이름</div>
                    </div>
                    <div className="logout">
                        <button>내정보</button>
                        <button>로그아웃</button>
                    </div>
            </div>
            
            <div className="board1">
                <div className="line">
                    <div className = "board-list">
                        <div className="tableline1" onClick={onClickQa}>질문</div>
                        <div className="tableline">프론트 어떤가요</div>
                        <div className="tableline">백 어떤가요?</div>
                        <div className="tableline">js 어떤가요?</div>
                        <div className="tableline">자바 어떤가요?</div>
                        <div className="tableline">파이썬 어떤가요?</div>
                    </div>
                    <div className = "board-list">
                        <div className="tableline1" onClick={onClickJob}>취업진로</div>
                        <div className="tableline">프론트 어떤가요?</div>
                        <div className="tableline">백 어떤가요?</div>
                        <div className="tableline">js 어떤가요?</div>
                        <div className="tableline">자바 어떤가요?</div>
                        <div className="tableline">파이썬 어떤가요?</div>
                    </div>
                    <div className = "board-list">
                        <div className="tableline1" onClick={onClickMustEat}>맛집추천</div>
                        <div className="tableline">프론트 어떤가요?</div>
                        <div className="tableline">백 어떤가요?</div>
                        <div className="tableline">js 어떤가요?</div>
                        <div className="tableline">자바 어떤가요?</div>
                        <div className="tableline">파이썬 어떤가요?</div>
                    </div>
                    <div className = "board-list">
                        <div className="tableline1" onClick={onClickFree}>자유</div>
                        <div className="tableline">프론트 어떤가요?</div>
                        <div className="tableline">백 어떤가요?</div>
                        <div className="tableline">js 어떤가요?</div>
                        <div className="tableline">자바 어떤가요?</div>
                        <div className="tableline">파이썬 어떤가요?</div>
                    </div>
                    <div className = "board-list">
                        <div className="tableline1" onClick={onClickFaithful}>성실회원</div>
                        <div className="tableline">프론트 어떤가요?</div>
                        <div className="tableline">백 어떤가요?</div>
                        <div className="tableline">js 어떤가요?</div>
                        <div className="tableline">자바 어떤가요?</div>
                        <div className="tableline">파이썬 어떤가요?</div>
                    </div>
                </div> 
            </div>

            <div className="board2">  
                
                    <div className = "board-list2">
                        <div className="tableline1" onClick={onClickPop}>실시간 인기글</div>
                        <div className="tableline">프론트 어떤가요?</div>
                        <div className="tableline">백 어떤가요?</div>
                        <div className="tableline">js 어떤가요?</div>
                        <div className="tableline">자바 어떤가요?</div>
                        <div className="tableline">파이썬 어떤가요?</div>
                    </div> 

                    <div className = "board-list2">
                        <div className="tableline1" onClick={onClickHottest}>HOT 게시물</div>
                        <div className="tableline">프론트 어떤가요?</div>
                        <div className="tableline">백 어떤가요?</div>
                        <div className="tableline">js 어떤가요?</div>
                        <div className="tableline"> 자바 어떤가요?</div>
                        <div className="tableline"> 어떤가요?</div>
                    </div>
            
            </div>


        
            <div className="footer">
                <div className="fbottom">이용약관</div>
                <div className="fbottom">개인정보처리방침</div>
                <div className="fbottom">커뮤니티이용규칙</div>
                <div className="fbottom">공지사항</div>
                <div className="fbottom">문의하기</div>

            </div>

    </div>
</div>
    )
};

export default GoHome;