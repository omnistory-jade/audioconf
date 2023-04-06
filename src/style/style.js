import styled, { css } from 'styled-components';

export const signinUpBtn = css`
width: 410px;
height: 48px;
border: 0;
border-radius: 5px;
background-color: #FA5734;
font-size: 1.125rem;
color: white;
`;

export const disabledBtn = css`
width: 410px;
height: 48px;
border-radius: 5px;
background-color: rgba(255,83,29,0.5);
font-size: 1rem;
color: white;
`;

export const defaultInput = css`
width: 408px;
height: 48px;
padding: 10px;
border: 1px solid #d1d1d1;
border-radius: 5px;
::placeholder{
  font-size: 0.95rem;
  color: #d1d1d1;
  padding-left: 10px;
}
outline: none;
`;

export const defaultFlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const transformXCenter = css`
  left: 50%;
  transform: translateX(-50%);

`;

export const absoluteCenter = css`
position: absolute;
top:50%;
left:50%;
transform: translate(-50%,-50%);
`;


export const defaultButton = css`
border: 0;
border-radius: 10px;
box-shadow: -2px 0 10px rgba(0,0,0,0.08);
background-color: #fff;
`;




export const fontBox = css`
width: 120px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
background-color: #EBEBEB;
border-radius: 5px;
`;


export const size = {
  width: '1200px',
  footer: '150px',
  left: '250px',
};

export const fontSize = {
  large: '2.75rem',
  medium: '1.5rem',
  regular: '1.125rem',
  small: '1rem',
  micro: '0.875rem',
  space: '0.75rem',
  devDocTitle:'40px',
  devDocSecTitle: '36px',
  devDocSubTitle: '28px',
  devDocText: '16px',
  devDocStrong: '15px',
};

export const fontWeight = {
  bold: 700,
  semiBold: 600,
  medium:500,
  regular: 400,
  light: 300
};

export const palette = {
  white: '#FFF',
  black: '#000',
  gray: {
    light: '#f9f9f9',
    bright:'#EBEBEB',
    middle: '#C4C4C4',
    dark: '#9D9D9D',
    boxColor:'#fafafa',
    camera:'#d9d9d9',
    normal: '#A4A3A3',
    formBorder: '#D1D1D1',
    consoleBar: '#D7D7D7',
    main: '#6b7684'
  },
  main: {
    // default: '#E86B3A',
    default: '#FA5734',
    bright:'#E86B3A',
    // default: '#3182F6',
    light: '#FFAB8F',
    vivid: '#FF531D',
    // vivid: '#0a68eb',
    disabled:'rgba(255,83,29,0.5)',
    // disabled: 'rgba(49, 130, 246, 0.46)'
    darker: '#de4917'
  },
  opacity: 'rgba(0,0,0,0)',
  text: {
    default: '#333',
    light: '#666',
    disabled:'#999',
    gray: '#A4A3A3',
  },
  blue: {
    default: '#FA5734',
    dark: '#ED571D',
    lighten: 'rgba(255, 140, 140, 0.2)',
  },
  red: {
    default: '#07BF72',
    dark: '#06AD67',
  },
  shadow: '-2px 0 10px rgba(0,0,0,0.08)',
  btnShadow:'3px 2px 2px rgba(0,0,0,0.1)'
};
export const LoadingBackground = styled.div`
  position: absolute;
  /* width: 100vw; */
  /* height: 100vh; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
   /* background: #ffffffb7;   */
  /* background-color: rgba(0, 0, 0, .7); */
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

export const PopupLoadingBackground = styled.div`
position: absolute;
  top: 40%;
  left: 40%;
  /* background: #ffffffb7;  
   */
  background-color: transparent;
  z-index: 999;
`;
export const DualPopupLoadingBackground = styled.div`
position: absolute;
  top: 35%;
  left: 35%;
  /* background: #ffffffb7;  
   */
  background-color: transparent;
  z-index: 999;
`;

export const LoadingText = styled.div`
  font: 1rem 'Pretendard';
  text-align: center;
`;
export const StyledPagination = styled.div` 
.pagination {
    display: flex;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 30px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li:first-child{
    border-radius: 5px 0 0 5px;
  }

  ul.pagination li:last-child{
    border-radius: 0 5px 5px 0;
  }
  
  ul.pagination li a {
    text-decoration: none;
    color: #E86B3A;
    font-size: 1rem;
  }
  
  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #E86B3A;
  }
  
  ul.pagination li:hover,
  ul.pagination li a.active {
    background-color: ${palette.main.disabled};
  }
  
  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }

