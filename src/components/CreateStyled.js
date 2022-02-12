import styled from "styled-components";
import add from "../image/add.png";

/*
  contains all personalised react components which may be imported and reused 
  throughout program
*/

export const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 50px;
  background: rgb(27, 79, 129);
  text-align: center;
`;

export const HeadPortrait = styled.div`
  width: 105px;
  height: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid gray;
  border-radius: 50%;
  margin-bottom: 5px;
`;

export const LogoPortrait = styled.div`
  margin-left: 20px;
  width: 120px;
  height: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`;

export const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 8px;
`;

export const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin-left: 50px;
`;

export const BoxContainer = styled.div`
  width: 70%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 30px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const InputBar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 2px solid #505050;
`;

export const IconImg = styled.button`
  background-image: url(${add});
  width: 20px;
  background-size: 80%;
  height: 20px;
  border-radius: 50px;
  background-repeat: no-repeat;
  //  position: relative;
  background-position-x: center;
  background-position-y: center;
  // right: 25px;
`;

export const Input = styled.input`
  height: 42px;
  width: 100%;
  border: 0px;
  padding: 0px 10px;
  outline: none;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: gray;
  }

  // &:not(:last-of-type) {
  //   border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  // }

  // &:focus {
  //   outline: none;
  //   border-bottom: 2px solid rgb(241, 196, 15);
  // }
`;

export const BtnBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SubmitButton = styled.button`
  text-align: center;
  width: 40%;
  padding: 11px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms, ease-in-out;
  outline: none;
  background: rgb(61, 199, 122);
  // background: linear-gradient(
  //   58deg,
  //   rgba(241, 196, 15, 1) 20%,
  //   rgba(243, 172, 18, 1) 100%
  // );

  &:hover {
    filter: brightness(1.05);
  }

  &:active {
    background: #228b22;
  }
`;

export const CancelButton = styled.button`
  text-align: center;
  width: 40%;
  padding: 11px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms, ease-in-out;
  outline: none;
  background: red;
  // background: linear-gradient(
  //   58deg,
  //   rgba(241, 196, 15, 1) 20%,
  //   rgba(243, 172, 18, 1) 100%
  // );

  &:hover {
    filter: brightness(1.05);
  }

  &:active {
    background: #dc143c;
  }
`;

export const TagBubble = styled.div`
  text-align: center;
  width: min-content;
  height: 20px;
  padding: 5px 15px;
  margin: 5px 5px;
  color: rgb(27, 79, 129);
  font-size: 16px;
  font-weight: 600;
  //border: 2px solid #00bfff;
  border-radius: 5px;
  outline: none;
  background: #dcdcdc;
  overflow: hidden;
  white-space: nowrap;
`;

export const TagContainer = styled.div`
  display: flex;
  width: 100%;
  margin-right: auto;
  flex-wrap: wrap;
`;

// export const Footer = styled.div`
//   height: 50px;
//   background: rgb(27, 79, 129);
//   width: 100%;
//   position: absolute;
//   bottom: 0;
//   color: white;
// `;
