import arrowDown from "./images/icon-arrow-down.svg";
import boxDesktop from "./images/illustration-box-desktop.svg";

function App() {
  const faqData = [
    {
      id: 0,
      faq: " How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      id: 1,
      faq: " What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      id: 2,
      faq: " How do I reset my password?",
      answer:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      id: 3,
      faq: " Can I cancel my subscription?",
      answer:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      id: 4,
      faq: " Do you provide additional support?",
      answer:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <div className="col-2 col-img">
          <img className="box-desktop" src={boxDesktop} alt="box-desktop" />
        </div>
        <div className="col-2">
          <h1>FAQ</h1>
          <div className="faq-section">
            <div className="faq-element">
              <span className="faq-text">{faqData[0].faq}</span>
              <div>
                <img src={arrowDown} alt="arrow-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
