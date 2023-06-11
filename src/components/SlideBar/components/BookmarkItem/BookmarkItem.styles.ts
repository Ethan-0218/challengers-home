import styled from '@emotion/styled';

export const Container = styled.div`
  height: 39px;
  padding: 0 20px 0 30px;
`;

export const ItemContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 0 10px;
  align-items: center;
  cursor: pointer;
  gap: 6px;
  &:hover {
    background: #f5f5f5;
    border-radius: 10px;
  }
`;

export const Favicon = styled.img`
  width: 18px;
  height: 18px;
  object-fit: cover;
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #363636;
`;
