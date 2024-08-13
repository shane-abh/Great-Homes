<<<<<<< HEAD
const Logo = () => {
	return (
		<div>
			<h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
				<span className="text-secondary">Great</span>
				<span className="text-slate-500">Homes</span>
			</h1>
=======
import sitelogoTwo from "../assets/header_logo.svg";

const Logo = () => {
	return (
		<div>
			<a href="/" target="self">
				<img className="w-24" src={sitelogoTwo} alt="Great Homes" />
			</a>
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
		</div>
	);
};
export default Logo;
