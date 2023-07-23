import styled from 'styled-components';

const StyledContainer = styled.div`
 margin-left: 30%;
`;

const StyledParagraph = styled.p`
  white-space: pre-line;
  max-width: 50%;
  margin-top: 50px;
`;

function Contact() {
  return (
    <StyledContainer>
      <div>
        <h1>Welcome to Wild Adoption!</h1>
        <StyledParagraph>
          At Wild Adoption, we are passionate about connecting animals in need with loving homes. We believe that every animal deserves a chance to find happiness and companionship. Our mission is to facilitate the adoption process and ensure that both animals and adopters have a smooth and rewarding experience.
          {'\n\n'}
          Explore Our Animals:
          Browse through our diverse selection of animals available for adoption. From playful dolphins and monkeys to exotic birds and reptiles, we have a wide variety of species and breeds. Each animal profile provides detailed information about their species, category, life expectancy, weight, age, diet, and care difficulty.
          {'\n\n'}
          Adoption Process:
          Once you have found an animal that captures your heart, fill out our adoption form to express your interest. We ask for some basic information, including your first name, last name, phone number, and the animal you are interested in. Our team will review your application and get in touch with you to discuss the next steps.
          {'\n\n'}

          Thank you for considering adoption and making a difference in the lives of animals. Start your journey with Wild Adoption today!
        </StyledParagraph>
      </div>
    </StyledContainer>
  );
}

export default Contact;
