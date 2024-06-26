exports.courseEnrollmentEmail = (courseName, name) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Course Registration Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
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
                text-align: center;
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
                font-size: 16px;
                margin-bottom: 20px;
                text-align: left;
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
                color: #666666;
                margin-top: 20px;
            }
    
            .support a {
                color: #007BFF;
                text-decoration: none;
            }
    
            .support a:hover {
                text-decoration: underline;
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
            <div class="message">Course Registration Confirmation</div>
            <div class="body">
                <p>Dear ${name},</p>
                <p>Congratulations! You have successfully registered for the course <span class="highlight">"${courseName}"</span>. We are thrilled to welcome you to our learning community.</p>
                <p>This course is designed to provide you with the skills and knowledge needed to excel in your field. To get started, please log in to your learning dashboard where you can access all the course materials, track your progress, and participate in discussions with fellow learners.</p>
                <p>We are committed to supporting you throughout your learning journey. If you have any questions or need assistance, please do not hesitate to reach out to our support team.</p>
                <a class="cta" href="https://TechTutor-edtech-project.vercel.app/dashboard">Go to Dashboard</a>
            </div>
            <div class="support">
                If you have any questions or need further assistance, please feel free to <a href="mailto:info@TechTutor.com">contact us</a>. We are here to help!
            </div>
        </div>
    </body>
    </html>`;
  };
  
