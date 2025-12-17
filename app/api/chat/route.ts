import Groq from "groq-sdk";
import { NextResponse } from "next/server";
import { bioData } from "@/constants/bioData";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Fallback responses when API quota is exceeded
const FALLBACK_RESPONSES: { [key: string]: string } = {
  "projects": `Manveeth has developed several impressive projects including a personal portfolio with advanced animations and AI integration using Next.js, TypeScript, and Tailwind CSS. Check out his GitHub for more details: ${bioData.contact.github}`,
  "skills": `Core skills include: ${bioData.skills.frontend.join(", ")} (Frontend), ${bioData.skills.backend.join(", ")} (Backend), and ${bioData.skills.tools.join(", ")} (Tools). Contact for detailed expertise.`,
  "contact": `You can reach Manveeth at ${bioData.contact.email} or connect on LinkedIn: ${bioData.contact.linkedin}. Phone: ${bioData.contact.phone}`,
  "location": `Manveeth is based in ${bioData.location}.`,
  "default": `Hi! I'm Manveeth's AI Assistant. I can help you with information about projects, skills, and contact details. Please try again in a moment or email ${bioData.contact.email}.`
};

function getFallbackResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  if (message.includes("project")) return FALLBACK_RESPONSES.projects;
  if (message.includes("skill") || message.includes("technology") || message.includes("tech")) return FALLBACK_RESPONSES.skills;
  if (message.includes("contact") || message.includes("email") || message.includes("reach") || message.includes("phone")) return FALLBACK_RESPONSES.contact;
  if (message.includes("location") || message.includes("where")) return FALLBACK_RESPONSES.location;
  
  return FALLBACK_RESPONSES.default;
}

export async function POST(req: Request) {
  let userMessage = "";
  
  try {
    const body = await req.json();
    const { messages } = body;
    userMessage = messages?.[messages.length - 1]?.content || "";
    
    // Validate API key
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ 
        role: 'assistant', 
        content: `API key not configured. Please contact ${bioData.contact.email}.` 
      }, { status: 200 });
    }

    // ✅ Using Groq Llama 3 model
    const systemInstruction = `You are the AI Assistant for Manveeth Reddy's portfolio. 
Website Dataset: ${JSON.stringify(bioData)}.

Instructions:
1. Use the dataset to answer questions about skills, projects, and contact info.
2. Keep responses professional, friendly, and under 3 sentences.
3. If a user asks for something not in the data, ask them to email ${bioData.contact.email}.`;

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: systemInstruction,
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
      temperature: 0.7,
      max_tokens: 1024,
    });

    const responseText = response.choices[0]?.message?.content || "";
    
    return NextResponse.json({ 
      success: true,
      role: 'assistant', 
      content: responseText
    });
  } catch (error: any) {
    console.error("Groq Error:", error);
    console.error("Error Status:", error.status);
    console.error("Error Message:", error.message);

    // Handle quota exceeded (429) with fallback response
    if (error.status === 429) {
      console.warn("⚠️ Quota exceeded - using fallback response");
      const fallbackResponse = getFallbackResponse(userMessage);
      
      return NextResponse.json({ 
        success: false,
        role: 'assistant', 
        content: fallbackResponse,
        isGraceful: true,
        message: "API quota exceeded - using cached response"
      }, { status: 200 });
    }

    // For other errors (404, 500, etc), return user-friendly message with fallback
    const fallbackResponse = getFallbackResponse(userMessage);
    console.warn("Using fallback response for error status:", error.status);
    
    return NextResponse.json(
      { 
        success: false,
        role: 'assistant', 
        content: fallbackResponse,
        isGraceful: true,
        message: "Temporary API issue - using cached response"
      }, 
      { status: 200 }
    );
  }
}