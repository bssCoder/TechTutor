exports.passwordUpdated = (email, name) => {
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Password Update Confirmation</title>
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
            <div class="message">Password Update Confirmation</div>
            <div class="body">
                <p>Dear ${name},</p>
                <p>Your password has been successfully updated for the email <span class="highlight">${email}</span>.</p>
                <p>If you did not request this password change, please contact us immediately to secure your account.</p>
            </div>
            <div class="support">
                If you have any questions or need further assistance, please feel free to reach out to us at 
                <a href="mailto:info@TechTutor.com">info@TechTutor.com</a>. We are here to help!
            </div>
        </div>
    </body>
    </html>`;
  };
  
