import React from "react";
import Sunrisers from './images/Sun.jpeg'
import ChennaiIPL from './images/Chennai.jpeg'
import Gujarat from './images/Gujrat.jpeg'

const Common = (props) => {

    return (
        <>
            <div>
                <section id="header" className="d-flex align-items-center" style={{ overflow: 'scroll' }}>
                    <div className="container-fluid ">
                        <div className="row">
                            <span style={{fontSize: '40px', marginBottom: '112px', textAlign: 'center', background: 'whitesmoke'}}>The Trending Feed</span>
                            <div className="col-10 mx-auto gridChange" style={{ display: 'grid' }}>
                                <div className="row">
                                    <div className="col-md-12 pt-5 pt-lg-0 order order-lg-1 d-flex justify-content-center flex-column divStyling">
                                        <div className="cardDesign">
                                            <p><b>Sunrisers Hyderabad</b><b><a href="https://twitter.com/SunRisers" target="_blank" rel="noreferrer">@SunRisers</a></b><img className="imageEdit" alt="Sunrisers" src={Sunrisers}></img></p>
                                            <p data-skm-boomerang-el-1="processed">All set to take on the Super Kings tomorrow 🙌</p>
                                        </div>
                                        <div id="skm-boomerang-el-1-12" style={{ textAlign: 'center', padding: '25px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minWidth: '300px', minHeight: '50px', display: 'flex' }} data-google-query-id="COyxpf63gvcCFQGmAQodu-UH1w"><div id="google_ads_iframe_/8352,22646448515/bh.literallydarling26148/life_8__container__" style={{ border: '0pt none', display: 'inline-block', width: '150px', height: '100px' }}><iframe frameborder="0" src="https://521ccbdc378f2630cedc542cb8f1c334.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html" id="google_ads_iframe_/8352,22646448515/bh.literallydarling26148/life_8" title="3rd party ad content" name="" scrolling="no" marginwidth="0" marginheight="0" width="300" height="250" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" role="region" aria-label="Advertisement" tabindex="0" data-google-container-id="9" style={{ border: '0px', verticalAlign: 'bottom' }} data-load-complete="true"></iframe></div></div>
                                        <div className="cardDesign">
                                            <p><b>Chennai Super Kings</b><b><a href="https://twitter.com/ChennaiIPL" target="_blank" rel="noreferrer">@ChennaiIPL</a></b><img className="imageEdit" alt="CSK" src={ChennaiIPL}></img></p>
                                            <p>Can you read the cards right? Predict the player of the match and get to win exciting superfan goodies!#Yellove #WhistlePodu 🦁💛</p>
                                        </div>
                                        <div className="cardDesign">
                                            <p><b>BBC </b><b><a href="https://twitter.com/BBCBreaking" target="_blank" rel="noreferrer">@BBCBreaking</a></b></p>
                                            <p>BBC has long been the international standard in reporting, and the station has a sprawling presence on Twitter. With @BBCBreaking, you are given a cross-section of breaking news from around the world, with frequent retweets from BBC’s more specific handles, such as Sports and World News. Pay attention to specific correspondents being retweeted, too<span style={{ color: '#545454' }}>—</span>if you want to stay posted on a particular issue, they are often the best sources for up-to-the minute information from in-country.</p>
                                        </div>
                                        <div className="cardDesign">
                                            <p><b>The Economist </b><b><a href="https://twitter.com/TheEconomist" target="_blank" rel="noreferrer">@TheEconomist</a></b></p>
                                            <p>If the hefty subscription price for this cornerstone of international news is a bit much, following on Twitter is the next best way to get all the latest from around the world. Follow for articles, video, and numerous charts.</p>
                                        </div>
                                        <div className="cardDesign">
                                            <p><b>Ronan Daily</b><b><a href="https://twitter.com/RonanDaily" target="_blank" rel="noreferrer">@RonanDaily</a></b></p>
                                            <p>By and large, 24-hour news networks in the US are the worst. But over at MSNBC, Ronan Farrow is putting a Millennial spin on the day’s top stories. Farrow is already a Twitter darling for his personal account, from which he tweets equal parts thought-provoking and hilarious updates. Follow Ronan Daily for a similarly balanced look at the stories being covered on the show.</p>
                                        </div>
                                        <p>&nbsp;</p>
                                    </div>

                                </div>
                                <div className="">
                                    <div className="cardDesign">
                                        <p><b>Gujarat Titans</b><b><a href="https://twitter.com/andersoncooper" target="_blank" rel="noreferrer">@gujarat_titans</a></b><img className="imageEdit" alt="Gujarat" src={Gujarat}></img></p>
                                        <p>Was @rahultewatia02's the greatest 3-ball innings in T20 history? 📰 We wrote something to make sense of it 👉🏽 https://gujarattitansipl.com/news/rahul-tewatias-miracle-chronicles-from-sharjah-smash-to-brabourne-bash #AavaDe #PBKSvGT #TATAIPL #SeasonOfFirsts @saurabh_42</p><p></p><p></p>
                                    </div>
                                    <div className="cardDesign">
                                        <p><b>Circa </b><b><a href="https://twitter.com/Circa" target="_blank" rel="noreferrer">@Circa</a></b></p>
                                        <p>This application-based source is progressive in that it totals articles from different distributions to present to you the need-to-know data on various stories. Continually refreshing, Circa is an important device for creating stories.</p>
                                    </div>
                                    
                                    <div className="cardDesign">
                                        <p><b>NPR </b><b><a href="https://twitter.com/nprnews" target="_blank" rel="noreferrer">@nprnews</a></b></p>
                                        <p>Is there any justification needed for following NPR? Tweeting out links to NPR content and analysis, everyone’s favorite radio station is a must-follow!</p>
                                    </div>
                                    <div className="cardDesign">
                                    <p><b>Foreign Affairs </b><b><a href="https://twitter.com/ForeignAffairs" target="_blank" rel="noreferrer">@ForeignAffairs</a></b></p>
                                        <p data-skm-boomerang-el-1="processed">Consider the flagship publication of the Council on Foreign Relations a go-to if you are up on the details, but want a more rounded understanding of an issue. The magazine has printed numerous ground-breaking works by government officials and thinkers (Clash of Civilizations is just one example that first ran in FA). But fear not<span style={{ color: '#545454' }}>—t</span>he magazine also runs a lot of fun think pieces, such as multiple “Game of Thrones” articles picking apart the political goings-on of Westeros.</p><div id="skm-boomerang-el-1-12" style={{ textAlign: 'center', padding: '25px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minWidth: '300px', minHeight: '50px', display: 'flex' }} data-google-query-id="COyxpf63gvcCFQGmAQodu-UH1w"><div id="google_ads_iframe_/8352,22646448515/bh.literallydarling26148/life_8__container__" style={{ border: '0pt none', display: 'inline-block', width: '300px', height: '250px' }}><iframe frameborder="0" src="https://521ccbdc378f2630cedc542cb8f1c334.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html" id="google_ads_iframe_/8352,22646448515/bh.literallydarling26148/life_8" title="3rd party ad content" name="" scrolling="no" marginwidth="0" marginheight="0" width="300" height="250" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" role="region" aria-label="Advertisement" tabindex="0" data-google-container-id="9" style={{ border: '0px', verticalAlign: 'bottom' }} data-load-complete="true"></iframe></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
};

export default Common;