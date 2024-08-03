import { useEffect, useState } from "react";
// import { AmoritizationChart } from "../components/AmoritizationChart";

import { AmortizationChart } from "./AmoritizationChart";

const MortgageCalculator = ({ purchasePrice }) => {
	const [formData, setFormData] = useState({
		purchasePrice: purchasePrice,
		downPayment: 0,
		annualInterestRate: 0,
		loanTermYears: 0,
		extraPayment: 1000,
		extraPaymentIntervalYears: 2,
	});

	const [mortgageData, setMortgageData] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("Form Data:", formData);

		fetchData();
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		// Update state with the changed value
		setFormData({
			...formData,
			[name]: value,
		});
	};

	useEffect(() => {
		const { purchasePrice, downPaymentPercent } = formData;

		if (!isNaN(purchasePrice) && !isNaN(downPaymentPercent)) {
			const downPaymentAmount =
				(purchasePrice * downPaymentPercent) / 100;
			setFormData((prevFormData) => ({
				...prevFormData,
				downPayment: downPaymentAmount.toFixed(2), // Round to 2 decimal places
			}));
		}
	}, [formData.purchasePrice, formData.downPaymentPercent]);

	const fetchData = async () => {
		try {
			const res = await fetch("/api/listing/getMortgageCalculations", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			setMortgageData(data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const formatter = new Intl.NumberFormat("en-US");

	return (
		<div className="flex flex-col p-2 border rounded-md">
			<div className="rounded-lg">
				<div className="grid lg:grid-cols-2 grid-rows-1">
					<div id="calculatorForm">
						<form onSubmit={handleSubmit}>
							<div className="bg-slate-100 p-4 shadow-md flex flex-col mb-4 font-semibold rounded-md">
								<div className="flex flex-col">
									<label
										className="my-2"
										htmlFor="purchasePrice"
									>
										Purchase Price
									</label>
									<input
										className="px-3 py-2 border rounded outline-none focus:border-blue-500"
										type="number"
										id="purchasePrice"
										name="purchasePrice"
										placeholder="$500,000"
										value={formData.purchasePrice}
										onChange={handleChange}
									/>
								</div>
								<div className="flex flex-col">
									<label
										className="my-2"
										htmlFor="downPayment"
									>
										Down Payment
									</label>
									<div className="flex">
										<input
											className="px-3 py-2 border rounded outline-none focus:border-blue-500"
											type="text"
											id="downPaymentPercent"
											name="downPaymentPercent"
											placeholder="5%"
											min={0}
											max={100}
											// value={formData.downPaymentPercent}
											onChange={handleChange}
										/>

										<span className="px-3">OR</span>
										<input
											className="pl-3 w-full py-2 border rounded outline-none focus:border-blue-500"
											type="number"
											id="downPaymentAmount"
											name="downPaymentAmount"
											placeholder="$30,000"
											value={formData.downPayment}
											onChange={handleChange}
										/>
									</div>
								</div>
								<div className="flex flex-col">
									<label
										className="my-2"
										htmlFor="loanTermYears"
									>
										Amortization Period
									</label>
									<select
										name="loanTermYears"
										className="px-3 py-2 border rounded outline-none focus:border-blue-500"
										value={formData.loanTermYears}
										onChange={handleChange}
									>
										<option value="5">5 Years</option>
										<option value="10">10 Years</option>
										<option value="15">15 Years</option>
										<option value="20">20 Years</option>
										<option value="25">25 Years</option>
										<option value="30">30 Years</option>
										<option value="35">35 Years</option>
										<option value="40">40 Years</option>
										<option value="45">45 Years</option>
									</select>
								</div>
								<div className="flex flex-col">
									<label
										className="my-2"
										htmlFor="annualInterestRate"
									>
										Mortgage rate
									</label>
									<input
										className="px-3 py-2 border rounded outline-none focus:border-blue-500"
										type="text"
										id="annualInterestRate"
										name="annualInterestRate"
										placeholder="5.09%"
										min={2}
										max={100}
										value={formData.annualInterestRate}
										onChange={handleChange}
									/>
								</div>
							</div>

							<div className="bg-slate-100  p-4 mb-2 shadow-md flex flex-col font-semibold rounded-md">
								<div className="flex flex-col">
									<label
										className="my-2"
										htmlFor="extraPayment"
									>
										Extra Payment Amount
									</label>
									<input
										className="px-3 py-2 border rounded outline-none focus:border-blue-500"
										type="number"
										id="extraPayment"
										name="extraPayment"
										placeholder="$2,000"
										value={formData.extraPayment}
										onChange={handleChange}
									/>
								</div>
								<div className="flex flex-col">
									<label
										className="my-2"
										htmlFor="extraPaymentIntervalYears"
									>
										Extra Payment Interval (in years)
									</label>
									<input
										className="px-3 py-2 border rounded outline-none focus:border-blue-500"
										type="number"
										id="extraPaymentIntervalYears"
										name="extraPaymentIntervalYears"
										placeholder="2"
										value={
											formData.extraPaymentIntervalYears
										}
										onChange={handleChange}
									/>
								</div>
							</div>

							<button
								type="submit"
								className="bg-primary hover:bg-secondary w-full my-2 rounded-lg text-white p-2"
							>
								Calculate
							</button>
						</form>
					</div>

					<div id="results" className=" px-2">
						<div className="grid grid-rows-3 h-full">
							<div className="flex justify-between">
								<div className="flex items-center w-full">
									<div className="bg-white text-center m-1 w-full flex flex-col flex-wrap items-center p-2  border-gray-200/20 shadow-xl border-2 rounded-lg">
										<h3 className="font-semibold py-2">
											Monthly Payment
										</h3>
										<p className="font-bold text-xl">
											{mortgageData != 0
												? "$" +
												  formatter.format(
														parseFloat(
															mortgageData
																.standardAmortization
																.monthlyPayment
														).toFixed(2)
												  )
												: "$0"}
										</p>
									</div>
									<div className="bg-white text-center w-full m-1 flex flex-col flex-wrap items-center p-2 border-gray-200/20 shadow-xl border-2  rounded-lg">
										<h3 className="font-semibold py-2">
											CMHC Insurance
										</h3>
										<p className="font-bold text-xl">
											{mortgageData != 0
												? "$" +
												  formatter.format(
														parseFloat(
															mortgageData.cmhcPremium
														).toFixed(2)
												  )
												: "$0"}
										</p>
									</div>
								</div>
							</div>
							<div className="bg-white w-full flex flex-col justify-center text-center m-1 border-gray-200 shadow-xl border rounded-lg">
								<h3 className="font-semibold py-2">
									Total Mortgage
								</h3>
								<p className="font-bold text-2xl">
									{mortgageData != 0
										? "$" +
										  formatter.format(
												parseFloat(
													mortgageData.principal
												).toFixed(2)
										  )
										: "$0"}
								</p>
							</div>
							<div className="border-gray-200/20 shadow-xl border-2 text-center p-2  rounded-lg">
								<h3 className="font-semibold py-2">
									Recommendation
								</h3>
								<p className="font-medium text-lg">
									If you pay $
									<span className="font-bold">
										{formatter.format(
											formData.extraPayment
										)}
									</span>{" "}
									every {formData.extraPaymentIntervalYears}{" "}
									year, you can save $
									<span className="font-bold">
										{mortgageData.interestSaved
											? formatter.format(
													mortgageData.interestSaved
											  )
											: "0"}
									</span>
									, and pay off{" "}
									<span className="font-bold">
										{mortgageData.timeSavedMonths}
									</span>{" "}
									months early
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{mortgageData ? (
				<div>
					<h2 className="text-2xl mb-8 font-bold mt-8">
						Amoritization Chart
					</h2>
					<AmortizationChart amoritizationData={mortgageData} />
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default MortgageCalculator;
