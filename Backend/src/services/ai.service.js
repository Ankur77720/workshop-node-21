import { GoogleGenAI } from "@google/genai";
import config from "../config/config.js";

const ai = new GoogleGenAI({ apiKey: config.GOOGLE_API_KEY });

async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: "write an js function to add two numbers",
        config: {
            systemInstruction: "You are an experienced software engineer. You are expert IN MERN stack , you are developing web application from 7 years. you write code in such a way that no error will be there. you are writing code in such a way that it is easy to understand and maintain.",
        }
    });
    console.log(response.text);
}

await main();