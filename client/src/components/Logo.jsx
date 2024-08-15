import sitelogoTwo from "../assets/header_logo.svg";

const Logo = () => {
	return (
		<div>
			<a href="/" target="self">
				<img className="w-24" src={sitelogoTwo} alt="Great Homes" />
			</a>
		</div>
	);
};
export default Logo;
