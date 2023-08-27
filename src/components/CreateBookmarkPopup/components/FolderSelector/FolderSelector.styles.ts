import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 17px;
  align-items: center;
  height: 51px;
`;

export const Label = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.25px;
  color: #222222;
`;

export const InputContainer = styled.div`
  position: relative;
  flex: 1;
  height: 50px;
  background: #fafafa;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  color: #878787;
`;

export const ListContainer = styled.div`
  position: absolute;
  top: 57px;
  left: 0px;
  width: 100%;

  background: #ffffff;
  border: 1px solid #e7e7e7;
  border-radius: 12px;
  padding: 20px;
  box-sizing: border-box;

  max-height: 230px;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListItem = styled.div`
  display: flex;
  width: 100%;
  height: 39px;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #222222;

  &:hover {
    background: #f5f5f5;
    border-radius: 12px;
  }
`;
