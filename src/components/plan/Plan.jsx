const Plan = ({ name }) => {
	const plan = PRICING_PLANS[name];

	return <p>{plan.price}</p>;
};
