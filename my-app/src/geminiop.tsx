import { GoogleGenAI } from "@google/genai";
const MY_API_KEY=import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: MY_API_KEY});
export default async function main(query:string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Give me optimised version of this"+query
  });
  console.log(response.text);
}