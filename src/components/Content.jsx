import React from 'react';
import data from '/data.json';
import { useState } from 'react';

export default function Content() {

    const [active, setActive] = useState(0);

    function handleClick(e) {
        const btns = document.querySelectorAll('.selectBtn')
        btns.forEach(btn => {
            if(btn === e.target) {
                btn.classList.add('active');
                setActive(Number(btn.id))
                return;
            } else {
                btn.classList.remove('active');
            }
        })
    }

    return (
        <>
            <div className="content" id='home'>
                <div className="text">
                    <h1>A Simple Bookmark Manager</h1>
                    <p>
                        A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
                    </p>
                    <div className="buttons">
                        <button className="chromeBtn">Get it on Chrome</button>
                        <button className="firefoxBtn">Get it on Firefox</button>
                    </div>
                </div>
                <div className="images">
                    <img className="groupImg" src="/images/group-52.png" />
                    <img className="backgroundImg" src="/images/content-background.svg" />
                </div>
            </div>
            <div className="features" id='features'>
                <h1>Features</h1>
                <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            </div>
            <div className="slider">
                    <div className="selectBarBottom"></div>
                <div className="selectBar">
                    {
                        data.map((item, index) => {
                            return (
                                item === data[active] ? <button id={index} onClick={handleClick} className="selectBtn active" key={index}>{item.button}</button> :
                                <button id={index} onClick={handleClick} className="selectBtn" key={index}>{item.button}</button>
                            )
                        })
                    }
                </div>
                <div className="content oneClickContent">
                    <div className="text">
                        <h1>{data[active].title}</h1>
                        <p>{data[active].description}</p>
                        <div className="buttons">
                            <button className="chromeBtn">More Info</button>
                        </div>
                    </div>
                    <div className="images oneClickImages">
                        <img className="groupImg oneClickImg" src={data[active].images} />
                        <img className="backgroundImg oneClickBgImg" src="/images/content-background.svg" />
                    </div>
                </div>
            </div>
            <div className="features" id='pricing'>
                <h1>Download the extension</h1>
                <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
            </div>
            <div className="extensionBoxes">
                <div className="box chrome">
                    <div className="boxContent">
                        <img src="/images/logo-chrome.svg" />
                        <h3>Add to Chrome</h3>
                        <p>Minimum version 62</p>
                    </div>
                    <div className="boxButton">
                        <button>Add & Install Extension</button>
                    </div>
                </div>
                <div className="box firefox">
                    <div className="boxContent">
                        <img src="/images/logo-firefox.svg" />
                        <h3>Add to Firefox</h3>
                        <p>Minimum version 55</p>
                    </div>
                    <div className="boxButton">
                        <button>Add & Install Extension</button>
                    </div>
                </div>
                <div className="box opera">
                    <div className="boxContent">
                        <img src="/images/logo-opera.svg" />
                        <h3>Add to Opera</h3>
                        <p>Minimum version 46</p>
                    </div>
                    <div className="boxButton">
                        <button>Add & Install Extension</button>
                    </div>
                </div>
            </div>
            <div className="faq">
                <h1>Frequently Asked Questions</h1>
                <p className="faqTagP">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
                <div className="faqs">
                    <div className="faqDetails">
                        <details>
                            <summary>What is Bookmark ?</summary>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus esse saepe natus sunt magnam placeat beatae ipsam error laudantium. Veniam iusto culpa dolor commodi. A ab quos at rerum accusamus.</p>
                        </details>
                        <details>
                            <summary>How can I request a new browser ?</summary>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem vero consequatur ut illum amet non repellat voluptatum nihil, nesciunt beatae aspernatur eaque eveniet vitae voluptas accusantium aliquid perspiciatis distinctio sed?</p>
                        </details>
                        <details>
                            <summary>Is there a mobile app?</summary>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolore. Blanditiis distinctio dicta porro nostrum praesentium ducimus in deserunt fuga illum voluptatum quibusdam molestias, repellat numquam sunt, ipsum nemo optio.</p>
                        </details>
                        <details>
                            <summary>What about other Chromium browsers?</summary>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro alias laboriosam enim tempore et assumenda ad? Sint odio distinctio non ducimus eaque, quidem, eius mollitia optio doloremque similique suscipit!</p>
                        </details>
                    </div>
                </div>
                <button>More Info</button>
            </div>
        </>
    )
}