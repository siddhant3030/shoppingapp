import styled from 'styled-components';

export const ButtonContainer = styled.button `
text-transform:capitalize;
font-size: 1.2rem;
border: 0.5rem solid;
cursor:pointer; 
margin: 0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background: var(--mainYellow);
}
$:focus{
    outline: none;
}
`