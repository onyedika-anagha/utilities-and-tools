import { useState } from "react";
import Button from "../../components/buttons/button.component";
import CustomButton from "../../components/buttons/custom-button.component";
import ShapeOne from "../../components/shapes/shape-one.component";

const Calculator = () => {
  const [result, setResult] = useState(""),
    [initialValue, setInitialValue] = useState(""),
    [history, setHistory] = useState("History");

  const handleClick = (value) => {
      if (
        isNaN(Number(initialValue[initialValue.length - 1])) &&
        isNaN(Number(value))
      )
        return false;
      const init = `${initialValue}${value}`;
      setInitialValue(init);
      setResult(init);
    },
    clear = () => {
      console.log("clear");
      setInitialValue("");
      setResult("");
    },
    deleteSingleNum = () => {
      const value = result.substring(0, result.length - 1);
      setInitialValue(value);
      setResult(value);
    },
    equalTo = () => {
      if (result !== "") {
        try {
          // eslint-disable-next-line no-eval
          const evaluatedValue = eval(result);
          if (evaluatedValue) {
            setHistory(result);
            setResult(evaluatedValue);
            setInitialValue(evaluatedValue);
          } else {
            console.log(evaluatedValue);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("please enter any Number");
      }
    };
  return (
    <div id="app-body">
      <ShapeOne />
      <div className="main">
        <div className="display">
          <p id="result">{result}</p>
          <p id="history">
            <i className="fa fa-history" aria-hidden="true"></i>&nbsp;{history}
          </p>
        </div>
        <div className="buttons">
          <CustomButton
            children={"C"}
            className="clear"
            id="clear"
            handleClick={clear}
          />
          <CustomButton
            children={<i className="fa fa-scissors" aria-hidden="true"></i>}
            id="delete_single_num"
            className="delete_single_num"
            handleClick={deleteSingleNum}
          />
          <Button value={"/"} handleClick={handleClick} />
          <Button value={"*"} handleClick={handleClick} />
        </div>
        <div className="buttons">
          <Button value={7} handleClick={handleClick} />
          <Button value={8} handleClick={handleClick} />
          <Button value={9} handleClick={handleClick} />
          <Button value={"-"} handleClick={handleClick} />
        </div>
        <div className="buttons">
          <Button value={4} handleClick={handleClick} />
          <Button value={5} handleClick={handleClick} />
          <Button value={6} handleClick={handleClick} />
          <Button value={"+"} handleClick={handleClick} />
        </div>
        <div className="buttons">
          <Button value={1} handleClick={handleClick} />
          <Button value={2} handleClick={handleClick} />
          <Button value={3} handleClick={handleClick} />
          <Button value={"."} handleClick={handleClick} />
        </div>
        <div className="buttons">
          <Button value={0} handleClick={handleClick} />
          <Button value={"00"} handleClick={handleClick} />
          <CustomButton
            handleClick={equalTo}
            id="equalTo"
            children={"="}
            className="button"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
