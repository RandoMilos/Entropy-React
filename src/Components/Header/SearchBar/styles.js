import styled from "styled-components";

const SearchBarBody = styled.div`
    display: flex;
    flex-direction: row;
    padding: .3rem 1rem;
    width: 9rem;
    background-color: #060f41;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
`;

const SearchBarInput = styled.input`
    margin: 0;
    background-color: transparent;
    color: #F4F4F4;
    border: none;
    width: 6.1rem;

    &:focus{
        outline: none;
    }
`;

const NaviIcon = styled.img`
    width: 1.2rem;
`;

export {
    SearchBarBody,
    SearchBarInput,
    NaviIcon
}