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
      {/* Desktop Background */}
      <div className="frame-wrapper">
        <div className="container frame-content">
          <div className="row">

            {/* Main Content - Desktop */}
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="video-wrapper">
                    <div className="z-[1]">
                      <video autoPlay loop muted playsInline className="">
                        <source src="/videos/bg-home-1.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="info-wrapper">
                    <div className="row">
                      <div className="col-lg-6 d-none d-lg-block">
                        <div className="description-section-wrapper">
                          <div className="magic-container d-flex">
                            <p className="magic-text m-auto">
                              {
                                "CZARD is not just a memecoin—it’s an entire DeFi-powered ecosystem built on Binance Smart Chain (BSC), blending blockchain magic with real utility. The Market Mage protects HODLers, predicts market trends, and fights rug pulls with spells like Pump Spell, HODL Shield, and Rug Reveal."
                              }
                            </p>
                            <div className="sparkle"></div>
                            <div className="sparkle"></div>
                            <div className="sparkle"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contract-section-wrapper d-flex">
                          <div className="contract-section m-auto">
                            <div className="flex flex-col gap-4">
                              {/* Contract Section */}
                              <div className="flex w-full items-center gap-4">
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
                                <div className="border-primary-500 flex w-full items-center rounded-lg border border-solid p-[8px_16px]">
                                  <a
                                    href={`https://pancakeswap.finance/?outputCurrency=BNB&inputCurrency=${contractAddress}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="contract-text"
                                  >
                                    {`${contractAddress.slice(
                                      0,
                                      4
                                    )} ... ${contractAddress.slice(-4)}`}
                                  </a>
                                  <button
                                    onClick={handleCopyAddress}
                                    className="cursor-pointer active:scale-95"
                                  >
                                    <img
                                      src="/icons/icon-copy.svg"
                                      alt="Copy"
                                    />
                                  </button>
                                </div>
                              </div>

                              {/* Social Links Section */}
                              <div className="flex w-full items-center justify-between">
                                <div className="magic-text">
                                  <div className="magic-container d-flex">
                                    <p className="magic-text m-auto">
                                      Join the magic
                                    </p>
                                    <div className="sparkle"></div>
                                    <div className="sparkle"></div>
                                    <div className="sparkle"></div>
                                  </div>
                                </div>

                                <div className="ms-4 ms-lg-0 flex items-center">
                                  <a
                                    className="button-wrapper me-2 me-lg-4"
                                    href="https://x.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <img src="/images/x.svg" alt="X" />
                                  </a>
                                  <a
                                    className="button-wrapper"
                                    href="https://telegram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <img
                                      src="/images/telegram.svg"
                                      alt="Telegram"
                                    />
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
  );
};

export default Landing;
