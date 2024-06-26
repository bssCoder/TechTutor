const otpTemplate = (otp) => {
	return `<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8">
		<title>OTP Verification Email</title>
		<style>
			body {
				background-color: #ffffff;
				font-family: Arial, sans-serif;
				font-size: 16px;
				line-height: 1.4;
				color: #333333;
				margin: 0;
				padding: 0;
			}
  
			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
				text-align: center;
				border: 1px solid #ddd;
				border-radius: 8px;
				background-color: #f9f9f9;
			}
  
			.logo {
				max-width: 200px;
				margin-bottom: 20px;
			}
  
			.message {
				font-size: 24px;
				font-weight: bold;
				margin-bottom: 20px;
				color: #333;
			}
  
			.body {
				font-size: 16px;
				line-height: 1.6;
				margin-bottom: 20px;
				color: #555;
				text-align: left;
			}
  
			.highlight {
				font-weight: bold;
				color: #333;
			}
  
			.cta {
				display: inline-block;
				margin: 20px 0;
				padding: 10px 20px;
				background-color: #007BFF;
				color: #fff;
				text-decoration: none;
				border-radius: 5px;
				text-align: center;
			}
  
			.cta:hover {
				background-color: #0056b3;
			}
  
			.support {
				font-size: 14px;
				text-align: center;
				color: #777;
			}
  
			a {
				color: #007BFF;
				text-decoration: none;
			}
  
			a:hover {
				text-decoration: underline;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<a href="https://TechTutor-edtech-project.vercel.app">
				<img class="logo" src="https://i.ibb.co/2Z9GPmz/Logo-Full-Dark.png" alt="TechTutor Logo">
			</a>
			<div class="message">OTP Verification Email</div>
			<div class="body">
				<p>Dear User,</p>
				<p>Thank you for registering with TechTutor. To complete your registration, please use the following OTP (One-Time Password) to verify your account:</p>
				<h2 class="highlight">${otp}</h2>
				<p>This OTP is valid for 5 minutes. If you did not request this verification, please disregard this email. Once your account is verified, you will have access to our platform and its features.</p>
			</div>
			<div class="support">
				If you have any questions or need assistance, please feel free to reach out to us at 
				<a href="mailto:info@TechTutor.com">info@TechTutor.com</a>. We are here to help!
			</div>
		</div>
	</body>
	</html>`;
  };
  module.exports = otpTemplate;
  
