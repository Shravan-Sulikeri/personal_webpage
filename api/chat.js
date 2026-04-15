import { GoogleGenerativeAI } from "@google/generative-ai";
import { getSystemPrompt, personalInfo } from "./knowledge.js";

// Initialize Google Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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

        // Check if API key is configured
        if (!process.env.GEMINI_API_KEY) {
            console.error("GEMINI_API_KEY is not configured");
            return res.status(200).json({
                response: `I'm having trouble connecting right now. Please email Shravan directly at ${personalInfo.email} for assistance.`,
                fallback: true,
            });
        }

        // Initialize the model
        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash",
            generationConfig: {
                temperature: 0.7,
                topP: 0.8,
                topK: 40,
                maxOutputTokens: 500,
            },
        });

        // Build the prompt with system context
        const systemPrompt = getSystemPrompt();
        const fullPrompt = `${systemPrompt}\n\nUser question: ${message}\n\nRespond helpfully and concisely:`;

        // Generate response
        const result = await model.generateContent(fullPrompt);
        const response = result.response.text();

        return res.status(200).json({ response });
    } catch (error) {
        console.error("Chat API error:", error);

        // Provide a graceful fallback
        return res.status(200).json({
            response: `I'm sorry, I'm having a moment! For now, you can reach Shravan at ${personalInfo.email} or check out his LinkedIn profile.`,
            fallback: true,
        });
    }
}
