import styled from "styled-components";

interface RadioBoxProps{
    isActive: boolean;
    activeColor: 'green' | 'red';
}

export const Container = styled.form`
    font-family: 'Poppins';

    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: .25rem;
        background: #e7e9ee;
        border: 1px solid #d7d7d7;
        font-weight: 400 ;
        font-size: 1rem;

     &::placeholder{
         color: var(--text-body);
     }

     & + input{
         margin-top: 1rem;
     }
    }

    button{ 
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: .3s;
        font-weight: 600;

        &:hover{
            filter: brightness(.9)
        }
    }
`;

export const Content = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
`;

export const RadioBox = styled.button<RadioBoxProps>`
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;
        background: ${(props) => props.isActive ? '#ccc' : 'transparent'} !important;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .3s;
        font-weight: 600;
        border: 1px solid #ccc !important;

        &:hover{
            border-color: #aaa;
        }

        img{
            width: 20px;
            height: 20px;
        }

        span{
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title);
        }
    
`;