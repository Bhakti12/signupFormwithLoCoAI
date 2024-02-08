import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const CreateAnAccount = styled.b`
  position: absolute;
  top: 125px;
  left: 0px;
  font-size: 28px;
  font-weight: 600;
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
  position: absolute;
  top: 0px;
  left: 566px;
  font-size: 15px;
  color: #9a9a9a;
`;
const AlreadyHaveAnContainer = styled.div`
  position: absolute;
  top: 867px;
  left: 0px;
  font-size: 15px;
  color: #9a9a9a;
`;
const SignUpWith = styled.p`
  margin: 0;
`;
const SignUpWithContainer = styled.div`
  position: absolute;
  top: 179px;
  left: 0px;
  font-weight: 500;
`;
const AddMoreEmails = styled.a`
  text-decoration: none;
  position: absolute;
  top: 507px;
  left: 0px;
  font-weight: 500;
  color: #005efe;
`;
const AddMoreNumber = styled.div`
  position: absolute;
  top: 677px;
  left: 0px;
  font-weight: 500;
  color: #005efe;
`;
const FullName = styled.b`
  position: absolute;
  top: 273px;
  left: 0px;
`;
const NickName = styled.b`
  position: absolute;
  top: 273px;
  left: 346px;
`;
const Formcontrol = styled(Form.Control)``;
const Wrapper = styled(Form)`
  width: 318px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 310px;
  left: 0px;
`;
const Container = styled(Form)`
  width: 318px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 310px;
  left: 346px;
`;
const FrameChild = styled(Button)`
  width: 253px;
  position: absolute;
  top: 771px;
  left: 2px;
`;
const Email = styled.b`
  position: absolute;
  top: 398px;
  left: 0px;
`;
const RectangleForm = styled(Form)`
  width: 432px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 429px;
  left: 0px;
`;
const Default = styled.div`
  position: absolute;
  top: 401px;
  left: 57px;
  font-size: 14px;
  color: #c6c6c6;
`;
const Phone = styled.b`
  position: absolute;
  top: 566px;
  left: 0px;
`;
const Wrapper1 = styled(Form)`
  width: 432px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 608px;
  left: 0px;
`;
const Default1 = styled.div`
  position: absolute;
  top: 569px;
  left: 57px;
  font-size: 14px;
  color: #c6c6c6;
`;
const FrameRoot = styled.div`
  height: 890px;
  width: 752px;
  position: relative;
  overflow: auto;
  flex-shrink: 0;
  z-index: 1;
  text-align: left;
  font-size: 16px;
  color: #404b7c;
  font-family: Poppins;
`;

const CreateAccountForm = () => {
  return (
    <FrameRoot>
      <CreateAnAccount>Create an account</CreateAnAccount>
      <HavingTroubleGetContainer>
        <HavingTrouble>
          <HavingTrouble>Having trouble?</HavingTrouble>
          <Span>{` `}</Span>
        </HavingTrouble>
        <GetHelp>Get help</GetHelp>
      </HavingTroubleGetContainer>
      <AlreadyHaveAnContainer>
        <HavingTrouble>
          <HavingTrouble>Already have an account?</HavingTrouble>
          <Span>{` `}</Span>
        </HavingTrouble>
        <GetHelp>Log in</GetHelp>
      </AlreadyHaveAnContainer>
      <SignUpWithContainer>
        <SignUpWith>
          Sign up with your email address so that your information is not lost
          and safe
        </SignUpWith>
        <SignUpWith>with us.</SignUpWith>
      </SignUpWithContainer>
      <AddMoreEmails>+ Add more emails</AddMoreEmails>
      <AddMoreNumber>+ Add more number</AddMoreNumber>
      <FullName>Full Name</FullName>
      <NickName>Nick Name</NickName>
      <Wrapper>
        <Formcontrol
          type="text"
          name="full_name"
          placeholder="Enter Full Name"
        />
      </Wrapper>
      <Container>
        <Formcontrol
          type="text"
          name="nick_name"
          placeholder="Enter Nick Name"
        />
      </Container>
      <FrameChild
        name="button"
        id="button"
        variant="primary"
      >{`Save & Continue`}</FrameChild>
      <Email>Email</Email>
      <RectangleForm>
        <Formcontrol type="email" name="Email" placeholder="Enter Email" />
      </RectangleForm>
      <Default>(Default)</Default>
      <Phone>{`Phone `}</Phone>
      <Wrapper1>
        <Formcontrol type="tel" name="phone" placeholder="Enter Phone Number" />
      </Wrapper1>
      <Default1>(Default)</Default1>
    </FrameRoot>
  );
};

export default CreateAccountForm;
