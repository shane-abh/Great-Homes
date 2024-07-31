import { useEffect, useState } from "react";
import AmoritizationChart from "../components/AmoritizationChart";

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
      const downPaymentAmount = (purchasePrice * downPaymentPercent) / 100;
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
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-3xl mb-6 font-bold text-center text-blue-700">Mortgage Calculator</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div id="calculatorForm">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                  <label className="block mb-2 font-semibold text-gray-700" htmlFor="purchasePrice">Purchase Price</label>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    type="number"
                    id="purchasePrice"
                    name="purchasePrice"
                    placeholder="$500,000"
                    value={formData.purchasePrice}
                    onChange={handleChange}
                  />
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                  <label className="block mb-2 font-semibold text-gray-700" htmlFor="downPayment">Down Payment</label>
                  <div className="flex items-center space-x-3">
                    <input
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      type="text"
                      id="downPaymentPercent"
                      name="downPaymentPercent"
                      placeholder="5%"
                      min={0}
                      max={100}
                      onChange={handleChange}
                    />
                    <span className="font-semibold text-gray-700">OR</span>
                    <input
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      type="number"
                      id="downPaymentAmount"
                      name="downPaymentAmount"
                      placeholder="$30,000"
                      value={formData.downPayment}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                  <label className="block mb-2 font-semibold text-gray-700" htmlFor="loanTermYears">Amortization Period</label>
                  <select
                    name="loanTermYears"
                    className="w-full p-3 border border-gray-300 rounded-lg"
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
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                  <label className="block mb-2 font-semibold text-gray-700" htmlFor="annualInterestRate">Mortgage Rate</label>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-lg"
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

              <div className="mt-8 space-y-6">
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                  <label className="block mb-2 font-semibold text-gray-700" htmlFor="extraPayment">Extra Payment Amount</label>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    type="number"
                    id="extraPayment"
                    name="extraPayment"
                    placeholder="$2,000"
                    value={formData.extraPayment}
                    onChange={handleChange}
                  />
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                  <label className="block mb-2 font-semibold text-gray-700" htmlFor="extraPaymentIntervalYears">Extra Payment Interval (in years)</label>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    type="number"
                    id="extraPaymentIntervalYears"
                    name="extraPaymentIntervalYears"
                    placeholder="2"
                    value={formData.extraPaymentIntervalYears}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg mt-8"
              >
                Calculate
              </button>
            </form>
          </div>

          <div id="results" className="flex flex-col justify-between">
            <div className="bg-white flex-grow flex flex-col justify-center items-center text-center p-6 border border-gray-200 shadow-lg rounded-lg mb-6">
              <h3 className="font-semibold text-lg mb-2 text-gray-700">Total Mortgage</h3>
              <p className="font-bold text-2xl text-blue-700">
                {mortgageData != 0
                  ? "$" +
                    formatter.format(
                      parseFloat(mortgageData.principal).toFixed(2)
                    )
                  : "$0"}
              </p>
            </div>
            <div className="flex flex-col space-y-6 mb-6">
              <div className="bg-white text-center p-4 flex flex-col items-center justify-center border border-gray-200 shadow-lg rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-gray-700">Monthly Payment</h3>
                <p className="font-bold text-xl text-blue-700">
                  {mortgageData != 0
                    ? "$" +
                      formatter.format(
                        parseFloat(
                          mortgageData.standardAmortization.monthlyPayment
                        ).toFixed(2)
                      )
                    : "$0"}
                </p>
              </div>
              <div className="bg-white text-center p-4 flex flex-col items-center justify-center border border-gray-200 shadow-lg rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-gray-700">CMHC Insurance</h3>
                <p className="font-bold text-xl text-blue-700">
                  {mortgageData != 0
                    ? "$" +
                      formatter.format(
                        parseFloat(mortgageData.cmhcPremium).toFixed(2)
                      )
                    : "$0"}
                </p>
              </div>
            </div>
            <div className="bg-white text-center p-6 border border-gray-200 shadow-lg rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-gray-700">Recommendation</h3>
              <p className="text-gray-700">
                If you pay $
                <span className="font-bold">
                  {formatter.format(formData.extraPayment)}
                </span>{" "}
                every {formData.extraPaymentIntervalYears} year, you can save $
                <span className="font-bold">
                  {mortgageData.interestSaved ? formatter.format(mortgageData.interestSaved) : "0"}
                </span>, and pay off{" "}
                <span className="font-bold">
                  {mortgageData.timeSavedMonths}
                </span>{" "}
                months early
              </p>
            </div>
          </div>
        </div>
      </div>
      {mortgageData ? (
        <div>
          <h2 className="text-2xl mb-8 font-bold mt-8">Amoritization Chart</h2>
          <AmoritizationChart amoritizationData={mortgageData} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MortgageCalculator;
