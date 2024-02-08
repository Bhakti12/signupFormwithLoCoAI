import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styled from "styled-components";

const AddMoreEmails = styled.div`
  position: absolute;
  top: 530px;
  left: 633px;
  font-weight: 500;
  display: none;
`;
const AddMoreNumber = styled.div`
  position: absolute;
  top: 700px;
  left: 633px;
  font-weight: 500;
  display: none;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #005efe;
  width: 530px;
  height: 978px;
`;
const FrameItem = styled.img`
  width: 46px;
  position: relative;
  height: 38px;
`;
const Ckyc = styled.b`
  position: relative;
`;
const GroupParent = styled.div`
  position: absolute;
  top: 36px;
  left: 43px;
  width: 173px;
  height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
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
const GetStarted = styled.img`
  position: absolute;
  top: 546px;
  left: 119px;
  width: 462px;
  height: 462px;
  overflow: hidden;
`;
const Frame = styled.div`
  position: absolute;
  top: 23px;
  left: 22px;
  width: 581px;
  height: 1008px;
  overflow: hidden;
  font-size: 46px;
  color: #fff;
`;
const CreateAnAccount = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 600;
`;
const Frame1 = styled.div`
  position: absolute;
  top: 91px;
  left: 0px;
  width: 268px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 28px;
  color: #0d1d54;
`;
const HavingTrouble = styled.span``;
const Span = styled.span`
  color: #8dade0;
`;
const GetHelp = styled.span`
  font-weight: 500;
  color: #404b7c;
`;
const HavingTroubleGetContainer = styled.div`
  position: relative;
`;
const Frame2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 753px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  font-size: 15px;
  color: #9a9a9a;
`;
const AlreadyHaveAnContainer = styled.div`
  align-self: stretch;
  position: relative;
  cursor: pointer;
`;
const Frame3 = styled.div`
  position: absolute;
  top: 867px;
  left: 0px;
  width: 247px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  font-size: 15px;
  color: #9a9a9a;
`;
const SignUpWithContainer = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 500;
`;
const Frame4 = styled.div`
  position: absolute;
  top: 179px;
  left: 0px;
  width: 615px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
const Frame5 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Frame6 = styled.div`
  position: absolute;
  top: 273px;
  left: 0px;
  width: 433px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
const Default = styled.div`
  position: relative;
  font-size: 14px;
  color: #c6c6c6;
`;
const Frame7 = styled.div`
  width: 120px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 13px;
`;
const Frame8 = styled.div`
  position: absolute;
  top: 398px;
  left: 0px;
  width: 121px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
const Frame9 = styled(TextField)`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 429px;
  left: 0px;
  font-family: Poppins;
  font-size: 16px;
  color: #d5d5d5;
`;
const Frame10 = styled.div`
  width: 118px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
`;
const Frame11 = styled.div`
  position: absolute;
  top: 517px;
  left: 0px;
  width: 121px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
const Frame12 = styled(TextField)`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 547px;
  left: 0px;
  font-family: Poppins;
  font-size: 16px;
  color: #d5d5d5;
`;
const Frame13 = styled(Button)`
  position: absolute;
  top: 771px;
  left: 0px;
`;
const Frame14 = styled(TextField)`
  border: none;
  background-color: transparent;
  flex: 1;
  font-family: Poppins;
  font-size: 16px;
  color: #d5d5d5;
`;
const Frame15 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 28px;
`;
const Frame16 = styled.div`
  position: absolute;
  top: 310px;
  left: 0px;
  width: 665px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
const Frame17 = styled.div`
  align-self: stretch;
  position: relative;
  height: 890px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Frame18 = styled.div`
  position: absolute;
  top: 23px;
  left: 632px;
  width: 753px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #404b7c;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const SignUpRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: #f5f6f8;
  height: 1024px;
  overflow: hidden;
  text-align: left;
  font-size: 16px;
  color: #005efe;
  font-family: Poppins;
`;

const SignUp1 = () => {
  const onAlreadyHaveAnClick = useCallback(() => {
    window.location.href = "mailto:sanghanibhakti922@gmail.com";
  }, []);

  return (
    <SignUpRoot>
      <AddMoreEmails>+ Add more emails</AddMoreEmails>
      <AddMoreNumber>+ Add more number</AddMoreNumber>
      <Frame>
        <FrameChild />
        <GroupParent>
          <FrameItem alt="" src="/group-1.svg" />
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
        <GetStarted alt="" src="/get-started-1.svg" />
      </Frame>
      <Frame18>
        <Frame17>
          <Frame1>
            <CreateAnAccount>Create an account</CreateAnAccount>
          </Frame1>
          <Frame2>
            <HavingTroubleGetContainer>
              <HavingTrouble>
                <HavingTrouble>Having trouble?</HavingTrouble>
                <Span>{` `}</Span>
              </HavingTrouble>
              <GetHelp>Get help</GetHelp>
            </HavingTroubleGetContainer>
          </Frame2>
          <Frame3>
            <AlreadyHaveAnContainer onClick={onAlreadyHaveAnClick}>
              <HavingTrouble>
                <HavingTrouble>Already have an account?</HavingTrouble>
                <Span>{` `}</Span>
              </HavingTrouble>
              <GetHelp>Log in</GetHelp>
            </AlreadyHaveAnContainer>
          </Frame3>
          <Frame4>
            <SignUpWithContainer>
              <FewClickAway>
                Sign up with your email address so that your information is not
                lost and safe
              </FewClickAway>
              <FewClickAway>with us.</FewClickAway>
            </SignUpWithContainer>
          </Frame4>
          <Frame6>
            <Frame5>
              <HavingTroubleGetContainer>Full Name</HavingTroubleGetContainer>
              <HavingTroubleGetContainer>Nick Name</HavingTroubleGetContainer>
            </Frame5>
          </Frame6>
          <Frame8>
            <Frame7>
              <HavingTroubleGetContainer>Email</HavingTroubleGetContainer>
              <Default>(Default)</Default>
            </Frame7>
          </Frame8>
          <Frame9
            color="primary"
            name="email"
            id="email"
            label="Enter email address"
            placeholder="Enter email address"
            required={true}
            variant="outlined"
            type="email"
            sx={{ "& .MuiInputBase-root": { height: "68px" }, width: "433px" }}
          />
          <Frame11>
            <Frame10>
              <HavingTroubleGetContainer>{`Phone `}</HavingTroubleGetContainer>
              <Default>(Default)</Default>
            </Frame10>
          </Frame11>
          <Frame12
            color="primary"
            name="phone"
            id="phone"
            label="Enter phone number"
            placeholder="Enter phone number"
            required={true}
            variant="outlined"
            type="tel"
            sx={{ "& .MuiInputBase-root": { height: "68px" }, width: "432px" }}
          />
          <Frame13
            disableElevation={true}
            color="primary"
            name="btn"
            id="btn"
            variant="contained"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 256 }}
          >{`SAVE & COUNTINUE`}</Frame13>
          <Frame16>
            <Frame15>
              <Frame14
                color="primary"
                name="name"
                id="name"
                label="Enter full name"
                placeholder="Enter full name"
                required={true}
                variant="outlined"
                sx={{ "& .MuiInputBase-root": { height: "68px" } }}
              />
              <Frame14
                color="primary"
                id="name"
                label="Enter nick name"
                placeholder="Enter nick name"
                required={true}
                variant="outlined"
                type="text"
                sx={{ "& .MuiInputBase-root": { height: "68px" } }}
              />
            </Frame15>
          </Frame16>
        </Frame17>
      </Frame18>
    </SignUpRoot>
  );
};

export default SignUp1;
