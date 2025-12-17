import aj from "../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";

export const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req);

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({ message: "Too many requests - Rate limit exceeded" });
            }
            else if (decision.reason.isBot()) {
                return res.status(403).json({ message: "Forbidden - Bot access denied" });
            } else {
                return res.status(403).json({ message: "Forbidden - Access denied by security policy " });
            }
        }
        if (decision.results.some(isSpoofedBot)) {
            return res.status(403).json({
                error: "Spoofed Bot - Access denied",
                message: "Malicious bot activity detected. If you believe this is an error, please contact support."
            })
        }
        next();
    } catch (error) {
        console.log("Arcjet Protection error", error);

    }
}