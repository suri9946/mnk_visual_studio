const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const OWNER_EMAIL = process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER;
const EMAIL_PASS = (process.env.EMAIL_PASS || '').replace(/\s/g, '');
const isPlaceholder = (value = '') => value.includes('your_') || value.includes('your@');

app.use(cors());
app.use(express.json());

const escapeHtml = (value = '') => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

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

    if (
        !process.env.EMAIL_USER ||
        !EMAIL_PASS ||
        !OWNER_EMAIL ||
        isPlaceholder(process.env.EMAIL_USER) ||
        isPlaceholder(EMAIL_PASS)
    ) {
        console.error("Missing email configuration. Set EMAIL_USER, EMAIL_PASS, and RECIPIENT_EMAIL in backend/.env.");
        return res.status(500).json({ success: false, message: "Email is not configured yet. Please contact us directly." });
    }

    try {
        // Log to console as well
        console.log("Contact Form Submission:", { name, email, phone, service, message });

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Assuming you're using Gmail
            auth: {
                user: process.env.EMAIL_USER, 
                pass: EMAIL_PASS
            }
        });

        // Email options
        const mailOptions = {
            from: `"MNK Visual House Website" <${process.env.EMAIL_USER}>`,
            to: OWNER_EMAIL,
            replyTo: email,
            subject: `New Lead: ${service || 'Website'} Inquiry from ${name}`,
            html: `
                <h2>New Website Inquiry</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
                <p><strong>Interested Service:</strong> ${escapeHtml(service || 'Not specified')}</p>
                <br/>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
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
