import { useState } from "react"
import style from "../styles/all_bg.module.css"
import styled, { css } from "styled-components"

const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content:center;
  z-index:100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  width: 75%;
  background: #FBF9F9;
  position: absolute;
  border-radius: 15px;
  padding: 30px;
  max-height:80%;
  min-height: 200px;
  overflow-y: auto;
  box-shadow:
  2.8px 2.8px 2.2px rgba(255, 255, 255, 0.02),
  6.7px 6.7px 5.3px rgba(255, 255, 255, 0.028),
  12.5px 12.5px 10px rgba(255, 255, 255, 0.035),
  22.3px 22.3px 17.9px rgba(255, 255, 255, 0.042),
  41.8px 41.8px 33.4px rgba(255, 255, 255, 0.05),
  100px 100px 80px rgba(255, 255, 255, 0.07);
`
const CustomedModal = ({ children, isOpen, width })=>{
    return isOpen && (
        <>
            <ModalContainer>
                <Modal>
                    { children }
                </Modal>
            </ModalContainer>
        </>
    )
    
}

export default CustomedModal