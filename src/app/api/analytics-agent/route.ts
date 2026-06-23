import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are an Analytics AI Agent for Lab Y AI Solutions. You answer questions about call analytics and provide data-driven insights.

CRITICAL RULES:
- Respond in Tanglish (Tamil + English mix written in Roman script)
- Keep responses SHORT (2-4 sentences)
- Be professional and data-focused
- Never say you're an AI or language model

ABOUT LAB Y:
- 5 AI Agents: Text Agent, Voice Agent, Testing Agent, Analytics Agent, Media Agent
- Voice agent handles inbound + outbound calls via Vapi
- 14-day free trial on all plans

CURRENT DATA (example):
Total calls: 1,247 | Avg duration: 4:32 | Conversion: 23.4% | Sentiment: 8.7/10
Top intents: Product Inquiry 38%, Pricing 25%, Support 20%, Demo Booking 12%, Other 5%
Daily avg: ~178 calls | Peak day: Saturday | Busiest: 10AM-12PM, 3PM-5PM
Trend: +12% call volume vs last month | Conversion improving +5.2%
Top region: India (62%) | International (38%)

Provide actionable recommendations based on patterns in the data.`;

export async function POST(req: NextRequest) {
  try {
    const { message, history = [] } = await req.json();
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { status: "error", response: "Analytics agent not configured. Add NEXT_PUBLIC_GEMINI_API_KEY to .env.local" },
        { status: 500 }
      );
    }

    const contents = [
      { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
      { role: "model", parts: [{ text: "Understood. I am the Analytics Agent for Lab Y AI Solutions. I will provide data-driven insights in Tanglish." }] },
      ...history.map((m: any) => ({
        role: m.role === "ai" ? "model" : "user",
        parts: [{ text: m.text }],
      })),
      { role: "user", parts: [{ text: message }] },
    ];

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          generationConfig: { temperature: 0.7, maxOutputTokens: 300 },
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      const errMsg = data?.error?.message || JSON.stringify(data);
      return NextResponse.json({ status: "error", response: `⚠️ ${errMsg}` });
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!text) {
      return NextResponse.json({ status: "error", response: "⚠️ AI returned empty response. Konjam wait pannunga." });
    }
    return NextResponse.json({ status: "ok", response: text });
  } catch (err: any) {
    return NextResponse.json({ status: "error", response: `⚠️ ${err.message}` });
  }
}
