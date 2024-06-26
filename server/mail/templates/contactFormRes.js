exports.contactUsEmail = (
    email,
    firstname,
    lastname,
    message,
    phoneNo,
    countrycode
  ) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Contact Form Confirmation</title>
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
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    <body>
    <div class="container">
        <a href="https://TechTutor-edtech-project.vercel.app">
            <img class="logo" src="https://i.ibb.co/2Z9GPmz/Logo-Full-Dark.png" alt="TechTutor Logo">
        </a>
        <div class="message">Contact Form Confirmation</div>
        <div class="body">
            <p>Dear ${firstname} ${lastname},</p>
            <p>Thank you for reaching out to us. We have received your message and sincerely appreciate your interest in our services.</p>
            <p>Below are the details you provided:</p>
            <p><strong>Name:</strong> ${firstname} ${lastname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phoneNo}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p>Our team is currently reviewing your message and will respond to you at the earliest convenience. Your queries and feedback are important to us.</p>
        </div>
        <div class="support">
            If you have any further questions or require immediate assistance, please do not hesitate to contact us at 
            <a href="mailto:info@TechTutor.com">info@TechTutor.com</a>. We are here to help!
        </div>
    </div>
</body>
   
    
    </html>`
  }
