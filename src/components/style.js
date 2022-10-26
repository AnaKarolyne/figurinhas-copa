import styled from 'styled-components'

export const DivLogin = styled.div`

box-sizing: border-box;
margin: auto;
padding: auto;

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

h1 {
  font-size: 24px;
  letter-spacing: 1px;
  margin: 20px 0;
  color: white;
}

h4 {
  font-size: 14px;
  letter-spacing: 1px;
  margin: 20px 0;
  color: white;
}

form {
  margin: 20px 0;
  background-color: #dfdfdf;
  padding-top: 30px;
  padding-right: 60px;
  padding-bottom: 30px;
  padding-left: 50px;
  border-radius: 20px;
}

form .input-block {
  margin-bottom: 20px;
}

form .input-block label {
  font-size: 14px;
  color: #4C0118;
}

form .input-block input {
  width: 100%;
  display: block;
  margin-top: 8px;
  padding: 7px;
  font-size: 16px;
  color: #32CD32;
  border-radius: 2px;
  border: 1px solid #ccddef;
  outline-color: #32CD32;
}

form .btn-login {
  display: block;
  min-width: 120px;
  border: none;
  background-color: #4C0118;
  color: white;
  border-radius: 25px;
  margin: auto;
  padding: 7px;
}

/* APARIÇÃO DO FORM */
form {
  overflow: hidden;
  animation: fade 0.5s;
}

form .input-block:nth-child(1) {
  animation: move 500ms;
}

form .input-block:nth-child(2) {
  animation: move 400ms;
  animation-delay: 300ms;
  animation-fill-mode: backwards;
}

form .btn-login {
  animation: move 400ms;
  animation-delay: 500ms;
  animation-fill-mode: backwards;
}

@keyframes move {
  from {
    opacity: 0;
    transform: translateX(-35%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
}}`


export const DivGeral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: calc(45);
  box-sizing: border-box;
  margin-top: 2em;
  margin-bottom: 2em;
  margin-left: 19em;
  margin-right: 19em;
  padding: auto;
  height: auto;
  background-color: #87082C;
  border-radius: 16px 16px 16px 16px;
  font-family: Roboto, Arial, sans-serif;

h1 {
  padding: 10px 50px;
  font-size: 34px;
  letter-spacing: 1px;
  margin: 20px 0;
  color: white;
}
`

export const DivCabeca = styled.div`
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 30px 30px ;
  border-radius: 15px 15px 0px 0px;
  display: flex;
  justify-content: center;

div{
  display: flex;
  justify-content: center;

  span{
    margin-top: 0.5em;
  }
}
`

export const DivRodape = styled.div`
  overflow: hidden;
  background-color: #ccc;
  padding: 10px 20px ;
  border-radius: 0px 0px 15px 15px;

  p {
  text-align: center;
  font-size: 14px;
  letter-spacing: 1px;
  color: #87082C;
}
`