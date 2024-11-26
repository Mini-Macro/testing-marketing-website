import React from "react";
import "./Testimony.css";

const Testimony = () => {
  return (
    <div className="testimony-container">
      <div className="testimony-head">
        <div className="testimony-heading">Testimonials</div>
        <div className="testimony-heading-line"></div>
      </div>
      <div className="testimony-body">
        {/* -----Testimony 1----- */}
        <div className="testimony-content testimony-1">
          <div className="name-img-container">
            <img
              src="/Raghav Gokhle.jpg"
              alt="Raghav Gokhle"
              className="testimony-img"
            />

            <div className="name-container">
              <div className="testimony1-name">Raghav Gokhale</div>
              <div className="testimony1-profession">Chartered Accountant</div>
            </div>
          </div>
          <div className="testimony1-review">
            Finkeep is the backbone of the accounting at my firm.
          </div>
          <div className="testimony1-discription">
            "After partnering with them I no longer need to worry about
            completion and completeness of the accounts. Finkeep is a
            gamechanger for chartered accountants."
          </div>
        </div>
        {/* -----Testimony 2----- */}
        <div className="testimony-content testimony-2">
          <div className="name-img-container">
            <img
              src="/Savinay Agrawal.jpg"
              alt="Savinay Agrawal"
              className="testimony-img"
            />

            <div className="name-container">
              <div className="testimony2-name">Savinay Agarwal</div>
              <div className="testimony2-profession">Trader</div>
            </div>
          </div>
          <div className="testimony2-review">FinKeep helps me!</div>
          <div className="testimony2-discription">
            “ I learnt about Finkeep from a friend joined the monthly membership
            subscription. I no longer worry about correctness and completion on
            time, don’t have to take care of the hassle of changing and finding
            accountants. ”
          </div>
        </div>
        {/* -----Testimony 3----- */}
        <div className="testimony-content testimony-3">
          <div className="name-img-container">
            <img
              src="/Rakesh Dashwani.PNG"
              alt="Rakesh Dashwani"
              className="testimony-img"
            />

            <div className="name-container">
              <div className="testimony3-name">Rakesh Daswani</div>
              <div className="testimony3-profession">Chartered Accountant</div>
            </div>
          </div>
          <div className="testimony3-review">
            Such a life-changing experience. Highly recommended!
          </div>
          <div className="testimony3-discription">
            “Introduced to Finkeep by a friend, I joined the monthly
            subscription, eliminating worries about correctness and completion.
            No more hassle changing accountants; my shop is audit-ready"
          </div>
        </div>
        {/* -----Testimony 4----- */}
        <div className="testimony-content testimony-4">
          <div className="name-img-container">
            <img
              src="/Tanmay jain circle.jpeg"
              alt="Tanmay jain"
              className="testimony-img"
            />

            <div className="name-container">
              <div className="testimony4-name">Tanmay Jain</div>
              <div className="testimony4-profession">Entrepreneur</div>
            </div>
          </div>
          <div className="testimony4-review">
            Finkeep is the cornerstone of our firm's accounting operations.
          </div>
          <div className="testimony4-discription">
            "Teaming up with them erased my concerns about account accuracy.
            Finkeep revolutionizes chartered accountants' operations."
          </div>
        </div>

        {/* -----Testimony 5----- */}
        <div className="testimony-content testimony-5">
          <div className="name-img-container">
            <img
              src="/Suyash Gabhane circle.jpeg"
              alt="Suyash Gabhane"
              className="testimony-img"
            />

            <div className="name-container">
              <div className="testimony5-name">Suyash Gabhane</div>
              <div className="testimony5-profession">Entrepreneur</div>
            </div>
          </div>
          <div className="testimony5-review">
            Efficiency Elevated: Embracing Automation with FinKeep
          </div>
          <div className="testimony5-discription">
            "Working with FinKeep has been a game-changer for our business.
            Their embrace of automation has streamlined our accounting processes
            like never before. With their expertise, we've seen a significant
            increase in efficiency and accuracy in our financial operations.
            They've truly transformed the way we manage our finances, allowing
            us to focus more on strategic decision-making rather than getting
            bogged down in manual tasks. Highly recommend them to any business
            looking to modernize their accounting practices."
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
