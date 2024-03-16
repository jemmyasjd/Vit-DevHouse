import { useCallback, useEffect } from "react";
import "./Desktop.css";
import {useNavigate} from 'react-router-dom'


const Desktop = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]",
    );
    const observer = new IntersectionObserver(
      ( entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      },
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const navigate = useNavigate();
  const onExploreButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='howToUse']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onTranslatingButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contentContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onJoinComunityButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='joinBoxContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <div className="desktop-1">
      <div className="join-box" data-scroll-to="joinBoxContainer">
        <div className="container">
          <div className="headings">
            <b className="join-main-heading">{`Join our Revolution for dumb & deaf community`}</b>
            <div className="join-subheading">
              “Donate to Empower: Building Bridges for the Deaf Community.”
            </div>
          </div>
          <button className="join-button">
            <div className="text-container">
              <div className="join-text">Donate</div>
            </div>
          </button>
        </div>
      </div>
      <div className="content" data-scroll-to="contentContainer">
        <div className="tools-container">
          <b className="tool-main-heading">Translation Tools</b>
          <div className="tool-subheading">Diverse conversion utilities</div>
        </div>
        <div className="cards-grid">
          <div className="feature-1">
            <img className="image-lummi" alt="" src="/image--lummi@2x.jpg" />
            <div className="copy">
              <button onClick={()=> navigate('/trans')} className="card-title">{`Text Conversion & Speech Translation`}</button>
              <div className="card-description">
                <p className="convert-sign-language">
                  Convert sign language gestures into written text for seamless
                  communication.
                </p>
                <p className="convert-sign-language">
                  Translate sign language gestures into spoken words for
                  effortless verbal communication.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-1">
            <img className="image-lummi" alt="" src="/alpha.jpg" />
            <div className="copy1">
              <button onClick={()=> navigate('/alpha')} className="card-title"  >{`Alphabet & Numeric Assistance `}</button>
              <div className="card-description1">
                Access visual guides and interactive learning tools for
                mastering sign language alphabets and numerics.
              </div>
            </div>
          </div>
          <div className="feature-1">
            <img className="image-lummi" alt="" src="/word.jpg" />
            <div className="copy1">
              <button onClick={()=> navigate('/word')}  className="card-title">Word Builders</button>
              <div className="card-description1">
                <ul className="expand-sign-language-vocabular">
                  <li>
                    Expand sign language vocabulary with tailored word-building
                    exercises and practice.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="feature-1">
            <img className="image-lummi" alt="" src="/trans.jpg" />
            <div className="copy1">
              <button onClick={()=> navigate('/lan')}  className="card-title">Language Translator</button>
              <div className="card-description1">
                Translate text between different languages for seamless
                communication across linguistic barriers.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-to-use" data-scroll-to="howToUse">
        <div className="container1">
          <b className="use-container">Translation Made Easy</b>
          <div className="number">
            <img className="image-5-icon" alt="" src="/image-5@2x.png" />
            <div className="content1">
              <div className="use-sub-heading">
                Initiate Gesture Recognition:
              </div>
              <div className="use-sub-heading-container">
                <ul className="begin-by-accessing-our-user-fr">
                  <li className="begin-by-accessing">
                    Begin by accessing our user-friendly interface on your
                    preferred device.
                  </li>
                  <li>
                    Select the "Gesture Recognition" option to activate the
                    feature.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="number1">
            <div className="content1">
              <div className="use-sub-heading">
                Perform Sign Language Gestures:
              </div>
              <div className="use-sub-heading-container1">
                <ul className="begin-by-accessing-our-user-fr">
                  <li className="begin-by-accessing">
                    Position yourself in front of your device's camera.
                  </li>
                  <li>
                    {" "}
                    Perform your desired sign language gestures clearly and
                    within the camera's view.
                  </li>
                </ul>
              </div>
            </div>
            <img className="image-6-icon" alt="" src="/image-6@2x.png" />
          </div>
          <div className="number2">
            <img className="image-5-icon" alt="" src="/image-7@2x.png" />
            <div className="content1">
              <div className="use-sub-heading">Choose Output Format:</div>
              <div className="use-sub-heading-container">
                <ul className="begin-by-accessing-our-user-fr">
                  <li className="begin-by-accessing">
                    Utilize our advanced technology to interpret your gestures
                    seamlessly.
                  </li>
                  <li className="begin-by-accessing">
                    Select your desired output:
                  </li>
                </ul>
                <p className="convert-sign-language">
                  {" "}
                  1. For written text: Opt for "Text Translation" to view
                  translated text on-screen.
                </p>
                <p className="convert-sign-language">
                  {" "}
                  2. For spoken words: Choose "Speech Translation" for
                  translated text via audio playback.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="number3">
          <div className="content1">
            <div className="use-sub-heading">Explore Additional Features:</div>
            <div className="use-sub-heading-container">
              <ul className="begin-by-accessing-our-user-fr">
                <li className="begin-by-accessing">
                  Enhance your communication experience with our array of
                  features.
                </li>
                <li>
                  Customize settings and explore options like multilingual
                  support and text-to-speech conversion.
                </li>
              </ul>
            </div>
          </div>
          <img className="image-8-icon" alt="" src="/image-8@2x.png" />
        </div>
        <div className="number4">
          <img
            className="image-9-icon"
            alt=""
            src="/screenshot-20240316-005620-1@2x.png"
          />
          <div className="content1">
            <div className="use-sub-heading">Provide Feedback:</div>
            <div className="use-sub-heading-container">
              <ul className="begin-by-accessing-our-user-fr">
                <li className="begin-by-accessing">
                  Share your usage experience and insights with us.
                </li>
                <li>
                  Your feedback, accessible through our integrated mechanisms,
                  assists in refining our services to better serve your needs.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="number5">
          <div className="content1">
            <div className="use-sub-heading">Engage with the Community:</div>
            <div className="use-sub-heading-container">
              <ul className="begin-by-accessing-our-user-fr">
                <li className="begin-by-accessing">
                  Join our dynamic user community and advocate network.
                </li>
                <li>
                  Share insights, experiences, and collaborative suggestions to
                  foster a supportive environment.
                </li>
              </ul>
            </div>
          </div>
          <img className="image-9-icon" alt="" src="/image-9@2x.png" />
        </div>
        <div className="number6">
          <img className="image-5-icon" alt="" src="/image-7@2x.png" />
          <div className="content1">
            <div className="use-sub-heading">Support Our Mission:</div>
            <div className="use-sub-heading-container">
              <ul className="begin-by-accessing-our-user-fr">
                <li className="begin-by-accessing">
                  Contribute to our crowdfunding campaign, championing
                  inclusivity and accessibility.
                </li>
                <li className="begin-by-accessing">
                  Your contributions drive our ongoing development and
                  enhancement efforts, benefiting all users.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="features-heading">
          <b className="features-main-heading">Real-time Translation</b>
          <div className="features-sub-heading">“Sign to text in seconds”</div>
        </div>
        <div className="feature-grid">
          <div className="feature-11">
            <img
              className="rounded-rectangle-icon"
              alt=""
              src="/rounded-rectangle@2x.png"
            />
            <div className="feature-title">Multiple Languages</div>
            <div className="feature-description">
              Support for various sign languages.
            </div>
          </div>
          <div className="feature-11">
            <img
              className="rounded-rectangle-icon"
              alt=""
              src="/regis.jpg"
            />
            <div className="copy4">
              <div className="use-sub-heading">No Registration</div>
              <div className="feature-description1">
                Access without an account.
              </div>
            </div>
          </div>
          <div className="feature-11">
            <img className="image-lummi5" alt="" src="/image--lummi@2x.png" />
            <img className="image-4-icon" alt="" src="/image-4@2x.png" />
            <div className="copy4">
              <div className="use-sub-heading">User-Friendly Design</div>
              <div className="feature-description1">
                Intuitive and easy to navigate.
              </div>
            </div>
          </div>
          <div className="feature-11">
            <img
              className="rounded-rectangle-icon"
              alt=""
              src="/pri.jpg"
            />
            <div className="copy4">
              <div className="use-sub-heading">Privacy First</div>
              <div className="feature-description1">
                Your data stays with you.
              </div>
            </div>
          </div>
          <div className="feature-11">
            <img
              className="rounded-rectangle-icon"
              alt=""
              src="/commu.jpg"
            />
            <div className="copy4">
              <div className="use-sub-heading">Community Driven</div>
              <div className="feature-description1">
                Built with user feedback.
              </div>
            </div>
          </div>
          <div className="feature-11">
            <img src="./24.jpg" className="image-lummi8" />
            <div className="copy4">
              <div className="use-sub-heading">24/7 Support</div>
              <div className="feature-description1">
                We're here to assist you.
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="desktop-1-child" alt="" src="/ellipse-4.svg" />
      <div className="desktop-1-item" />
      <div className="end">
        <div className="content8">
          <div className="sign-language">
            <div className="brand">
              <img className="icon" alt="" src="/icon.svg" />
              <div className="brandname">Techie Nerds Team</div>
            </div>
            <div className="brandname1">
              Bridging Communication Gaps in the Worlds!
            </div>
          </div>
          <div className="links" />
        </div>
        <div className="list">
          <div className="brandname">Team Members</div>
          <div className="list-link-item">Shaily</div>
          <div className="list-link-item">Himanshi</div>
          <div className="list-link-item">Ronit</div>
          <div className="list-link-item">Jemmy</div>
        </div>
      </div>
      <div className="vision-content">
        <div className="frame">
          <b className="tagline">"Breaking Barriers, Embracing Connection."</b>
        </div>
        <div className="frame1">
          <div className="description">
            Our vision is to foster seamless communication across all sign
            languages, enriching accessibility and empowerment within the deaf
            community. By breaking down linguistic barriers through innovative
            sign-to-text translation services, we aim to transcend boundaries
            and ensure inclusivity for all.
          </div>
        </div>
        <div className="frame2">
          <b className="our-vision" data-animate-on-scroll>
            Our Vison
          </b>
        </div>
      </div>
      <div className="frame3">
        <div className="navbar">
          <div className="navigation-right">
            <div className="navigation">
              <button className="home">HOME</button>
              <button className="home">ABOUT US</button>
              <button className="home">CONTACT US</button>
            </div>
          </div>
          <div className="explore-link">
            <button className="explore-button" onClick={onExploreButtonClick}>
              <div className="text-container">
                <div className="explore-text">Explore</div>
              </div>
            </button>
          </div>
        </div>
        <div className="sign-language-translator">Sign Language Translator</div>
        <div className="frame-child" />
        <img className="logo-icon" alt="" src="/logo@2x.png" />
      </div>
      <div className="frame4">
        <div className="main-section">
          <div className="main-heading">
            <b className="heading">
              Effortless Symbol Interpretation “Translate gestures with ease”
            </b>
          </div>
          <div className="sub-section">
            <div className="sub-heading">Bridging Communication Gaps!</div>
            <div className="button-combo">
              <button
                className="translating-button"
                onClick={onTranslatingButtonClick}
              >
                <div className="text-container">
                  <div className="translator-text">Translating Tools</div>
                </div>
              </button>
              <button
                className="join-comunity-button"
                onClick={onJoinComunityButtonClick}
              >
                <div className="text-container">
                  <div className="join-text1">Explore Further</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img className="frame-icon" alt="" src="/frame.svg" />
      <img className="frame-icon1" alt="" src="/frame.svg" />
      <div className="frame5">
        <div className="mission-content">
          <div className="heading1">
            Our mission is to provide comprehensive language-to-language
            translation solutions, facilitating understanding and connection
            among diverse communities worldwide.
          </div>
          <b className="description1">
            “Transcending Barriers, Connecting Communities”
          </b>
        </div>
        <b className="our-mission" data-animate-on-scroll>
          Our Mission
        </b>
      </div>
    </div>
  );
};

export default Desktop;
