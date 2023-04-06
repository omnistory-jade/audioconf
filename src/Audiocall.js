import Omnitalk from 'omnitalk-npm-sdk';
import { useState } from 'react';
import styled from 'styled-components';
import { palette, fontSize, fontWeight, defaultFlexCenter, defaultInput } from './style/style';
import CallStep1 from './components/CallStep1';
import CallStep2 from './components/CallStep2';
import Timer from './components/hook/Timer';
import { Bell, Ringing } from './components/media/Ringing';
import CallingSpinner from './style/CallingSpinner';

const omnitalk = new Omnitalk('SDD7-XBI3-XGC8-NICT', 'iffHVaXGUrUiIWl');

function AudioCall() {
  const [sessionId, setSessionId] = useState(''); // createSession();
  const [regiNum, setRegiNum] = useState(''); 
  const [callee, setCallee] = useState(''); // callee 수신자
  const [caller, setCaller] = useState(''); // caller 발신자
  const [callListArr, setCallListArr] = useState([]); 
  // ui
  const [loader, setLoader] = useState(false);
  const [loaderDisabled, setLoaderDisabled] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [createToggle, setCreateToggle] = useState(true); 
  const [offerCallToggle, setOfferCallToggle] = useState(false);
  const [ringingToggle, setRingingToggle] = useState(false);
  const [answerToggle, setAnswerToggle] = useState(false);
  const [callToggle, setCallToggle] = useState(false);

  // onmessage를 확인하여 omnitalk실행
  omnitalk.onmessage = (e) => {
    console.log(`onmessage : ${JSON.stringify(e)}`); // 이벤트 발생시마다 확인되는 onmessage
    switch (e.cmd) {
    case 'SESSION_EVENT': 
      console.log(`Create session, ${e.user_id}, ${e.result}`);
      setOfferCallToggle(true); 
      setCreateToggle(false);
      // call list
      omnitalk.callList('audiocall').then((result) => {
        setCallListArr(result);
      });
      break;
    case 'RINGING_EVENT': 
      console.log('Ringing');
      setCaller(e.caller);
      setAnswerToggle(true);
      setOfferCallToggle(false);
      // console.log('user id &&', e.user_id);
      // console.log('session &&', e.session);
      // console.log('cmd &&', e.cmd);
      // console.log('result &&', e.result);
      setTimeout(() => {
        // console.log('user id &&', e.user_id);
        // console.log('session &&', e.session);
        // console.log('cmd &&', e.cmd);
        // console.log('result &&', e.result);
      }, 1000 * 95);
      break;
    case 'CONNECTED_EVENT': 
      console.log('Connected');
      setCallToggle(true);
      setCreateToggle(false);
      setOfferCallToggle(false);
      setAnswerToggle(false);
      setRingingToggle(false);
      break;
    case 'LEAVE_EVENT':
      console.log('Disconnected');
      omnitalk.leave(sessionId.session);
      window.location.reload(true);
      break;
    case 'ERROR':
      console.log('error', e.reason);
      break;
  
    default:
      break;
    }
  };

  const handleChange = (e) => {
    setRegiNum(e.target.value);
    setIsValid(true);
  };
    
  const handleCreateSession = async () => {
    const session = await omnitalk.createSession(regiNum);

    if (session.reason === '4103, ERR_ALREADY_EXIST_USER') {
      alert('동일한 번호가 존재합니다.');
      window.location.reload();
    }
    if (session.result !== 'success') {
      console.log('error', session);
    }
    setSessionId(session);
    setTimeout(async () => {
      setLoader(true);
      setLoaderDisabled(false);
    }, 1000 * 3);
  };

  const handleOfferCall = async () => {
    await omnitalk.offerCall('audiocall', callee, true);
  };

  const handleLeave = async () => {
    await omnitalk.leave(sessionId.session);
    window.location.reload();
  };

  const refresh = (e) => {
    e.preventDefault();
    omnitalk.callList('audiocall').then((result) => {
      setCallListArr(result);
    });
  };

  return (
    <>
      <StyledContents>
        <section>
          {/* 1.번호 등록 */}
          {createToggle ? (
            <CallStep1
              isValid={isValid}
              handleCreateSession={handleCreateSession}
              handleChange={handleChange} />
          ) : (
            <></>
          )}

          {/* 2. offer call */}
          { !offerCallToggle ? (
            <></>
          ) : (
            <>
              <CallStep2
                setRingingToggle={setRingingToggle} setOfferCallToggle={setOfferCallToggle}
                refresh={refresh} handleOfferCall={handleOfferCall}
                callListArr={callListArr} loaderDisabled={loaderDisabled} loader={loader}
                regiNum={regiNum} setCallee={setCallee} callee={callee} />
            </>
          ) }
            
          {/* 3. callee */}
          {answerToggle && (
            <StyledCallForm>
              <h3>Audio Call</h3>
              <div className="dot_wrap">
                <span className="dot_active"> </span> <span className="hyphen_active"> </span>
                <span className="dot_active"> </span> <span className="hyphen_active"> </span>
                <span className="dot_active"> </span> <span className="hyphen"> </span>
                <span className="dot"> </span>
              </div>
              <p className="name">{caller}</p>
              <p className="calling">요청중</p>
              <Bell />
              <div className="calling_spinner">
                <CallingSpinner calling="true" />
              </div>
              <div className="btn_wrap">
                <button
                  type="button" onClick={() => {
                    omnitalk.answerCall();
                  }}>
                  <img src="https://user-images.githubusercontent.com/99234582/216007136-6db53d89-c22d-45a9-a536-3af165027c52.svg" alt="통화" />
                </button>
                <button
                  type="button" onClick={() => {
                    handleLeave();
                  }}>
                  <img src="https://user-images.githubusercontent.com/99234582/216007148-8311385f-b6c4-4f45-a4bc-89690c3c38e9.svg" alt="종료" />
                </button>
              </div>
            </StyledCallForm>
          )}

          {/* 3. caller */}
          {ringingToggle
            && (
              <StyledCallForm>
                <h3>Audio Call</h3>
                <div className="dot_wrap">
                  <span className="dot_active"> </span> <span className="hyphen_active"> </span>
                  <span className="dot_active"> </span> <span className="hyphen_active"> </span>
                  <span className="dot_active"> </span> <span className="hyphen"> </span>
                  <span className="dot"> </span>
                </div>
                <p className="name">{callee}</p>
                <p className="calling">연결중</p>
                <Ringing />
                <div className="calling_spinner">
                  <CallingSpinner calling="true" />
                </div>
                <div className="btn_wrap">
                  <button
                    type="button" onClick={() => {
                      handleLeave();
                    }}>
                    <img src="https://user-images.githubusercontent.com/99234582/216007148-8311385f-b6c4-4f45-a4bc-89690c3c38e9.svg" alt="종료" />
                  </button>
                </div>
              </StyledCallForm>
            )}

          {/* 4. Connected */}
          {callToggle && (
            <StyledCallForm>
              <h3>Audio Call</h3>
              <div className="dot_wrap">
                <span className="dot_active"> </span> <span className="hyphen_active"> </span>
                <span className="dot_active"> </span> <span className="hyphen_active"> </span>
                <span className="dot_active"> </span> <span className="hyphen_active"> </span>
                <span className="dot_active"> </span>
              </div>
              <p className="name">{callee || caller}</p>
              <p className="calling">통화중</p>
              <Timer />
              <div className="btn_wrap">
                <button
                  type="button" onClick={() => {
                    handleLeave();
                  }}>
                  <img src="https://user-images.githubusercontent.com/99234582/216007148-8311385f-b6c4-4f45-a4bc-89690c3c38e9.svg" alt="종료" />
                </button>
              </div>
            </StyledCallForm>
          )}
        </section>
      </StyledContents>
    </>
  );
}

