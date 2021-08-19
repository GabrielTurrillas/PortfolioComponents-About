import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles'
import { device } from '../styles/viewportsSizes';

const About = ({ english, title, engTitle, text, engText }) => {
  return (
    <>
      <GlobalStyles />
      <AboutContainer>
        <TitleArea>
          <Title>{english ? engTitle : title}</Title>
        </TitleArea>
        <TextArea>
          <Text>{english ? engText : text}</Text>
        </TextArea>
      </AboutContainer>
    </>
  );
}

export default About;


const AboutContainer = styled.div`
  display: grid;
  grid-template-areas:'TitleArea'
  'TextArea';
  height:100vh;
  background: #010606;
  color: white;
  padding:0 3rem;
  text-align:center;
  @media ${device.mobileL}{
    padding:0 5rem;
  }
  @media ${device.laptop}{
    padding:0 10rem;
  }
  @media ${device.desktop} {
    padding:0 15rem;
  }
`
const TitleArea = styled.div`  
  grid-area:TitleArea;
  display:flex;
  justify-content:center;
  align-items:center;
`

const Title = styled.h2`
  @media ${device.mobileM}{
    font-size:2rem;
  }
  @media ${device.mobileL}{
    font-size:2.5rem;
  }
  @media ${device.laptop}{
    font-size:4rem;
  }
  @media ${device.desktop}{
    font-size:6rem;
    margin-top:7rem;
  }
`

const TextArea = styled.div`
  grid-area:TextArea;
`

const Text = styled.article`
  @media ${device.mobileM}{
    font-size:1.1rem;
  }
  @media ${device.mobileL}{
    font-size:1.4rem;
  }
  @media ${device.laptopL}{
    font-size:1.7rem;
  }
  @media ${device.desktop}{
    font-size:2.5rem;
  }
`