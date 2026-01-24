import nodemailer from 'nodemailer';

export async function sendEmail({ to, subject, html }) {
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
        console.error('Missing EMAIL_USER or EMAIL_PASS environment variables');
        return { success: false, error: 'Email configuration missing' };
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user,
            pass,
        },
    });

    try {
        console.log(`[Email] Attempting to send email to: ${to} | Subject: ${subject}`);
        const info = await transporter.sendMail({
            from: `"MindToCode" <${user}>`,
            to,
            subject,
            html,
        });

        console.log("[Email] Message sent successfully: %s", info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error: error.message };
    }
}
