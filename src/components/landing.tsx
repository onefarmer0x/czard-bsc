"use client";

import React, { useState } from "react";
import ParticleAnimation from "./ParticleAnimation";

const Landing: React.FC = () => {
  const [contractAddress] = useState(
    "0xDFa7e9C060dc5292c881Eb48cfe26b27aeF5f0D9"
  );

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
  };

  return (
    <div className="container-fluid main-bg p-0 m-auto d-flex flex-column min-vh-100">
      <ParticleAnimation />

      {/* Desktop Background */}
      <div className="frame-wrapper">
        <div className="container-fluid frame-content">

           {/* Main Content - Video */}
           <div className="video">
            <div className="video-wrapper">
                <div className="z-[1]">
                  <video autoPlay loop muted playsInline className="">
                    <source src="/videos/bg-home-1.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
          </div>

          {/* Main Content - BG */}
          <div className="main-bg"></div>

           {/* Main Content - BG */}
           <div className="frame-bg"></div>

          <div className="row main-content">

            {/* Main Content - Desktop */}
            <div className="container-fluid">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="col-12">
                      <div className="hero-wrapper">
                        <div className="description-section-wrapper">
                          <div className="magic-container">
                            <p className="magic-text mb-3 m-auto">
                              {"Not all wizards cast the same spells."}
                            </p>
                            <p className="magic-text m-auto">
                              {"Are you ready to experience CZARD's magic on BNB Chain?"}
                            </p>
                            <div className="sparkle"></div>
                            <div className="sparkle"></div>
                            <div className="sparkle"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="roadmap-container-wrapper">
                        <div className="roadmap-container">
                          <div className="roadmap-title-wrapper">
                            <div className="title">
                              <div className="magic-container d-flex">
                                <p className="magic-text m-auto">{`Wizard's Prophecy`}</p>
                                <div className="sparkle"></div>
                                <div className="sparkle"></div>
                                <div className="sparkle"></div>
                              </div>
                            </div>
                          </div>
                          <div className="roadmap-wrapper">
                            <div className="roadmap-points">
                              <ul className="points">
                                {/* <li>
                                  <span className="roadmap-point magic-text">{`Wizard’s Prophecy`}</span>
                                </li> */}
                                <li>
                                  <span className="roadmap-point magic-text">{`Agent As A Service`}</span>
                                </li>
                                <li>
                                  <span className="roadmap-point magic-text blur">{`Staking`}</span>
                                </li>
                                <li>
                                  <span className="roadmap-point magic-text blur">{`Ambassador Program`}</span>
                                </li>
                                <li>
                                  <span className="roadmap-point magic-text blur">{`DAO`}</span>
                                </li>
                                <li>
                                  <span className="roadmap-point magic-text blur">{`NFT Collection`}</span>
                                </li>
                                <li>
                                  <span className="roadmap-point magic-text blur">{`Play2Earn Games`}</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 px-0">
                    <div className="row">
                      {/* Spellbook Desktop */}
                      <div className="col-12 px-0 d-none d-lg-block spellbook-container-wrapper">
                        <div className="spellbook-wrapper desktop">
                          <div className="spellbook-title-wrapper">
                            <div className="title">
                              <div className="magic-container d-flex">
                                <p className="magic-text m-auto">Spellbook</p>
                                <div className="sparkle"></div>
                                <div className="sparkle"></div>
                                <div className="sparkle"></div>
                              </div>
                            </div>
                          </div>
                          <div className="spellbook-content">
                            <div className="col-12">
                              <div className="contract-section-wrapper d-flex">
                                <div className="contract-section m-auto">
                                  <div className="social-items-wrapper flex flex-col gap-4">
                                    {/* Contract Section */}
                                    <div className="items-center">
                                      <div className="font-orb text-center">
                                        <div className="magic-container d-flex">
                                          <p className="magic-text m-auto">
                                            CONTRACT
                                          </p>
                                          <div className="sparkle"></div>
                                          <div className="sparkle"></div>
                                          <div className="sparkle"></div>
                                        </div>
                                      </div>
                                      <div className="contract-box">
                                        <a
                                          href={`https://pancakeswap.finance/?outputCurrency=BNB&inputCurrency=${contractAddress}`}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="contract-text"
                                        >
                                          {`${contractAddress.slice(
                                            0,
                                            4
                                          )}...${contractAddress.slice(-4)}`}
                                        </a>
                                        <button
                                          onClick={handleCopyAddress}
                                          className="copy-box"
                                        >
                                          <img
                                            src="/icons/icon-copy.svg"
                                            alt="Copy"
                                          />
                                        </button>
                                      </div>
                                    </div>

                                    {/* Social Links Section */}
                                    <div className="items-center">

                                      {/* X */}
                                      <div className="social-item-wrapper">
                                        <div className="magic-text">
                                          <div className="magic-container d-flex">
                                            <p className="magic-text m-auto">
                                              X
                                            </p>
                                            <div className="sparkle"></div>
                                            <div className="sparkle"></div>
                                            <div className="sparkle"></div>
                                          </div>
                                        </div>
                                        <a className="button-wrapper" href="https://x.com" target="_blank" rel="noopener noreferrer" >
                                          <img src="/images/x.svg"  alt="X" />
                                        </a>
                                      </div>

                                      {/* Telegram */}
                                      <div className="social-item-wrapper">
                                        <div className="magic-text">
                                          <div className="magic-container d-flex">
                                            <p className="magic-text m-auto">
                                              Telegram
                                            </p>
                                            <div className="sparkle"></div>
                                            <div className="sparkle"></div>
                                            <div className="sparkle"></div>
                                          </div>
                                        </div>
                                        <a className="button-wrapper" href="https://telegram.com" target="_blank" rel="noopener noreferrer" >
                                          <img src="/images/telegram.svg"  alt="Telegram" />
                                        </a>
                                      </div>

                                      {/* DexScreener */}
                                      <div className="social-item-wrapper">
                                        <div className="magic-text">
                                          <div className="magic-container d-flex">
                                            <p className="magic-text m-auto">
                                              DexScreener
                                            </p>
                                            <div className="sparkle"></div>
                                            <div className="sparkle"></div>
                                            <div className="sparkle"></div>
                                          </div>
                                        </div>
                                        <a className="button-wrapper" href="https://dexcreener.com" target="_blank" rel="noopener noreferrer" >
                                          <img src="/images/dex.png"  alt="DexScreener" />
                                        </a>
                                      </div>

                                      {/* Four.meme */}
                                      <div className="social-item-wrapper">
                                        <div className="magic-text">
                                          <div className="magic-container d-flex">
                                            <p className="magic-text m-auto">
                                              four.meme
                                            </p>
                                            <div className="sparkle"></div>
                                            <div className="sparkle"></div>
                                            <div className="sparkle"></div>
                                          </div>
                                        </div>
                                        <a className="button-wrapper" href="https://fourmeme.com" target="_blank" rel="noopener noreferrer" >
                                          <img src="/images/fourmeme.webp"  alt="DexScreener" />
                                        </a>
                                      </div>
                                      

                                    
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