export default AudioCall;

const StyledContents = styled.div`
width: 100%;
    .call_form{
      width: 360px;
      height: 530px;
      margin: 0 auto;
      padding: 40px;
      border-radius: 15px;
      background-color: ${palette.white};
      box-shadow: ${palette.shadow};
      position: relative;
      overflow: hidden;
      h3{
        text-align: center;
        margin-bottom: 20px;
        font-size: 1.5rem;
        font-weight: ${fontWeight.medium};
      }
  .dot_wrap{
    margin-bottom: 40px;
    ${defaultFlexCenter}
      .dot{
      display: inline-block;
      width: 10px;
      height: 10px;
      margin: 0;
      border-radius: 100px;
      background-color: ${palette.gray.bright};
      }
  .dot_active{
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0;
    border-radius: 100px;
    background-color: ${palette.main.default};
  }
  .hyphen{
    display: inline-block;
    width: 20px;
    height: 2px;
    margin: 0;
    background-color:${palette.gray.bright}; ;
  }
  .hyphen_active{
    display: inline-block;
    width: 20px;
    height: 2px;
    margin: 0;
    background-color:${palette.main.default}; ;
  }
  }
  label,
  h4{
    display: inline-block;
    width: 100%;
    margin: 0;
    margin-bottom: 20px;
    text-align: start;
    font-weight: ${fontWeight.regular};
    font-size: ${fontSize.regular};
  }
  .refresh_button{
    position: absolute;
    top: 154px;
    right: 40px;
    color: ${palette.text.light};
    border: 0;
    background-color: ${palette.opacity};
    :hover{
      cursor: pointer;
      color: #469BF8;
    }
  }
  input{
    ${defaultInput}
    width: 100%;
    padding-left:10px;
    border: 0;
    background-color: ${palette.gray.boxColor};
    ::placeholder{
      font-size: ${fontSize.micro};
    }
  }
  p{
    padding-left: 14px;
    position: relative;
    color: ${palette.text.default};
    text-align: start;
    span{
      position: absolute;
      top: 0;
      left: 0;
      font-size: ${fontSize.medium};
      color: ${palette.main.default};
    }
  }
  .call_list_container{
    width: 100%;
    max-height: 260px;
    overflow: auto;
    background-color: ${palette.white};
    border-radius: 5px;
    ::-webkit-scrollbar{
      display: none;
    }
    .call_list_btn{
      height: 46px;
      button{
        display: inline-block;
        width: 100%;
        padding:0 5%;
        border: 0;
        background-color: ${palette.opacity};
        color: ${palette.text.default};
        strong{
        ${defaultFlexCenter}
        justify-content: space-between;
        span{
          padding-top: 6px;
          font-weight: ${fontWeight.regular};
          font-size: ${fontSize.small};
          line-height: 24px;
          color: ${palette.text.default};
        }
        span:nth-child(2){
          font-size: ${fontSize.micro};
        }
      }
      .border_bottom{
        display: inline-block;
        width: 90%;
        height: 1px;
        background-color: ${palette.gray.bright};
      }
      }
      .disabled_btn{
        color: ${palette.text.disabled};
        strong{
          span{
            color: ${palette.text.disabled};
          }
        }
      }
    }
    .call_list_btn:first-child{
      padding-top: 6px;
      background-color: ${palette.gray.bright};
      strong{
        span{
          color: ${palette.text.light};
        }
      }
      .border_bottom{
        display: none;
      }
    }
    .call_list_btn:last-child{
      .border_bottom{
        display: none;
      }
    }
  }
  } 

  @media screen and (max-width: 579px) and (min-width: 230px) {
width: 100%;
  .call_form{
    width: 100%;
    padding: 30px;
  label,
  h4{
    font-size: 1.1rem;
  }
  p{
    padding-left: 14px;
    position: relative;
    color: ${palette.text.default};
    text-align: start;
    span{
      position: absolute;
      top: 0;
      left: 0;
      font-size: ${fontSize.medium};
      color: ${palette.main.default};
    }
  }
  } 
  }
`;

