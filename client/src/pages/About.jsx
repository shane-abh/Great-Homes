import React from 'react';
import about_hero from "../assets/about_hero.jpg";

export default function About() {
	return(
		<div className='py-20 px-4 max-w-6xl mx-auto'>
			<div className="bg-black bg-cover bg-center inset-0 min-h-[90dvh]" style={{
            backgroundImage: `url(${about_hero})`,
            zIndex: -1,
            backgroundColor: "black",
          }}></div>
				
			<h1 className='text-3xl font-bold mb-4 text-slate-800'>
				About Great Homes
			</h1>
			<p className='mb-4 text-slate-700'>Welcome to Great Homes, where we believe that a great home
				is the foundation of a great life. Our mission is to help 
				you find the perfect home that not only meets your needs 
				but also inspires you to create lasting memories.</p>

			<h2 className='text-3xl font-bold mb-4 text-slate-800'>Our Mission</h2>
			<p className='mb-4 text-slate-700'>
				At Great Homes, we are committed to helping you discover homes that enhance your lifestyle. We provide expert guidance and personalized service to make your home search an enjoyable and rewarding experience.
			</p>

			<h2 className='text-3xl font-bold mb-4 text-slate-800'>Our Values</h2>
			<p className='mb-4 text-slate-700'><b>Quality:</b>
				We are dedicated to offering only the finest homes, ensuring that each property meets our high standards of quality and comfort.
			</p>
			<p className='mb-4 text-slate-700'><b>Innovation:</b>
				We embrace innovative solutions and cutting-edge technology to simplify your home buying process.
			</p>

			<p className='mb-4 text-slate-700'><b>Trust:</b>
				Building trust with our clients is paramount. We operate with integrity and transparency in all our dealings.
			</p>

			<h2 className='text-3xl font-bold mb-4 text-slate-800'>Why Choose Us?</h2>
			<p className='mb-4 text-slate-700'><b>Curated Listings:</b> We feature a carefully curated selection of homes, each chosen for its unique charm and exceptional quality.</p>
			<p className='mb-4 text-slate-700'><b>Expert Guidance:</b> Our team of experienced real estate professionals provides expert advice and support every step of the way.</p>
			<p className='mb-4 text-slate-700'><b>Personalized Service:</b> We understand that finding a home is a deeply personal journey. We tailor our services to match your specific preferences and requirements.</p>
			<p className='mb-4 text-slate-700'><b>Seamless Experience:</b> From browsing listings to closing the deal, we ensure a seamless and hassle-free experience.</p>
		</div>
	)
}
