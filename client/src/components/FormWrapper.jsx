export function FormWrapper({ title, subTitle, children }) {
	const circleDimension = "10vw";

	// Function to generate a step item
	const StepItem = ({ stepNumber, stepTitle }) => (
		<div className="w-1/4">
			<div
				className={`w-[${circleDimension}] h-[${circleDimension}] rounded-full flex justify-center items-center ${
					title === stepTitle ? "bg-blue-800" : "bg-blue-800/50"
				} mx-auto mb-2`}
			>
				<span className="text-white font-bold">{stepNumber}</span>
			</div>
			<div>
				<h3 className="text-center font-semibold text-sm">
					{stepTitle}
				</h3>
			</div>
		</div>
	);

	return (
		<>
			{/* Step indicators */}
			<div className="hidden md:flex justify-evenly p-2 mb-4">
				<StepItem stepNumber={1} stepTitle="Property Details" />
				<StepItem stepNumber={2} stepTitle="Property Address" />
				<StepItem stepNumber={3} stepTitle="Property Images" />
				<StepItem stepNumber={4} stepTitle="Review" />
			</div>

			{/* Main content */}
			<h2 className="font-bold text-center text-3xl">{title}</h2>
			<p className="text-center mt-4 mb-8">{subTitle}</p>
			<div className="w-full bg-white shadow-lg p-4 md:p-8 my-2 rounded-lg">
				{children}
			</div>
		</>
	);
}
