function calculateCompoundInterest(Principal, Rate, Time, numberOfTimesInterestApplied) {
    let amount = Principal * Math.pow(1 + (Rate / numberOfTimesInterestApplied), numberOfTimesInterestApplied * Time);
    return amount;
}

console.log("The compound interest after 3 years is:", calculateCompoundInterest(1000, 0.05, 3, 12));