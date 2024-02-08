import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import CreateAccountForm from "../components/CreateAccountForm";

const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #005efe;
  width: 530px;
  height: 978px;
`;
const GroupChild = styled.img`
  position: absolute;
  top: 8px;
  left: 0px;
  width: 46px;
  height: 38px;
`;
const Ckyc = styled.b`
  position: absolute;
  top: 0px;
  left: 55px;
`;
const GroupParent = styled.div`
  position: absolute;
  top: 36px;
  left: 43px;
  width: 173px;
  height: 54px;
  font-family: Roboto;
`;
const FewClickAway = styled.p`
  margin: 0;
`;
const FewClickAwayContainer = styled.div`
  position: absolute;
  top: 254px;
  left: 43px;
  font-size: 32px;
  font-weight: 600;
`;
const StartYourKycContainer = styled.div`
  position: absolute;
  top: 366px;
  left: 43px;
  font-size: 18px;
  font-weight: 500;
  color: #b3cfff;
`;
const animationSlideInTop = keyframes`
    0% {
        transform: translateY(-200px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
  `;
const animationSlitInVertical = keyframes`
    0% {
        transform: translateZ(-800px) rotateY(90deg);
        opacity: 0;
    }
    54% {
        transform: translateZ(-160px) rotateY(87deg);
        opacity: 1;
    }
    100% {
        transform: translateZ(0) rotateY(0);
    }
`;
const GetStarted = styled.img`
  position: absolute;
  top: 546px;
  left: 119px;
  width: 462px;
  height: 462px;
  overflow: hidden;
  object-fit: cover;
  opacity: 0;
  &.animate {
    animation: 2s ease-out 0s 1 normal forwards ${animationSlideInTop};
  }
  @media screen and (max-width: 960px) {
    mix-blend-mode: normal;
    display: flex;
    opacity: 0;
    &.animate {
      animation: 1s ease 0s 1 normal forwards ${animationSlitInVertical};
    }
  }
`;
const Frame = styled.div`
  width: 581px;
  position: relative;
  height: 1008px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 0;
  font-size: 46px;
  color: #fff;
`;
const EnterFullName = styled.div`
  width: 120px;
  position: absolute;
  margin: 0 !important;
  top: 355px;
  left: 661px;
  display: none;
  z-index: 2;
`;
const EnterNickName = styled.div`
  width: 129px;
  position: absolute;
  margin: 0 !important;
  top: 355px;
  left: 1003px;
  display: none;
  z-index: 3;
`;
const SaveCountinue = styled.div`
  width: 172px;
  position: absolute;
  margin: 0 !important;
  top: 811px;
  left: 676px;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  display: none;
  z-index: 4;
`;
const EnterEmailAddress = styled.div`
  width: 159px;
  position: absolute;
  margin: 0 !important;
  top: 474px;
  left: 661px;
  display: none;
  z-index: 5;
`;
const EnterPhoneNumber = styled.div`
  width: 164px;
  position: absolute;
  margin: 0 !important;
  top: 644px;
  left: 661px;
  display: none;
  z-index: 6;
`;
const SignUpRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: #f5f6f8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 1024px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px 22px;
  box-sizing: border-box;
  text-align: left;
  font-size: 16px;
  color: #d5d5d5;
  font-family: Poppins;
  @media screen and (max-width: 1200px) {
    width: 1440px;
    height: 1024px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0px;
    border-radius: 0px;
    padding-left: 22px;
    box-sizing: border-box;
  }
`;

const SignUp = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <SignUpRoot>
      <Frame>
        <FrameChild />
        <GroupParent>
          <GroupChild alt="" src="/group-1.svg" />
          <Ckyc>CKYC</Ckyc>
        </GroupParent>
        <FewClickAwayContainer>
          <FewClickAway>Few click away on</FewClickAway>
          <FewClickAway>KYC.</FewClickAway>
        </FewClickAwayContainer>
        <StartYourKycContainer>
          <FewClickAway>{`Start your KYC in minutes. `}</FewClickAway>
          <FewClickAway>save time and money</FewClickAway>
        </StartYourKycContainer>
        <GetStarted
          id="image"
          alt=""
          src="/get-started-1@2x.png"
          data-animate-on-scroll
        />
      </Frame>
      <CreateAccountForm />
      <EnterFullName>Enter full name</EnterFullName>
      <EnterNickName>Enter nick name</EnterNickName>
      <SaveCountinue>{`SAVE & COUNTINUE`}</SaveCountinue>
      <EnterEmailAddress>Enter email address</EnterEmailAddress>
      <EnterPhoneNumber>Enter phone number</EnterPhoneNumber>
    </SignUpRoot>
  );
};

export default SignUp;
