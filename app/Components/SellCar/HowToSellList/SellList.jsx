import React from "react";
import Image from "next/image";

const SellList = () => {
  return (
    <section className="sell-list pt-20 pb-24">
        <div className="container">
          <ul>
            <li className="flex mb-10 pb-10 items-center">
              <div className="img-box p-10 bg-white w-30%">
                <Image
                      src="/images/sell-sm-icon-1.png"
                      alt="BBT Logo"
                      width="400"
                      height="400"
                      className=" object-contain m-auto w-44"
                  />
              </div>
              <div className="txt-box w-70% ml-10">
                <h4 className="font-strong text-2rem text-zinc-950 tracking-tighter mb-2">Outright Sale <br />(Not Only Exchange)</h4>
                <p className="text-1.4rem font-light tracking-tight">Sell you cars with us without the boundation of exchange only offers.</p>
              </div>
            </li>
            <li className="flex mb-10 pb-10 items-center">
              <div className="img-box p-10 bg-white w-30%">
                <Image
                      src="/images/sell-sm-icon-2.png"
                      alt="BBT Logo"
                      width="40"
                      height="40"
                      className=" object-contain m-auto w-44"
                  />
              </div>
              <div className="txt-box w-70% ml-10">
                <h4 className="font-strong text-2rem text-zinc-950 tracking-tighter mb-2">Best Offer In 29 Mins</h4>
                <p className="text-1.4rem font-light tracking-tight">Sell you cars with us without the boundation of exchange only offers.</p>
              </div>
            </li>
            <li className="flex mb-10 pb-10 items-center">
              <div className="img-box p-10 bg-white w-30%">
                <Image
                      src="/images/sell-sm-icon-3.png"
                      alt="BBT Logo"
                      width="40"
                      height="40"
                      className="object-contain m-auto w-44"
                  />
              </div>
              <div className="txt-box w-70% ml-10">
                <h4 className="font-strong text-2rem text-zinc-950 tracking-tighter mb-2">On Spot</h4>
                <p className="text-1.4rem font-light tracking-tight">Sell you cars with us without the boundation of exchange only offers.</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="img-box p-10 bg-white w-30%">
                <Image
                      src="/images/sell-sm-icon-4.png"
                      alt="BBT Logo"
                      width="40"
                      height="40"
                      className=" object-contain m-auto w-44"
                  />
              </div>
              <div className="txt-box w-70% ml-10">
                <h4 className="font-strong text-2rem text-zinc-950 tracking-tighter mb-2">Outright Sale <br />(Not Only Exchange)</h4>
                <p className="text-1.4rem font-light tracking-tight">Sell you cars with us without the boundation of exchange only offers.</p>
              </div>
            </li>
          </ul>
        </div>
    </section>
  );
};

export default SellList;
