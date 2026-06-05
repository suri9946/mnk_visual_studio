const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/services', (req, res) => {
    const services = [
        {
            id: 1,
            title: "Graphic Design",
            description: "Stunning visuals that communicate your brand identity with clarity, creativity, and purpose across every medium.",
            icon: "PenTool"
        },
        {
            id: 2,
            title: "Reels Production",
            description: "High-impact short-form video content crafted to stop the scroll, grow your audience, and drive engagement.",
            icon: "Film"
        },
        {
            id: 3,
            title: "Social Media Visuals",
            description: "Consistent, on-brand creative content designed for all your social platforms to build a powerful digital presence.",
            icon: "Monitor"
        },
        {
            id: 4,
            title: "Meta Ads",
            description: "Creative ad visuals for Facebook and Instagram that are designed to attract, engage, and convert your target audience.",
            icon: "Megaphone"
        },
        {
            id: 5,
            title: "Google Ads & Campaigns",
            description: "Compelling ad creatives and campaign visuals designed to maximise your online reach and brand visibility.",
            icon: "Globe"
        }
    ];
    res.json(services);
});

app.get('/api/stats', (req, res) => {
    res.json({
        clients: "50+",
        projects: "120+",
        roi: "300%",
        experience: "5+"
    });
});

app.post('/api/contact', async (req, res) => {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "Please fill in all required fields." });
    }

    try {
        // Log to console as well
        console.log("Contact Form Submission:", { name, email, phone, service, message });

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Assuming you're using Gmail
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS
            }
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'hellomnkvisualhouse@gmail.com', // Where you want to receive the leads
            subject: `New Lead: ${service} Inquiry from ${name}`,
            html: `
                <h2>New Website Inquiry</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Interested Service:</strong> ${service || 'Not specified'}</p>
                <br/>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.json({ success: true, message: "Message sent! We'll be in touch." });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Something went wrong. Please check your email configuration." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
