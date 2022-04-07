import styled from 'styled-components/macro';

const mainColor = '#000';
const goldGradient = 'linear-gradient(45deg,#f9f295,#e0AA3e,#f9f295,#b88a44)';
const goldColor = '#ffe44d';

export const ContactContainer = styled.div`
  width: 100%;
  padding: 5% 10%;
  background: linear-gradient(
    130deg,
    rgba(255, 255, 255, 0.1),
    rgba(221, 196, 188, 0.8)
  );
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
  color: ${mainColor};
  @media screen and (max-width: 576.98px) {
    font-size: 2.8rem;
    line-height: 4.5rem;
  }
`;

export const TitleColor = styled.span`
  background: ${goldGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 0.3px #000;
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
  color: #000;
  margin-top: 20px;
`;

export const FormInput = styled.input`
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: none;
  border-bottom: 3px solid #000; /* Gray border */
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
  border-bottom: 3px solid #000; /* Gray border */
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
  cursor: pointer;
  width: fit-content;
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 20px 40px;
  border: 3px solid ${mainColor};
  color: ${goldColor};
  border-radius: 10px;
  text-transform: uppercase;
  transition: all 0.6s ease-out;
  background-color: ${mainColor};

  &:hover {
    border: 3px solid ${mainColor};
    background-color: transparent;
    color: ${mainColor};
  }

  @media screen and (max-width: 576.98px) {
    width: 50%;
    padding: 10px 25px;

    font-size: 2rem;
  }
`;
