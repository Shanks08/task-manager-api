const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: "everythingAll08@gmail.com",
		subject: `Hey ${name}, thanks for joining in!`,
		text: "I hope that you die",
	});
};

const sendCancelEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: "everythingAll08@gmail.com",
		subject: `Hey ${name}, sorry to hear that you cancelled your account`,
		text: "BYE, and I hope I die",
	});
};

module.exports = {
	sendWelcomeEmail,
	sendCancelEmail,
};
