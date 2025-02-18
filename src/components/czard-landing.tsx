"use client";

import React, { useState } from 'react';

const CzardLanding: React.FC = () => {
  const [contractAddress] = useState('0xDFa7e9C060dc5292c881Eb48cfe26b27aeF5f0D9');

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
  };

  return (
    <div className="max-xl:bg-black">
      <main className="mx-auto max-w-[120rem]">
        <div className="relative  main-bg flex h-screen flex-col gap-1 overflow-hidden object-contain">
          {/* Logo */}
          <img 
            src="/logo/logo-full.png" 
            alt="" 
            className="absolute left-[50%] top-3 z-10 h-[1.25rem] translate-x-[-50%] md:top-8 md:h-[3rem]"
          />

          {/* Desktop Background */}
          <img 
            src="/images/czard-bg-desktop-test2.png" 
            alt="" 
            className="absolute z-10 h-full w-full min-xl:block max-xl:hidden"
          />

          {/* Video Background - Mobile Only */}
          <div className="hidden max-xl:block">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute h-screen w-full object-cover"
            >
              <source src="/videos/bg-home-1.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Mobile Background Overlay */}
          <div className="absolute top-0 w-full">
            <img 
              src="/images/bg-home-mb.png" 
              alt="" 
              className="hidden h-screen w-full max-xl:flex"
            />
          </div>

          {/* Main Content - Desktop */}
          <div className="max-w-screen-default absolute bottom-5 left-1/2 z-10 mx-auto flex w-full -translate-x-1/2 items-center justify-between px-4 max-[1800px]:scale-90 max-xl:hidden lg:px-6">
            {/* Left Section - Title */}
            <div className="ml-10 flex h-[24.4375rem] w-[29.28rem] items-center justify-center max-[1440px]:ml-20">
              <div className="logo-1 font-orb max-w-[31.25rem] text-[4.375rem] font-bold leading-[3.9375rem]">
                The real magic is patience
              </div>
            </div>

            {/* Right Section - Contract & Social */}
            <div 
              className="mr-10 flex h-[24.4375rem] w-[38rem] items-center justify-center bg-[url('/images/czard-contract-card.png')] bg-contain bg-no-repeat"
              style={{ backgroundSize: '100% 100%' }}
            >
              <div className="flex w-[24.6875rem] flex-col gap-4">


                {/* Contract Section */}
                <div className="flex w-full items-center gap-4">
                  <div className="logo-1 font-orb text-center text-lg font-bold">
                    CONTRACT
                  </div>
                  <div className="border-primary-500 flex w-full items-center gap-4 rounded-lg border border-solid p-[8px_16px]">
                    <a 
                      href={`https://pancakeswap.finance/?outputCurrency=BNB&inputCurrency=${contractAddress}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary-500 font-orb flex h-4 w-[12.125rem] items-center justify-center rounded-sm text-center text-lg font-bold"
                    >
                      {`${contractAddress.slice(0, 4)} ... ${contractAddress.slice(-4)}`}
                    </a>
                    <button onClick={handleCopyAddress} className="cursor-pointer active:scale-95">
                      <img src="/icons/icon-copy.svg" alt="Copy" />
                    </button>
                  </div>
                </div>

                {/* Social Links Section */}
                <div className="flex w-full items-center justify-between">
                  <div className="logo-1 font-orb max-w-[10rem] text-center text-[1.25rem] font-bold">
                    JOIN CZARD COMMUNITY
                  </div>
                  <div className="flex items-center gap-6">
                    <button className="bg-primary-500 flex h-20 w-20 cursor-pointer items-center justify-center rounded-xl active:scale-95">
                      <img src="/images/x.svg" alt="X" />
                    </button>
                    <button className="bg-primary-500 flex h-20 w-20 cursor-pointer items-center justify-center rounded-xl active:scale-95">
                      <img src="/images/telegram.svg" alt="Telegram" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Mobile */}
          <div className="max-w-screen-default absolute left-1/2 top-[66%] z-50 mx-auto hidden w-full -translate-x-1/2 -translate-y-1/2 items-center justify-between px-4 max-mobile:scale-[0.85] max-xl:flex max-md:flex-col lg:px-6">
            <div className="relative z-50 mx-auto flex items-center justify-center">
              <div className="logo-1 font-orb max-w-[22.4rem] pt-6 text-center text-[2.5rem] font-bold leading-[100%]">
                The real magic is patience
              </div>
            </div>
          </div>

          {/* Bottom Section - Mobile */}
          <div className="absolute bottom-0 left-0 right-0 z-50 mx-auto hidden max-xl:flex items-center justify-center">
            <img src="/images/bg-bottom.png" alt="" className="w-full" />
            <div className="absolute flex w-full flex-col gap-2 px-[2rem] pt-10">
              <div className="flex w-full items-center justify-between">
                <div className="logo-1 font-orb max-w-[7.875rem] text-left text-xs font-bold">
                  Contract
                </div>
                <div className="flex items-center gap-2">
                  <div className="border-primary-500 flex w-full items-center gap-2 rounded-lg border border-solid p-[4px_8px]">
                    <a 
                      href={`https://pancakeswap.finance/?outputCurrency=BNB&inputCurrency=${contractAddress}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary-500 font-orb flex h-4 w-[8rem] items-center justify-center rounded-sm text-center text-sm font-bold"
                    >
                      {`${contractAddress.slice(0, 4)} ... ${contractAddress.slice(-4)}`}
                    </a>
                    <button onClick={handleCopyAddress} className="cursor-pointer active:scale-95">
                      <img src="/icons/icon-copy.svg" alt="Copy" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="logo-1 font-orb max-w-[7.875rem] text-left text-xs font-bold">
                  JOIN CZARD COMMUNITY
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-primary-500 flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl active:scale-95">
                    <img className="w-1/2" src="/images/x.svg" alt="X" />
                  </button>
                  <button className="bg-primary-500 flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl active:scale-95">
                    <img className="w-1/2" src="/images/telegram.svg" alt="Telegram" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CzardLanding;