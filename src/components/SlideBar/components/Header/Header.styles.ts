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
  gap: 12px;
`;

export const Profile = styled.img`
  width: 43px;
  height: 43px;
  border-radius: 22px;
  object-fit: cover;
`;

export const Nicname = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #111111;
`;
