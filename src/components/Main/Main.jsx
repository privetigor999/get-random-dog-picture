import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BarLoader } from "react-spinners";
import { getPicture, getBreedData } from "../../features/dogsSlice";
import wist from "../../images/wist.png";
import styles from "./styles.module.scss";

const Main = () => {
  const dispatch = useDispatch();

  const { data, toggleShowBreeds, breedData, loading } = useSelector(
    (state) => state.dogs
  );
  const handleClickRandomBtn = () => {
    dispatch(getPicture("random"));
  };

  React.useEffect(() => {
    dispatch(getBreedData());
  }, []);

  return (
    <div className={styles.wrapper}>
      {loading ? <BarLoader width={"100%"} /> : <p></p>}

      <div className={styles.mainBlock}>
        {" "}
        <button onClick={handleClickRandomBtn} className={styles.button}>
          <p>RANDOM</p>
          GET DOG
        </button>
        {data ? (
          <img className={styles.image} src={data} alt="dog" />
        ) : (
          <img className={styles.wist} src={wist} alt="dog" />
        )}
      </div>
      <p></p>
    </div>
  );
};

export default Main;
