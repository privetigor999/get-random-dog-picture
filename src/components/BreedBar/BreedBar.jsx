import React from "react";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getBreedData, getPicture } from "../../features/dogsSlice";

const BreedBar = () => {
  const dispatch = useDispatch();
  const { toggleShowBreeds, breedData } = useSelector((state) => state.dogs);
  const [inputValue, setInputValue] = React.useState("");

  const handleClickBreed = (breed) => {
    dispatch(getPicture(breed));
  };
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Type breed..."
        className={styles.input}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <ul>
        {breedData
          ?.filter((value) => value.includes(inputValue.toLowerCase()))
          .map((breed) => (
            <li key={Math.random()} onClick={() => handleClickBreed(breed)}>
              {breed}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BreedBar;
