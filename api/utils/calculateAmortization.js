export const calculateAmortization = (
  principal,
  annualInterestRate,
  loanTermYears,
  extraPayment = 0,
  extraPaymentIntervalMonths = 0
) => {
  // Monthly interest rate
  let monthlyInterestRate = annualInterestRate / (12 * 100);
  // Number of payments
  let numberOfPayments = loanTermYears * 12;
  // Monthly payment calculation (M)
  let monthlyPayment =
    (principal *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  let remainingPrincipal = principal;
  let totalInterestPaid = 0;
  let schedule = [];
  let monthsToPayoff = 0;

  for (let i = 1; i <= numberOfPayments; i++) {
    // Interest payment
    let interestPayment = remainingPrincipal * monthlyInterestRate;
    // Principal payment
    let principalPayment = monthlyPayment - interestPayment;

    // Apply extra payment at specified intervals
    if (
      extraPayment > 0 &&
      extraPaymentIntervalMonths > 0 &&
      i % extraPaymentIntervalMonths === 0
    ) {
      principalPayment += extraPayment;
    }

    // Remaining principal
    remainingPrincipal -= principalPayment;

    // Track total interest paid
    totalInterestPaid += interestPayment;

    // Break the loop if the loan is paid off early
    if (remainingPrincipal <= 0) {
      schedule.push({
        month: i,
        year: new Date().getFullYear() + parseInt(i / 12),
        interestPayment: interestPayment.toFixed(2),
        principalPayment: (principalPayment + remainingPrincipal).toFixed(2),
        remainingPrincipal: 0,
      });
      monthsToPayoff = i;
      break;
    }
    if (i % 5 == 0) {
      schedule.push({
        month: i,
        year: new Date().getFullYear() + parseInt(i / 12),

        interestPayment: interestPayment.toFixed(2),
        principalPayment: principalPayment.toFixed(2),
        remainingPrincipal: remainingPrincipal.toFixed(2),
      });
    }

    monthsToPayoff = i;
  }
  console.log(principal,
    annualInterestRate,
    loanTermYears)

  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalInterestPaid: totalInterestPaid.toFixed(2),
    monthsToPayoff: monthsToPayoff,
    amortizationSchedule: schedule,
    
  };
};
