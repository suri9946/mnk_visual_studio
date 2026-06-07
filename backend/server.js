const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Resend } = require('resend');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const OWNER_EMAIL = process.env.RECIPIENT_EMAIL || 'hellomnkvisualhouse@gmail.com';

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

    if (!process.env.RESEND_API_KEY) {
        console.error("Missing RESEND_API_KEY environment variable.");
        return res.status(500).json({ success: false, message: "Email service not configured." });
    }

    try {
        console.log("Contact Form Submission:", { name, email, phone, service, message });

        const resend = new Resend(process.env.RESEND_API_KEY);

        const { data, error } = await resend.emails.send({
            from: 'MNK Visual House <onboarding@resend.dev>',
            to: [OWNER_EMAIL],
            replyTo: email,
            subject: `New Lead: ${service || 'Website'} Inquiry from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
                    <h2 style="color: #7B2FF7; border-bottom: 2px solid #E91E8C; padding-bottom: 10px; margin-top: 0;">
                        📬 New Enquiry — MNK Visual House
                    </h2>
                    <table style="width:100%; border-collapse: collapse;">
                        <tr><td style="padding: 8px 0; color: #6b7280; font-weight: bold; width: 130px;">Name</td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
                        <tr><td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#7B2FF7;">${escapeHtml(email)}</a></td></tr>
                        <tr><td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Phone</td><td style="padding: 8px 0;">${escapeHtml(phone || 'Not provided')}</td></tr>
                        <tr><td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Service</td><td style="padding: 8px 0;">${escapeHtml(service || 'Not specified')}</td></tr>
                    </table>
                    <div style="margin-top: 16px; background: #f9fafb; padding: 16px; border-radius: 8px; border-left: 4px solid #7B2FF7;">
                        <p style="margin: 0; color: #6b7280; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
                        <p style="margin: 8px 0 0; color: #1A1A2E;">${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
                    </div>
                    <p style="margin-top: 20px; color: #9ca3af; font-size: 12px; border-top: 1px solid #e5e7eb; padding-top: 12px;">
                        Sent from MNK Visual House website contact form. Reply directly to this email to respond to the inquiry.
                    </p>
                </div>
            `
        });

        if (error) {
            console.error("Resend API Error:", JSON.stringify(error));
            return res.status(500).json({ success: false, message: "Failed to send email. Please try again." });
        }

        console.log("✅ Email sent successfully. Resend ID:", data?.id);
        res.json({ success: true, message: "Message sent! We'll be in touch soon." });

    } catch (error) {
        console.error("Unexpected error:", error.message);
        res.status(500).json({ success: false, message: "Something went wrong. Please try again." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
