<<<<<<< HEAD
export default function About() {
	return <div>About</div>;
=======
import HeroImage from "../assets/hero.jpg";

export default function About() {
	return (
		<div className="py-20 px-4 max-w-6xl mx-auto dark:text-white">
			<div className="hero-section relative">
				<img
					src={HeroImage}
					alt="Contact Us"
					className="w-full h-64 object-cover"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<h1 className="text-white text-4xl font-bold">About Us</h1>
				</div>
			</div>

			<div className="content-wrapper dark:text-white">
				<h1 className="text-3xl font-bold mb-4 pt-12 text-slate-800 dark:text-white">
					About Great Homes
				</h1>
				<p className="mb-4 text-slate-700 dark:text-white">
					Welcome to Great Homes, where we believe that a great home
					is the foundation of a great life. Our mission is to help
					you find the perfect home that not only meets your needs but
					also inspires you to create lasting memories.
				</p>

				<h2 className="text-3xl font-bold mb-4 pt-10 text-slate-800 dark:text-white">
					Our Mission
				</h2>
				<p className="mb-4 text-slate-700 dark:text-white">
					At Great Homes, we are committed to helping you discover
					homes that enhance your lifestyle. We provide expert
					guidance and personalized service to make your home search
					an enjoyable and rewarding experience.
				</p>

				<h2 className="text-3xl font-bold mb-4 pt-10 text-slate-800 dark:text-white">
					Our Values
				</h2>
				<p className="mb-4 text-slate-700 dark:text-white">
					<b>Quality:</b>
					We are dedicated to offering only the finest homes, ensuring
					that each property meets our high standards of quality and
					comfort.
				</p>
				<p className="mb-4 text-slate-700 dark:text-white">
					<b>Innovation:</b>
					We embrace innovative solutions and cutting-edge technology
					to simplify your home buying process.
				</p>

				<p className="mb-4 text-slate-700 dark:text-white">
					<b>Trust:</b>
					Building trust with our clients is paramount. We operate
					with integrity and transparency in all our dealings.
				</p>

				<h2 className="text-3xl font-bold mb-4 pt-10 text-slate-800 dark:text-white">
					Why Choose Us?
				</h2>
				<p className="mb-4 text-slate-700 dark:text-white">
					<b>Curated Listings:</b> We feature a carefully curated
					selection of homes, each chosen for its unique charm and
					exceptional quality.
				</p>
				<p className="mb-4 text-slate-700 dark:text-white">
					<b>Expert Guidance:</b> Our team of experienced real estate
					professionals provides expert advice and support every step
					of the way.
				</p>
				<p className="mb-4 text-slate-700 dark:text-white">
					<b>Personalized Service:</b> We understand that finding a
					home is a deeply personal journey. We tailor our services to
					match your specific preferences and requirements.
				</p>
				<p className="mb-4 text-slate-700 dark:text-white">
					<b>Seamless Experience:</b> From browsing listings to
					closing the deal, we ensure a seamless and hassle-free
					experience.
				</p>
			</div>
		</div>
	);
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
}
