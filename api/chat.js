import Anthropic from "@anthropic-ai/sdk";
import { getSystemPrompt, personalInfo } from "./knowledge.js";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export default async function handler(req, res) {
    // Handle CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { message } = req.body;

        if (!message || typeof message !== "string") {
            return res.status(400).json({ error: "Message is required" });
        }

        if (!process.env.ANTHROPIC_API_KEY) {
            console.error("ANTHROPIC_API_KEY is not configured");
            return res.status(200).json({
                response: `I'm having trouble connecting right now. Please email Shravan directly at ${personalInfo.email} for assistance.`,
                fallback: true,
            });
        }

        const response = await client.messages.create({
            model: "claude-haiku-4-5",
            max_tokens: 512,
            system: getSystemPrompt(),
            messages: [
                { role: "user", content: message },
            ],
        });

        const text = response.content[0]?.type === "text"
            ? response.content[0].text
            : "";

        return res.status(200).json({ response: text });

    } catch (error) {
        console.error("Chat API error:", error);
        return res.status(200).json({
            response: `I'm sorry, I'm having a moment! You can reach Shravan at ${personalInfo.email} or check out his LinkedIn profile.`,
            fallback: true,
        });
    }
}
