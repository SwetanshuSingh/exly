import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photo from '../assets/photo.png';
import './Carousel.css';

const Testimonial = ({ text, name }) => {
return (
<div className="mx-auto bg-gray-100 w-[456px] lg:w-[586px] p-6 rounded-xl shadow-md">
    <img src={photo} alt='img' className='mb-2'/>
    <p className="text-[18px] font-0 font-[400] text-gray-700 my-5">{text}</p>
    <div className="mt-4 mr-4 flex items-center">
    <img src="https://marketingaccelerator.in/wp-content/uploads/2023/07/testminail.svg" alt="Image" className="w-[74px] h-[74px] mr-4 rounded-full" />
    <div>
    <div className="text-[20px] font-semibold">{name}</div>
    </div>
    </div>
</div>
);
};

export default function TestNew() {
const testimonials = [
{
text: "Chetan’s strategies are relevant, concise, and easy to understand. I found them to be extremely helpful in improving my own business.",
name: "Dipti",
},
{
text: "Chetan was just awesome! He didn’t hold back and shared all his marketing secrets. It was like getting a bunch of gold nuggets straight from the expert! I felt so inspired and confident after his talk. If you want to learn marketing 101, MAC is the place to go! Highly recommend it to everyone!",
name: "Gomathy Narayanan",
},
{
text: "The session was a game-changer for me! I now see content marketing in a whole new light and have a clear roadmap for putting it into action.Highly recommend it to anyone looking to level up their marketing game!",
name: "Priya",
},
{
text: "Content Marketing was mind-blowingly simplified! The breakdown and detailed mathematics behind it were truly eye-opening and insightful. Loved every bit of it!",
name: "Harmeet",
},
{
text: "The training was super crisp and practical! The instructor didn’t beat around the bush and shared real-time analytics and insights that were spot-on. If you’re starting a coaching or a course, this training is a must. It’s the key to solving all your business challenges. Highly recommended!",
name: "Pankhuri Omar",
},
{
text: "Awesome experience! Even a beginner can understand it. I got clarity on content creation and distribution. This will help me a lot! It’s the key to solving all your business challenges. Highly recommended!",
name: "Chelpuru Madhu",
},

];

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    spaceBetweenSlides: 5,
    centerMode: true,
    // centerPadding: "10px",
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    // afterChange : function(){
    //     background-color : orange;
    // },
    appendDots: dots => (
    <div className="bg-gray-300 rounded-lg p-2">
    <ul className="flex space-x-1 justify-center">{dots}</ul>
    </div>
    ),
    customPaging: (i,currentSlide) => (
    <div
    className={`customdots w-3 h-3 bg-[#F3F4F6] border border-[#F3F4F6] flex items-center justify-center ${i === currentSlide ? 'bg-orange-500' : 'bg-gray-300'}`}
    >
    </div>
    ),
};

return (
<Slider className = 'lg:max-w-[1480px] w-full' {...settings}>
{testimonials.map((testimonial, index) => (
<div key={index}>
<Testimonial {...testimonial} />
<div className='text-white'>abc</div>
</div>
))}
</Slider>
);
}