`;

export const breakpoint = {
  lg: '740px',
  md: '480px',
  sm: '320px',
};

export const zIndex = {
  headerMenu: 20,
  leftMenu: 10,
  popup: 100,
};

export const StyledDiv = styled.div`
width: 100%;
min-height: 70vh;
padding-top: 120px;
section{
    padding-left: 240px;
    .title{
    width: 100%;
    margin-bottom: 50px;
    border-bottom: 1px solid ${palette.gray.middle};
    h3{
      margin-bottom: 20px;
      font-size: 1.75rem;
      font-weight: ${fontWeight.semiBold};
    }
  }
  article{
    margin-bottom: 50px;
    ${defaultFlexCenter}
    justify-content: flex-start;
    flex-wrap: wrap;
    button{
        font-size: 1.25rem;
        background-color: ${palette.opacity};
        border: 0;
        color: #333;
        :hover{
          cursor: pointer;
        }
    }
    .card{
      width: 100%;
      ${defaultFlexCenter}
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }
}

@media screen and (max-width:979px) and (min-width: 580px) {
section{
    padding:0 5%;
  article{
    ${defaultFlexCenter}
    margin-right: 0;
  }
}
}

@media screen and (max-width:579px) and (min-width: 230px) {
padding-top: 80px;
section{
    padding: 0 5%;
    .title{
    h3{
      margin-bottom: 30px;
      font-size: 1.5rem;
      font-weight: ${fontWeight.medium};
    }
  }
  article{
    margin-bottom: 20px;
    ${defaultFlexCenter}
    justify-content: flex-start;
    flex-wrap: wrap;
    .card{
      width: 100%;
      ${defaultFlexCenter}
      justify-content: center;
      flex-wrap: wrap;
    }
  }
}

}
`;

export const StyledContents = styled.div`
width: 100%;
padding-top: 120px;
padding-bottom: 120px;
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

export const StyledCallForm = styled.div`
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
  .refresh_button{
    position: absolute;
    top: 156px;
    right: 30px;
    color: ${palette.text.light};
    border: 0;
    background-color: ${palette.opacity};
    :hover{
      color: #469BF8;
      cursor: pointer;
    }
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
  h4{
    display: inline-block;
    width: 100%;
    margin: 0;
    margin-bottom: 20px;
    text-align: start;
    font-weight: ${fontWeight.regular};
    font-size: ${fontSize.regular};
  }
  .call_list_container{
    .call_list_btn{
      width: 100%;
      display: flex;
      align-items: center;
      box-shadow: ${palette.shadow};
      /* loding list */
      button{
        width: 100%;
        padding: 10px;
        color: ${palette.text.default};
        background-color: ${palette.opacity};
        border: 0;
      }
    }
      /* reginum */
    .call_list_btn:first-child{
      display: block;
      width: 100%;
      padding:10px;
      text-align: center;
      border-top-left-radius:5px;
      border-top-right-radius:5px;
      background-color: ${palette.gray.middle};
      strong{
        width: 100%;
        ${defaultFlexCenter}
        justify-content: space-between;
        font-size: ${fontSize.micro};
        font-weight: ${fontWeight.regular};
        color: ${palette.text.default};
      }
    }
    .list_btn{
      button{
        width: 280px;
        padding: 10px;
        border: 0;
        strong{
        width: 100%;
        ${defaultFlexCenter}
        justify-content: space-between;
        font-size: ${fontSize.micro};
        font-weight: ${fontWeight.regular};
        color: ${palette.text.disabled};
        .border_bottom{
          display: inline-block;
          width: 100%;
          height: 1px;
          background-color:${palette.gray.middle};
        }
        }
      }
      .active_state{
        width: 280px;
        padding: 10px;
        border: 1px solid ${palette.gray.middle};
        background-color: ${palette.white};
        display: flex;
        justify-content: flex-start;
      }
      :hover .active_state{
        /* background-color: #469BF8; */
        cursor: pointer;
          color: ${palette.main.default};
      }
      .active_state,
      .border_none{
        border-top: 0;
      }
      .busy_btn{
        border: 1px solid ${palette.gray.middle};
        border-top: 0;
      }
      .selected{
        width: 280px;
        padding: 10px;
        border: 1px solid ${palette.gray.middle};
        border-top: 0;
        background-color: ${palette.white};
        display: flex;
        justify-content: space-between;
        color: ${palette.main.default};
        font-weight: ${fontWeight.semiBold};
        :hover{
          cursor: pointer;
        }
      }
    }
    .list_btn:last-child{
      button{
        border-top: 0;
        border-bottom-right-radius: 5px ;
        border-bottom-left-radius: 5px ;
      }
    }
  }
}
@media screen and (max-width: 579px) and (min-width: 230px) {
width: 100%;
.call_form{
  width: 100%;
  padding: 30px;
  h4{
    font-size: 1.1rem;
  }
  .call_list_container{
    .call_list_btn{
      width: 100%;
      display: flex;
      align-items: center;
      box-shadow: ${palette.shadow};
      /* loding list */
      button{
        width: 100%;
        padding: 10px;
        color: ${palette.text.default};
        background-color: ${palette.opacity};
        border: 0;
      }
    }
      /* reginum */
    .call_list_btn:first-child{
      display: block;
      width: 100%;
      padding:10px;
      text-align: center;
      border-top-left-radius:5px;
      border-top-right-radius:5px;
      background-color: ${palette.gray.middle};
      strong{
        width: 100%;
        ${defaultFlexCenter}
        justify-content: space-between;
        font-size: ${fontSize.micro};
        font-weight: ${fontWeight.regular};
        color: ${palette.text.default};
      }
    }
    .list_btn{
      /* border: 1px solid red; */
      button{
        width: 100%;
      }
      .active_state{
        width: 100%;
      }
      .selected{
        width: 100%;
      }
    }
  }
}

}
`;