import styled from 'styled-components/macro';

const orange = '#dc5526';
const darkblue = '#313f5c';

export const ContactContainer = styled.div`
  width: 100%;
  padding: 5% 10%;
  background-color: #11192a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactTitle = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  @media screen and (max-width: 576.98px) {
    font-size: 2.8rem;
    line-height: 4.5rem;
  }
`;

export const TitleColor = styled.span`
  color: ${orange};
`;

export const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ContactForm = styled.form`
  max-width: 1100px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const FormLabel = styled.label`
  font-size: 20px;
  text-transform: uppercase;
  text-align: right;
  color: #fff;
  margin-top: 20px;
`;

export const FormInput = styled.input`
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: none;
  border-bottom: 3px solid #fff; /* Gray border */
  background: transparent;
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  color: white;
`;

export const FormTextArea = styled.textarea`
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: none;
  border-bottom: 3px solid #fff; /* Gray border */
  background: transparent;
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  color: white;
`;
export const FormButtonArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;
export const FromButton = styled.button`
  width: 40%;
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 20px 40px;
  border: 3px solid #fff;
  color: ${darkblue};
  border-radius: 10px;
  text-transform: uppercase;
  transition: all 0.6s ease-out;
    background-color: #fff;

  &:hover {
    border: 3px solid #fff;
    background-color: transparent;
    color: ${orange};
  }

  @media screen and (max-width: 576.98px) {
    width: 50%;
    padding: 10px 25px;

    font-size: 2rem;
  }
`;
