import sitelogoTwo from "../assets/g.png";

const Logo = () => {
	return (
		<div>
			<a href="/" target="self">
				<img className="w-28" src={sitelogoTwo} alt="Great Homes" />
			</a>
		</div>
	);
};
export default Logo;
