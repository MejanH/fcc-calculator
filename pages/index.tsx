import Head from "next/head";
import { useState } from "react";
import { evaluate } from "mathjs";

export default function Home() {
  const [display, setDisplay] = useState("");
  const [point, setPoint] = useState(true);

  function getResult() {
    setDisplay(evaluate(display));
  }

  function calculate(event) {
    let val = event.target.value;
    setDisplay(display + val);
  }

  function onFunc(event) {
    let value = event.target.value;

    let last = display.toString().slice(-2);

    let bool = /\d+/.test(last);
    console.log(bool);

    if (!bool) {
      let result = display.slice(0, -2);
      setDisplay(result + value);
      setPoint(true);
    } else {
      setDisplay(display + value);
      setPoint(true);
    }
  }

  function clearPrev() {
    setDisplay("");
    setPoint(true);
  }
  function leadingZero(event) {
    let bool = /\d|\./.test(display.toString().slice(-1));

    if (display === "" || bool === false) {
      return;
    } else {
      setDisplay(display + event.target.value);
    }
  }

  function moreDots(event) {
    if (point === true) {
      setDisplay(display + event.target.value);
      setPoint(false);
    }
  }

  return (
    <div>
      <Head>
        <title>React Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>React Calculator</h1>
        <div className="calc">
          <div className="top">
            <div className="group1">
              <div className="curr">{display}</div>
              <div id="display">{display === "" ? `0` : display}</div>
            </div>
          </div>
          <div className="bottom">
            <button id="clear" className="func btn item1" onClick={clearPrev}>
              AC
            </button>
            <button
              id="divide"
              className="func btn item2"
              value="/"
              onClick={onFunc}
            >
              /
            </button>
            <button
              id="multiply"
              className="func btn item3"
              value="*"
              onClick={onFunc}
            >
              X
            </button>
            <button
              value="7"
              id="seven"
              className="digits btn item4"
              onClick={calculate}
            >
              7
            </button>
            <button
              value="8"
              id="eight"
              className="digits btn item5"
              onClick={calculate}
            >
              8
            </button>
            <button
              value="9"
              id="nine"
              className="digits btn item6"
              onClick={calculate}
            >
              9
            </button>
            <button
              id="subtract"
              className="func btn item7"
              value="-"
              onClick={onFunc}
            >
              -
            </button>
            <button
              value="4"
              id="four"
              className="digits btn item8"
              onClick={calculate}
            >
              4
            </button>
            <button
              value="5"
              id="five"
              className="digits btn item9"
              onClick={calculate}
            >
              5
            </button>
            <button
              value="6"
              id="six"
              className="digits btn item10"
              onClick={calculate}
            >
              6
            </button>
            <button
              id="add"
              className="func btn item11"
              value="+"
              onClick={onFunc}
            >
              +
            </button>
            <button
              id="one"
              className="digits btn item12"
              value="1"
              onClick={calculate}
            >
              1
            </button>
            <button
              id="two"
              className="digits btn item13"
              value="2"
              onClick={calculate}
            >
              2
            </button>
            <button
              value="3"
              id="three"
              className="digits btn item14"
              onClick={calculate}
            >
              3
            </button>
            <button id="equals" className="func btn item15" onClick={getResult}>
              =
            </button>
            <button
              value="0"
              id="zero"
              className="digits btn item16"
              onClick={leadingZero}
            >
              0
            </button>
            <button
              value="."
              id="decimal"
              className="digits btn item17"
              onClick={moreDots}
            >
              .
            </button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">
          by <strong>Muhammad Mejanul Haque</strong>
        </p>
      </footer>
    </div>
  );
}
