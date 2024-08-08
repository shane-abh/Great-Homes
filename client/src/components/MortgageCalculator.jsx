import { useEffect, useState } from "react";
import { AmortizationChart } from "./AmoritizationChart";
import MortgageDonutChart from "./MortgageDonutChart";

const MortgageCalculator = ( calculatorData ) => {
  const { purchasePrice } = calculatorData;
  const [formData, setFormData] = useState({
    purchasePrice: purchasePrice,
    downPayment: 0,
    annualInterestRate: 5,
    loanTermYears: 0,
    extraPayment: 1000,
    extraPaymentIntervalYears: 2,
  });
  let donutChartPoints = [];

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
      console.log(data);
      setMortgageData(data);

      donutChartPoints.push(
        { y: parseFloat(mortgageData.principal), label: "Principal" },
        { y: parseFloat(mortgageData.cmhcPremium), label: "CMHC Premium" }
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const formatter = new Intl.NumberFormat("en-US");

  return (
    <div className="flex flex-col p-2 border rounded-md ">
      <div className="  rounded-lg ">
        <div
          className={`grid    grid-cols-1 lg:${
            mortgageData ? "grid-cols-3" : "grid-cols-1"
          } `}
        >
          <div id="calculatorForm" className="md:col-span-1">
            <form onSubmit={handleSubmit}>
              <div className="bg-slate-100 p-4 shadow-md flex flex-col mb-4 font-semibold rounded-md">
                <div className="flex flex-col">
                  <label className="my-2" htmlFor="purchasePrice">
                    Purchase Price
                  </label>
                  <input
                    className="px-3 py-2 border text-slate-500 font-normal rounded outline-none focus:border-blue-500"
                    type="number"
                    id="purchasePrice"
                    name="purchasePrice"
                    placeholder="$500,000"
                    value={formData.purchasePrice}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="my-2" htmlFor="downPayment">
                    Down Payment
                  </label>
                  <div className="flex">
                    <input
                      className="px-3 py-2 w-full text-slate-500 font-normal border rounded outline-none focus:border-blue-500"
                      type="number"
                      step={0.1}
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
                      className="pl-3 w-full py-2 text-slate-500 font-normal border rounded outline-none focus:border-blue-500"
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
                  <label className="my-2" htmlFor="loanTermYears">
                    Amortization Period
                  </label>
                  <select
                    name="loanTermYears"
                    className="px-3 py-2 border rounded outline-none text-slate-500 font-normal focus:border-blue-500"
                    value={formData.loanTermYears}
                    onChange={handleChange}
                    required
                  >
                    <option value="">--Select an option--</option>
                    <option value="5">5 years</option>
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
                  <label className="my-2" htmlFor="annualInterestRate">
                    Mortgage rate
                  </label>
                  <input
                    className="px-3 py-2 border text-slate-500 font-normal rounded outline-none focus:border-blue-500"
                    type="number"
                    step={0.01}
                    id="annualInterestRate"
                    name="annualInterestRate"
                    placeholder="5.09%"
                    min={2}
                    max={10}
                    value={formData.annualInterestRate}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="bg-slate-100  p-4 mb-2 shadow-md flex flex-col font-semibold rounded-md">
                <div className="flex flex-col">
                  <label className="my-2" htmlFor="extraPayment">
                    Extra Payment Amount
                  </label>
                  <input
                    className="px-3 py-2 border text-slate-500 font-normal rounded outline-none focus:border-blue-500"
                    type="number"
                    id="extraPayment"
                    name="extraPayment"
                    placeholder="$2,000"
                    min={0}

                    value={formData.extraPayment}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="my-2" htmlFor="extraPaymentIntervalYears">
                    Extra Payment Interval (in years)
                  </label>
                  <input
                    className="px-3 py-2 border text-slate-500 font-normal rounded outline-none focus:border-blue-500"
                    type="number"
                    id="extraPaymentIntervalYears"
                    name="extraPaymentIntervalYears"
                    placeholder="2"
                    min={0}
                    value={formData.extraPaymentIntervalYears}
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

          {mortgageData ? (
            <div id="results" className=" p-4 md:col-span-2 mt-8  rounded-lg">
              <h1 className="text-center font-bold text-2xl mb-8">
                Standard Amortization
              </h1>
              <div className="grid grid-rows-2  ">
                <div className="flex flex-col lg:flex-row  lg:justify-between lg:gap-5 gap-0   ">
                  <div className=" w-full lg:w-3/6">
                    <MortgageDonutChart
                      dataPoints={[
                        {
                          y: mortgageData.principal - mortgageData.cmhcPremium,
                          label: "Principal",
                          color: "#012865",
                        },
                        { y: mortgageData.cmhcPremium, label: "Insurance" },
                        {
                          y: mortgageData.standardAmortization
                            .totalInterestPaid,
                          label: "Interest",
                          color: "#E8C06F",
                        },
                      ]}
                    />
                  </div>
                  <div className="   flex  items-center   ">
                    <div className="bg-slate-100 rounded-md p-4  flex  flex-col   gap-1.5 w-full">
                      <h2 className="text-lg font-bold py-4">Payment Summary</h2>
                      <div className="flex justify-between gap-x-4">
                        <p>Monthly Payment</p>
                        <p className="font-bold">
                          {mortgageData != 0
                            ? "$" +
                              formatter.format(
                                parseFloat(
                                  mortgageData.standardAmortization
                                    .monthlyPayment
                                ).toFixed(0)
                              )
                            : "$0"}
                        </p>
                      </div>
                      <div className="flex justify-between gap-x-4">
                        <p>CMHC Insurance</p>
                        <p className="font-bold">
                          {" "}
                          {mortgageData != 0
                            ? "$" +
                              formatter.format(
                                parseFloat(mortgageData.cmhcPremium).toFixed(0)
                              )
                            : "$0"}
                        </p>
                      </div>
                      <div className="flex justify-between gap-x-6">
                        <p>Total Interest Payment</p>
                        <p className="font-bold">
                          {mortgageData != 0
                            ? "$" +
                              formatter.format(
                                parseFloat(
                                  mortgageData.standardAmortization
                                    .totalInterestPaid
                                ).toFixed(0)
                              )
                            : "$0"}
                        </p>
                      </div>
                      <div className="flex justify-between gap-x-4 mt-4">
                        <p className="font-bold">Total Mortgage</p>
                        <p className="font-bold">
                          {mortgageData != 0
                            ? "$" +
                              formatter.format(
                                parseFloat(mortgageData.principal).toFixed(2)
                              )
                            : "$0"}
                        </p>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>

                <div className="flex flex-col lg:items-center lg:flex-row mt-10   ">
                  <div className="bg-slate-100 p-4 rounded-lg w-full">
                    <h3 className="font-semibold py-4 text-lg">
                      Recommendation
                    </h3>
                    <p className="font-medium text-lg ">
                      If you pay $
                      <span className="font-bold">
                        {formatter.format(formData.extraPayment)}
                      </span>{" "}
                      every {formData.extraPaymentIntervalYears} year, you can
                      save $
                      <span className="font-bold">
                        {mortgageData.interestSaved
                          ? formatter.format(mortgageData.interestSaved)
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
          ) : (
            ""
          )}
        </div>
      </div> 
      {mortgageData ? (
        <div className="mt-5 lg:mt-20">
          
          <AmortizationChart amoritizationData={mortgageData} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MortgageCalculator;
