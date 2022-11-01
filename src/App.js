import React, { useState } from "react";

import arrowDown from "./images/icon-arrow-down.svg";

function App() {
  const faqData = [
    {
      id: 0,
      faq: " How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
      clicked: false,
    },
    {
      id: 1,
      faq: " What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
      clicked: false,
    },
    {
      id: 2,
      faq: " How do I reset my password?",
      answer:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
      clicked: false,
    },
    {
      id: 3,
      faq: " Can I cancel my subscription?",
      answer:
        "Yes! Send us a message and we’ll process your request no questions asked.",
      clicked: false,
    },
    {
      id: 4,
      faq: " Do you provide additional support?",
      answer:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
      clicked: false,
    },
  ];

  //const faqClicked = true;

  const [faqClicked, setFaqClicked] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const clickHandler = (props) => {
    const newFaqClicked = faqClicked.map((item, index) => {
      if (index === props) {
        item = true;
      } else {
        item = false;
      }

      return item;
    });

    setFaqClicked(newFaqClicked);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="col-2 col-img"></div>
        <div className="col-2">
          <h1 className="faq-section-title">FAQ</h1>
          <div className="faq-section">
            <div
              className="faq-element"
              onClick={() => clickHandler(faqData[0].id)}
            >
              <div className="faq-row">
                <span
                  className={
                    "faq-title " + (faqClicked[0] ? "text-bold" : null)
                  }
                >
                  {faqData[0].faq}
                </span>
                <div>
                  <img
                    src={arrowDown}
                    className={faqClicked[0] ? "rotate-arrow" : null}
                    alt="arrow"
                  />
                </div>
              </div>
              <div
                className={
                  "answer-text " + (faqClicked[0] ? "display-block" : null)
                }
              >
                {faqData[0].answer}
              </div>
            </div>

            <div
              className="faq-element"
              onClick={() => clickHandler(faqData[1].id)}
            >
              <div className="faq-row">
                <span
                  className={
                    "faq-title " + (faqClicked[1] ? "text-bold" : null)
                  }
                >
                  {faqData[1].faq}
                </span>
                <div>
                  <img
                    src={arrowDown}
                    className={faqClicked[1] ? "rotate-arrow" : null}
                    alt="arrow"
                  />
                </div>
              </div>
              <div
                className={
                  "answer-text " + (faqClicked[1] ? "display-block" : null)
                }
              >
                {faqData[1].answer}
              </div>
            </div>

            <div
              className="faq-element"
              onClick={() => clickHandler(faqData[2].id)}
            >
              <div className="faq-row">
                <span
                  className={
                    "faq-title " + (faqClicked[2] ? "text-bold" : null)
                  }
                >
                  {faqData[2].faq}
                </span>
                <div>
                  <img
                    src={arrowDown}
                    className={faqClicked[2] ? "rotate-arrow" : null}
                    alt="arrow"
                  />
                </div>
              </div>
              <div
                className={
                  "answer-text " + (faqClicked[2] ? "display-block" : null)
                }
              >
                {faqData[2].answer}
              </div>
            </div>

            <div
              className="faq-element"
              onClick={() => clickHandler(faqData[3].id)}
            >
              <div className="faq-row">
                <span
                  className={
                    "faq-title " + (faqClicked[3] ? "text-bold" : null)
                  }
                >
                  {faqData[3].faq}
                </span>
                <div>
                  <img
                    src={arrowDown}
                    className={faqClicked[3] ? "rotate-arrow" : null}
                    alt="arrow"
                  />
                </div>
              </div>
              <div
                className={
                  "answer-text " + (faqClicked[3] ? "display-block" : null)
                }
              >
                {faqData[3].answer}
              </div>
            </div>

            <div
              className="faq-element"
              onClick={() => clickHandler(faqData[4].id)}
            >
              <div className="faq-row">
                <span
                  className={
                    "faq-title " + (faqClicked[4] ? "text-bold" : null)
                  }
                >
                  {faqData[4].faq}
                </span>
                <div>
                  <img
                    src={arrowDown}
                    className={faqClicked[4] ? "rotate-arrow" : null}
                    alt="arrow"
                  />
                </div>
              </div>
              <div
                className={
                  "answer-text " + (faqClicked[4] ? "display-block" : null)
                }
              >
                {faqData[4].answer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
