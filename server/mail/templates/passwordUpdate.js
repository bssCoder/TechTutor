exports.paymentSuccessEmail = (name, amount, orderId, paymentId) => {
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Payment Confirmation</title>
        <style>
            body {
                background-color: #f4f4f4;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.6;
                color: #333333;
                margin: 0;
                padding: 0;
            }
  
            .container {
                max-width: 600px;
                margin: 20px auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
  
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
  
            .message {
                font-size: 20px;
                font-weight: bold;
                color: #333333;
                margin-bottom: 10px;
            }
  
            .body {
                margin-bottom: 20px;
            }
  
            .highlight {
                font-weight: bold;
            }
  
            .details {
                margin-top: 15px;
                padding: 10px;
                background-color: #f0f0f0;
                border-radius: 5px;
                font-size: 14px;
            }
  
            .support {
                margin-top: 20px;
                font-size: 14px;
                color: #666666;
            }
  
            .support a {
                color: #007BFF;
                text-decoration: none;
            }
  
            .support a:hover {
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <a href="https://TechTutor-edtech-project.vercel.app">
                <img class="logo" src="https://i.ibb.co/2Z9GPmz/Logo-Full-Dark.png" alt="TechTutor Logo">
            </a>
            <div class="message">Payment Confirmation</div>
            <div class="body">
                <p>Dear ${name},</p>
                <p>We are pleased to inform you that your payment of <span class="highlight">₹${amount}</span> has been successfully received.</p>
                <div class="details">
                    <p><strong>Payment ID:</strong> ${paymentId}</p>
                    <p><strong>Order ID:</strong> ${orderId}</p>
                </div>
                <p>Your payment has been processed and your order is now confirmed. You can expect further updates regarding your order status shortly.</p>
                <p>Thank you for choosing TechTutor!</p>
            </div>
            <div class="support">
                If you have any questions or need further assistance, please feel free to <a href="mailto:info@TechTutor.com">contact us</a>. Our support team is ready to assist you.
            </div>
        </div>
    </body>
    </html>`;
  };
  
