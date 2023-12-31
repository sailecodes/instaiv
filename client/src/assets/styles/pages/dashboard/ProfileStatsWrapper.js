import styled from "styled-components";

const ProfileStatsWrapper = styled.div`
  grid-row: 3;
  grid-column: 1 / -1;

  display: grid;
  place-items: center;

  span {
    color: var(--color-gray);

    font-size: var(--font-sm-1);
  }

  p,
  button {
    color: var(--color-white);

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 5.4rem;

    font-size: var(--font-sm-1);
    font-weight: 400;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 100%;
    width: 100%;

    border-top: 1px solid var(--color-btn-hover);
  }

  @media (min-width: 425px) {
    span {
      font-size: var(--font-sm-2);
    }

    p,
    button {
      font-size: var(--font-sm-2);
    }
  }

  @media (min-width: 768px) {
    grid-row: 2;
    grid-column: 2;

    span,
    p,
    button {
      color: var(--color-white);
    }

    p,
    button {
      flex-direction: row;
      gap: 0.5rem;

      width: fit-content;
    }

    section {
      position: relative;
      bottom: 80%;

      justify-content: flex-start;
      gap: 2rem;

      border: none;

      padding-left: 0.8rem;
    }
  }
`;

export default ProfileStatsWrapper;
