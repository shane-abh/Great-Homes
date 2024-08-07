import sitelogoTwo from "../assets/sitelogoTwo.png";

const Logo = () => {
	return (
		<div>
			<a
				className="flex items-center gap-2 cursor-pointer"
				href=""
				target="self"
			>
				<img src={sitelogoTwo} alt="Great Homes" />
				<span className="font-bold hover:text-primary">
					Great Homes
				</span>
			</a>
		</div>
	);
};
export default Logo;
