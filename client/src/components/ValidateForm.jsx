const validateForm = (formData) => {
	const errors = {};
	if (!formData.username || formData.username.length < 3) {
		errors.username = "Username must be at least 3 characters long";
	}
	if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
		errors.email = "Email address is invalid";
	}
	if (!formData.password || formData.password.length < 6) {
		errors.password = "Password must be at least 6 characters long";
	}
	return errors;
};

export default validateForm;
