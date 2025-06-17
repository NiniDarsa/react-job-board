import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import useJobsListContext from "../hooks/useJobsListContext";

const Search = () => {
  const { searchText, handleChange } = useJobsListContext();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <StyleHead>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>
          <FaSearch />
        </p>

        <input
          value={searchText}
          onChange={handleChange}
          type="text"
          placeholder="Find remote developer jobs..."
        />
      </form>
    </StyleHead>
  );
};
export default Search;

const StyleHead = styled.div`
  display: flex;
  flex: 2;
  width: 100%;

  form {
    width: 25%;
    height: 100%;
    margin: auto;
    position: relative;
    input {
      width: 100%;
      height: 23%;
      padding-left: 3rem;
      border-radius: 0.4rem;

      &:focus {
        outline: none;
      }
      @media only screen and (max-width: 400px) {
        padding: 0.8rem;
      }
    }
    p {
      height: 23%;
      width: 10%;
      background-color: transparent;
      border: none;
      color: grey;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      @media only screen and (max-width: 400px) {
        display: none;
      }
    }
  }
`;