const StyledCallForm = styled.div`
  width: 360px;
  height: 530px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 15px;
  background-color: ${palette.gray.boxColor};
  box-shadow: ${palette.shadow};
  position: relative;
  overflow: hidden;
  .background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    z-index: 10;
  }
  h3{
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: ${fontWeight.medium};
  }
  .dot_wrap{
    margin-bottom: 30px;
    ${defaultFlexCenter}
    .dot{
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0;
    border-radius: 100px;
    background-color: ${palette.gray.bright};
  }
  .dot_active{
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0;
    border-radius: 100px;
    background-color: ${palette.main.default};
  }
  .hyphen{
    display: inline-block;
    width: 20px;
    height: 2px;
    margin: 0;
    background-color:${palette.gray.bright}; ;
  }
  .hyphen_active{
    display: inline-block;
    width: 20px;
    height: 2px;
    margin: 0;
    background-color:${palette.main.default}; ;
  }
  }
  h4{
    display: inline-block;
    width: 100%;
    margin: 0;
    margin-bottom: 20px;
    text-align: start;
    font-weight: ${fontWeight.regular};
    font-size: ${fontSize.regular};
  }
  .name,
  .calling{
    text-align: center;
    font-size: ${fontSize.micro};
    color: ${palette.text.light};
  }
  .name{
    font-size: 1.25rem;
    font-weight: ${fontWeight.medium};
    color: ${palette.black};
  }
  .calling_spinner{
    position: absolute;
    top: 220px;
    left: 50%;
    transform: translateX(-50%);
  }
  p{
    padding-left: 14px;
    position: relative;
    color: ${palette.text.default};
    text-align: start;
    span{
      position: absolute;
      top: 0;
      left: 0;
      font-size: ${fontSize.medium};
      color: ${palette.main.default};
    }
  }
  .btn_wrap{
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    ${defaultFlexCenter}
    justify-content: space-around;
    button{
    background-color: ${palette.opacity};
    border: 0;
    :hover{
      cursor: pointer;
    }
  }
  }
  @media screen and (max-width:579px) and (min-width: 230px) {
  width: 100%;
  height: 530px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 15px;
  background-color: ${palette.gray.boxColor};
  box-shadow: ${palette.shadow};
  position: relative;
  overflow: hidden;
  .background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    z-index: 10;
  }
  h3{
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: ${fontWeight.medium};
  }
  .dot_wrap{
    margin-bottom: 30px;
    ${defaultFlexCenter}
    .dot{
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0;
    border-radius: 100px;
    background-color: ${palette.gray.bright};
  }
  .dot_active{
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0;
    border-radius: 100px;
    background-color: ${palette.main.default};
  }
  .hyphen{
    display: inline-block;
    width: 20px;
    height: 2px;
    margin: 0;
    background-color:${palette.gray.bright}; ;
  }
  .hyphen_active{
    display: inline-block;
    width: 20px;
    height: 2px;
    margin: 0;
    background-color:${palette.main.default}; ;
  }
  }
  h4{
    display: inline-block;
    width: 100%;
    margin: 0;
    margin-bottom: 20px;
    text-align: start;
    font-weight: ${fontWeight.regular};
    font-size: ${fontSize.regular};
  }
  .name,
  .calling{
    text-align: center;
    font-size: ${fontSize.micro};
    color: ${palette.text.light};
  }
  .name{
    font-size: 1.25rem;
    font-weight: ${fontWeight.medium};
    color: ${palette.black};
  }
  .calling_spinner{
    position: absolute;
    top: 220px;
    left: 50%;
    transform: translateX(-50%);
  }
  p{
    padding-left: 14px;
    position: relative;
    color: ${palette.text.default};
    text-align: start;
    span{
      position: absolute;
      top: 0;
      left: 0;
      font-size: ${fontSize.medium};
      color: ${palette.main.default};
    }
  }
  .btn_wrap{
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    ${defaultFlexCenter}
    justify-content: space-around;
    button{
    background-color: ${palette.opacity};
    border: 0;
    :hover{
      cursor: pointer;
    }
  }
  }
  }
`;