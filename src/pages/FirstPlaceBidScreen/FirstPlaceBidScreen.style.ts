import styled from "@emotion/styled";

export const DropdownsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BidButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 400px) {
    gap: 3px;
  }
  @media (min-width: 400px) {
    gap: 20px;
  }
`;
