const filter = {
	onlyNumber: function(stringToCheck){
		const isOnlyNumber = /^\d+$/.test(stringToCheck);
		return isOnlyNumber;
	},
	containSymbol: function(stringToCheck){
		const isContainSymbol = /[^a-zA-Z0-9]/.test(stringToCheck);
		return isContainSymbol;
	},
	validEmail: function(stringToCheck){
		const isValidEmail = /^[a-zA-Z0-9@.,]+$/.test(stringToCheck);
		return isValidEmail;
	}
};

module.exports = filter;