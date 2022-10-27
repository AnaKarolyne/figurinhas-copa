import styled from 'styled-components'

export const DivLogin = styled.div`

position: absolute;
box-sizing: border-box;
margin: auto;
left: 0;
right: 0;
bottom: 0;
background-color: #4C0118;
width: 100%;
height: 93.5%;

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
  margin-top: 2em;
  margin-bottom: 2em;
  margin-left: auto;
  margin-right: auto;
  height: 2em;
  font-family: Roboto, Arial, sans-serif;

h1 {
  padding: 10px 50px;
  font-size: 34px;
  letter-spacing: 1px;
  margin: 20px 0;
  color: white;
}
`

export const DivCabecaLogin = styled.div`
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

export const DivCabeca = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  background-color: #f1f1f1;
  left: 0;
  top: 0;
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

export const DivRodapeLogin = styled.div`
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

export const DivRodape = styled.div`
  overflow: hidden;
  background-color: #ccc;
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 8%;
  left: 0;

  p {
  text-align: center;
  font-size: 14px;
  letter-spacing: 1px;
  color: #87082C;
}
`

export const DivContainer = styled.div`

  position: absolute;
  left: 0;
  width: 97.5%;
  min-height: 85vh;
  padding: 19px;
  margin-top: -0.2em;
  background-color: #87082C;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  div{
    display: flex;
    justify-content: center;
  }

  img{
    align-self: center;
  }
`