const FREE_PLAN = {
	id: v4(),
	plan: 'Free Plan',
	price: '$0.00',
	features: [
		{ name: 'Transactions', value: true },
		{ name: 'Auth', value: true },
		{ name: 'Identity', value: true },
		{ name: 'Investments', value: false },
		{ name: 'Assets', value: false },
		{ name: 'Liabilities', value: false },
		{ name: 'Income', value: false }
	]
};

const BASIC_PLAN = {
	id: v4(),
	plan: 'Basic Plan',
	price: '$249.00',
	features: [
		{ name: 'Transactions', value: true },
		{ name: 'Auth', value: true },
		{ name: 'Identity', value: true },
		{ name: 'Investments', value: true },
		{ name: 'Assets', value: true },
		{ name: 'Liabilities', value: false },
		{ name: 'Income', value: false }
	]
};

const PREMIUM_PLAN = {
	id: v4(),
	plan: 'Premium Plan',
	price: '$499.00',
	features: [
		{ name: 'Transactions', value: true },
		{ name: 'Auth', value: true },
		{ name: 'Identity', value: true },
		{ name: 'Investments', value: true },
		{ name: 'Assets', value: true },
		{ name: 'Liabilities', value: true },
		{ name: 'Income', value: true }
	]
};

export const PRICING_PLANS = {
	free: FREE_PLAN,
	basic: BASIC_PLAN,
	premium: PREMIUM_PLAN
};
