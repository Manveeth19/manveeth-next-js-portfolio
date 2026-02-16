import Groq from "groq-sdk";
import { NextResponse } from "next/server";
import { bioData } from "@/constants/bioData";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Fallback responses when API quota is exceeded
const FALLBACK_RESPONSES: { [key: string]: string } = {
  "projects": `Manveeth has built impressive full-stack projects:

1. **PDF Play** (https://www.pdfplay.in) - A web platform for PDF conversion, merging, and optimization built with React.js, Node.js, and Firebase.

2. **FitHub** (https://fithub-demo.vercel.app) - A real-time fitness app using computer vision (OpenCV, MediaPipe) for exercise tracking and posture correction.

3. **Book Recommendation System** - An intelligent system using Machine Learning and React-Flask architecture.

4. **Modern Portfolio** (https://manveeth-next-js-portfolio.vercel.app/) - Built with Next.js, TypeScript, Tailwind CSS, and Three.js.

Visit GitHub for more: ${bioData.contact.github}`,

  "skills": `**Technical Expertise:**

**Languages:** ${bioData.skills.languages.join(", ")}
**Frontend:** ${bioData.skills.frontend.join(", ")}
**Backend & Databases:** ${bioData.skills.backend_databases.join(", ")}
**AI & Data:** ${bioData.skills.ai_data.join(", ")}
**Tools & Deployment:** ${bioData.skills.tools_deployment.join(", ")}

B.Tech graduate (2025) with 7.5 CGPA and 100+ LeetCode problems solved.`,

  "contact": `**Get in Touch with Manveeth:**

📧 Email: ${bioData.contact.email}
📱 Phone: ${bioData.contact.phone}
🔗 LinkedIn: ${bioData.contact.linkedin}
💼 Portfolio: ${bioData.contact.portfolio}
🐙 GitHub: ${bioData.contact.github}`,

  "about": `**About Manveeth Reddy**

I'm a Full-Stack Web Developer & Software Engineer based in ${bioData.location}. I'm a recent graduate (2025) specializing in the MERN stack with proven expertise in building scalable, user-centric applications.

**Key Highlights:**
- Specialized in high-performance platforms like PDF Play and FitHub
- B.Tech Information Technology with 7.5 CGPA
- 100+ LeetCode problems solved
- Passionate about modern web technologies and solving real-world problems

**Portfolio:** ${bioData.contact.portfolio}
**GitHub:** ${bioData.contact.github}`,

  "education": `**Education:**
${bioData.education.degree}
Institution: ${bioData.education.institution}
Graduation: ${bioData.education.duration}
CGPA: ${bioData.education.cgpa}

**Achievements:**
${bioData.achievements.map((achievement, i) => `${i + 1}. ${achievement}`).join("\n")}`,

  "location": `Manveeth is based in ${bioData.location}, India.`,

  "default": `Hi! I'm Manveeth's AI Assistant. I can help you with information about projects, skills, education, contact details, and more. Feel free to ask about anything! 

📧 Email: ${bioData.contact.email}
🔗 LinkedIn: ${bioData.contact.linkedin}`
};

function getFallbackResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  if (message.includes("project")) return FALLBACK_RESPONSES.projects;
  if (message.includes("skill") || message.includes("technology") || message.includes("tech") || message.includes("language")) return FALLBACK_RESPONSES.skills;
  if (message.includes("contact") || message.includes("email") || message.includes("reach") || message.includes("phone") || message.includes("linkedin") || message.includes("github")) return FALLBACK_RESPONSES.contact;
  if (message.includes("about") || message.includes("who") || message.includes("yourself")) return FALLBACK_RESPONSES.about;
  if (message.includes("education") || message.includes("degree") || message.includes("university") || message.includes("college")) return FALLBACK_RESPONSES.education;
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
1. Use the dataset to answer questions about skills, projects, experience, education, and contact info.
2. Keep responses professional, friendly, and well-organized.
3. For longer responses (3+ items or details), use bullet points (•) for better readability.
4. Format responses with clear structure:
   - Use **bold** for ALL section headers and main titles
   - Use bullet points (•) for lists
   - Make the title/heading of each bullet point item **bold** (e.g., **PDF Play:** description)
   - Keep each point concise
   - Add line breaks between sections for clarity
5. If a user asks for something not in the data, politely ask them to email ${bioData.contact.email}.
6. When listing multiple items (projects, skills, achievements), always use bullet points with **bold titles**.
7. Maintain a conversational yet professional tone.
8. Example format for projects: • **Project Name:** Brief description`;

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