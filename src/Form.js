import React, { useState } from "react";
import styles from "./styles/Form.module.css";

function Form(props) {
  const { updateImages } = props;
  const [username, setUsername] = useState("");
  const [period, setPeriod] = useState("overall");
  const [gridSize, setGridSize] = useState("9");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  const handleGridSizeChange = (event) => {
    setGridSize(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateImages(username, period, gridSize);
    setUsername("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.input}>
        <label>
          Enter username:
          <input
            className={styles.box}
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
      </div>
      <div className={styles.input}>
        <label>
          Choose period:
          <select
            className={styles.box}
            value={period}
            onChange={handlePeriodChange}
          >
            <option value="overall">Overall</option>
            <option value="7day">7 Days</option>
            <option value="1month">1 Month</option>
            <option value="3month">3 Months</option>
            <option value="6month">6 Months</option>
            <option value="12month">12 Months</option>
          </select>
        </label>
      </div>
      <div className={styles.input}>
        <label>
          Choose grid:
          <select
            className={styles.box}
            value={gridSize}
            onChange={handleGridSizeChange}
          >
            <option value="9">3x3</option>
            <option value="16">4x4</option>
            <option value="25">5x5</option>
            <option value="49">7x7</option>
            <option value="100">10x10</option>
          </select>
        </label>
      </div>
      <input className={styles.button} type="submit" value="send" />
    </form>
  );
}

export default Form;
