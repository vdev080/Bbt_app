import React from "react";
import Image from "next/image";

const HowToSell = () => {
  return (
    <section className="how-to-sell pt-20 pb-24 bg-white ">
        <div className="container">
            <div className="heading-box text-center">
                <h2 className="font-light [&>strong]:font-normal text-3.3rem text-zinc-950 tracking-tighter leading-1.2 my-6 mb-10">How <strong>Sell Your Used Car</strong></h2>
                <p className="text-1.4rem font-light tracking-tight">At BBT, we strive to provide the quickest and most hassle free car selling service available. Getting a great deal on your vehicle can often be tricky, that’s why at Big Boys Toyz we’ll value your vehicle based on its condition and current market value.s</p>
            </div>
            <ul className="mt-20 mb-20">
                <li className="text-center mb-20">
                <Image
                    src="/images/how-sell-icon-1.png"
                    alt="BBT Logo"
                    width="98"
                    height="109"
                    className=" object-contain m-auto w-80"
                />
                    <h6>1</h6>
                    <h4 className="font-strong text-2rem text-zinc-950 tracking-tighter mt-5 mb-5">Instant Valuation</h4>
                    <p className="text-1.4rem font-light tracking-tight">At BBT, we strive to provide the quickest and most hassle free car selling service available.</p>
                </li>
                <li className="text-center mb-10">
                <Image
                    src="/images/how-sell-icon-2.png"
                    alt="BBT Logo"
                    width="98"
                    height="109"
                    className=" object-contain m-auto w-80"
                />
                    <h6>2</h6>
                    <h4 className="font-strong text-25rem text-zinc-950 tracking-tighter mt-5 mb-5"> Book an appointment</h4>
                    <p className="text-1.4rem font-light tracking-tight">At BBT, we strive to provide the quickest and most hassle free car selling service available.</p>
                </li>
                <li className="text-center mb-10">
                <Image
                    src="/images/how-sell-icon-3.png"
                    alt="BBT Logo"
                    width="98"
                    height="109"
                    className=" object-contain m-auto w-80"
                />
                    <h6>3</h6>
                    <h4 className="font-strong text-2rem text-zinc-950 tracking-tighter mt-5 mb-5">Sell Your Car</h4>
                    <p className="text-1.4rem font-light tracking-tight">At BBT, we strive to provide the quickest and most hassle free car selling service available.</p>
                </li>
            </ul>
        </div>





















        
    </section>
  );
};

export default HowToSell;
