import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return <footer className="bg-bgDark-400 py-16">
    <div
        className="flex flex-col lg:flex-row justify-around 2xl:justify-between items-center gap-12 lg:gap-0  max-w-screen-2xl mx-auto"
    >
        <div
            className="flex  flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16 order-1 lg:order-none"
        >
            <div
                className="flex justify-start items-center order-1 sm:order-none"
            >
                <div className="">
                    <h2
                        className="font-heading text-3xl md:text-5xl text-ownYellow-400  hover:text-ownTurquise-600 transition-color"
                    >
                        <Link href="/">Marek<br />Gacek<br /></Link>
                    </h2>

                    <span
                        className="flex gap-3 text-xl md:text-3xl font-heading text-fontLight  mt-4"
                        ><Image
                            src="/assets/icons/copy.svg"
                            alt=""
                            className="w-7 fill-white"
                            width={20}
                            height={20}
                        />
                       2024</span>
                </div>
            </div>
            <div className="max-w-[220px] lg:hidden 2xl:inline-block">
                <a href="/assets/gifs/bolec.gif" target="_blank">
                    <span
                        className=" text-2xl text-center sm:text-left font-heading text-ownPurple-400 hover:text-ownPink-200 transition:color"
                    >
                        Coco Jumbo i do przodu! <br/>To moje hasło.
                        <br />Dobre, nie?
                    </span>
                </a>
            </div>
        </div>

        <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-end items-center  px-4 lg:px-0"
        >
<div
        className="px-6 py-4 border-2  last:border-r-2 border-white font-text text-lg lg:text-xl text-fontLight hover:border-dashed hover:animate-shake text-center sm:text-left col-span-2 border-r-2 sm:border-r-0">
 <Link href="/polityka_prywatnosci"
                    >Polityka Prywatności</Link>
    </div>

            
            {/* <FooterSocialItem class="border-r-2">
                <a href="mailto:kontakt@marekgacek.pl"
                    >Email</a
                ></FooterSocialItem
            >
            <FooterSocialItem class="border-r-2 sm:border-r-0">
                <a
                    href="https://www.facebook.com/marekgacekdev"
                    target="_blank"
                    >Facebook</a
                ></FooterSocialItem
            >
            <FooterSocialItem>
                <a
                    href="https://www.linkedin.com/in/marek-gacek/"
                    target="_blank"
                    >Linkedin</a
                ></FooterSocialItem
            >
            <FooterSocialItem>
                <a href="https://github.com/marekgacek45" target="_blank"
                    >Github</a
                ></FooterSocialItem
            > */}
        </div>
    </div>
</footer> }

export default Footer