import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
    // Note: I changed 't   o' to 'email' in the args to match usage below
    const { data, error } = await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`, // Ensure this matches your verified sender
        to: email,
        subject: "Welcome to Messenger!",
        html: createWelcomeEmailTemplate(name, clientURL),
    });

    if (error) {
        console.error("Error sending welcome email:", error);
        throw new Error("Failed to send welcome email");
    }

    console.log("Welcome email sent successfully:", data);
    return data;
};
