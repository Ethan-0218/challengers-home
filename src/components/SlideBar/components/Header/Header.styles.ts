import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  object-fit: cover;
`;

export const Nicname = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #111111;
`;
