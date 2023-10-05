import React from 'react';
import './Bowl.css';

const Bowl = ({ theme }) => {

    // // updating the blur effect intensity for the forms
    // var formBlurIntensity = -1.11 * diameter + 83.33;
    // var mySvg = document.getElementsByClassName('form');
    // if (mySvg) {
    //     for (const svg of mySvg) {
    //         const feGaussianBlurElement = svg.querySelector("feGaussianBlur");
    //         feGaussianBlurElement.setAttribute("stdDeviation", formBlurIntensity);
    //     }
    // } else {
    //     console.log("'form' introuvable")
    // }

    // // updating the blur effect intensity for the white stroke
    // var strokeBlurIntensity = diameter / 2;
    // var myStroke = document.getElementsByClassName('white-stroke')[0];
    // if (myStroke) {
    //     const feGaussianBlurElement2 = myStroke.querySelector("feGaussianBlur");
    //     feGaussianBlurElement2.setAttribute("stdDeviation", strokeBlurIntensity);
    // }

    return (
        <div className={'bowl-container bowl-container-' + theme}>
            <div className='bowl'>
                <svg className="white-stroke" width="717" height="717" viewBox="0 0 717 717" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_53_698)">
                        <circle cx="358.5" cy="358.5" r="357" stroke="#F7FDFF" />
                    </g>
                    <defs>
                        <filter id="filter0_f_53_698" x="-150.151" y="0.918274" width="1000" height="717" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_53_697" />
                        </filter>
                    </defs>
                </svg>
                <svg className='first-form form' xmlns="http://www.w3.org/2000/svg" width="717" height="552" viewBox="0 0 717 552" fill="none">
                    <g filter="url(#filter0_f_53_697)">
                        <path d="M185.287 190.088C95.2019 204.302 -50.151 186.041 -50.151 186.041L7.45466 437.812C7.45466 437.812 117.062 469.066 173.555 438.356C227.968 408.776 221.105 361.095 278.847 339.033C345.966 313.388 373.199 357.054 445.64 369.238C558.999 388.303 732.23 331.206 732.23 331.206L723.509 185.987C723.509 185.987 634.154 193.576 578.164 179.649C514.492 163.811 489.067 113.391 424.751 102.931C324.367 86.6039 283.911 174.527 185.287 190.088Z" fill="#384B6B" />
                    </g>
                    <defs>
                        <filter id="filter0_f_53_697" x="-150.151" y="0.918274" width="982.381" height="550.947" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_53_697" />
                        </filter>
                    </defs>
                </svg>
                <svg className='second-form form' xmlns="http://www.w3.org/2000/svg" width="717" height="717" viewBox="0 0 717 717" fill="none">
                    <g filter="url(#filter0_f_53_696)">
                        <path d="M65.5 654L-34 454C-34 454 109.564 385.737 199.5 338C263.425 304.069 308.605 297.396 361.5 248C417.169 196.014 402.656 126.038 465.5 83C511.92 51.2102 603 40 603 40L713 199C713 199 670.125 248.667 646 283C612.594 330.541 613.958 372.375 571 411.5C510.088 466.977 414.793 405.178 369.5 474C342.785 514.593 318.99 554.027 294.5 596C238.321 692.286 65.5 654 65.5 654Z" fill="#DFE6F1" />
                    </g>
                    <defs>
                        <filter id="filter0_f_53_696" x="-134" y="-60" width="947" height="821.513" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_53_696" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export { Bowl }