export function createWelcomeEmailTemplate(name, clientURL) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta color-scheme="dark supports-dark-mode">
    <meta name="supported-color-schemes" content="dark">
    <title>Welcome to Messenger</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* Resets and Core Setup */
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
        table { border-collapse: collapse !important; }
        body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: #09090b; }

        /* Typography preferences */
        body, td, th {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        /* Utilities */
        .text-muted { color: #a1a1aa !important; }
        .text-primary { color: #fafafa !important; }
        .border-color { border-color: #27272a !important; }
        .bg-card { background-color: #18181b !important; }

        /* Button Hover - Outlook doesn't support, but good for others */
        .shadcn-button:hover {
            background-color: #27272a !important;
            border-color: #52525b !important;
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #09090b; color: #fafafa;">

    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #09090b;">
        <tr>
            <td align="center" style="padding: 40px 10px;">
                
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; border: 1px solid #27272a; border-radius: 12px; overflow: hidden; background-color: #18181b; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
                    
                    <tr>
                        <td style="padding: 30px 35px 0px 35px;">
                            <p style="margin: 0; font-size: 35px; font-weight: 600; letter-spacing: 0.5px; color: #fafafa; text-transform: uppercase;">
                                WHISPER
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding: 25px 35px 35px 35px;">
                            <h1 style="margin: 0 0 15px 0; font-size: 28px; font-weight: 700; color: #fafafa; letter-spacing: -0.5px; line-height: 1.2;">
                                Welcome aboard, ${name}.
                            </h1>

                            <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #a1a1aa;">
                                Your account is successfully created. You are now connected to the fastest messaging platform designed for professionals. Here are your next steps to get set up.
                            </p>

                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top: 1px solid #27272a; margin-bottom: 35px;">
                                <tr>
                                    <td style="padding: 16px 0; border-bottom: 1px solid #27272a;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td width="30" valign="middle" style="font-size: 18px; color: #fafafa; line-height: 1;">&#9673;</td>
                                                <td style="font-size: 15px; color: #a1a1aa; line-height: 1.5;">
                                                    <span style="color: #fafafa; font-weight: 500;">Complete Profile.</span> Upload a photo and add your bio.
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 16px 0; border-bottom: 1px solid #27272a;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td width="30" valign="middle" style="font-size: 18px; color: #fafafa; line-height: 1;">&#9673;</td>
                                                <td style="font-size: 15px; color: #a1a1aa; line-height: 1.5;">
                                                    <span style="color: #fafafa; font-weight: 500;">Sync Contacts.</span> Instantly find your team members.
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 16px 0; border-bottom: 1px solid #27272a;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td width="30" valign="middle" style="font-size: 18px; color: #fafafa; line-height: 1;">&#9673;</td>
                                                <td style="font-size: 15px; color: #a1a1aa; line-height: 1.5;">
                                                    <span style="color: #fafafa; font-weight: 500;">Start Messaging.</span> Send your first secure message.
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td align="left">
                                        <a href="${clientURL}" class="shadcn-button" style="display: inline-block; padding: 14px 32px; font-size: 15px; font-weight: 500; color: #ffffff; background-color: #27272a; text-decoration: none; border-radius: 8px; border: 1px solid #3f3f46; mso-padding-alt: 0;">
                                            <span style="mso-text-raise: 15pt;">Open Whisper App</span>
                                            </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="padding: 25px 35px; background-color: #09090b; border-top: 1px solid #27272a;">
                             <p style="margin: 0; font-size: 13px; color: #71717a; line-height: 1.5;">
                                Need assistance? View our <a href="#" style="color: #a1a1aa; text-decoration: underline;">documentation</a> or contact support.
                            </p>
                        </td>
                    </tr>

                </table>
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td style="padding: 30px 0; text-align: center;">
                            <p style="margin: 0 0 10px 0; font-size: 12px; color: #52525b;">
                                © 2025 Whisper. Mechinagar, Nepal.
                            </p>
                            <p style="margin: 0; font-size: 12px; color: #52525b;">
                                <a href="#" style="color: #71717a; text-decoration: none; margin: 0 8px;">Preferences</a>
                                <span style="color: #27272a;">|</span>
                                <a href="#" style="color: #71717a; text-decoration: none; margin: 0 8px;">Privacy</a>
                            </p>
                        </td>
                    </tr>
                </table>

            </td>
        </tr>
    </table>

</body>
</html>
  `;
}