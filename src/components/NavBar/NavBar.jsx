import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToggleShowBreeds } from "../../features/dogsSlice";
import BreedBar from "../BreedBar/BreedBar";
import { CSSTransition } from "react-transition-group";
import styles from "./styles.module.scss";
import Hamburger from "hamburger-react";
const NavBar = () => {
  const dispatch = useDispatch();
  const nodeRef = React.useRef(null);
  const { toggleShowBreeds } = useSelector((state) => state.dogs);
  const handleToggleChangeBreeds = () => {
    dispatch(setToggleShowBreeds());
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hamburgerBlock}>
          <button onClick={handleToggleChangeBreeds} className={styles.button}>
            <Hamburger
              toggled={toggleShowBreeds}
              color={"#191b1d"}
              size={20}
              className={styles.hamburger}
            />
            {toggleShowBreeds ? "hide" : "show"} breeds
          </button>
        </div>

        <b>GET RANDOM DOG PICTURES</b>
        <p className={styles.costylxDD}></p>
      </div>
      <CSSTransition
        nodeRef={nodeRef}
        in={toggleShowBreeds}
        timeout={1000}
        classNames="my-node"
      >
        <div ref={nodeRef}>{toggleShowBreeds && <BreedBar />}</div>
      </CSSTransition>
    </>
  );
};

export default NavBar;
