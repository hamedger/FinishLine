import { NextRequest, NextResponse } from "next/server";
import { BUSINESS } from "@/lib/constants";

interface ContactPayload {
  formType: "contact" | "fleet";
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  company?: string;
  fleetSize?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { formType, name, email, phone, message, company, fleetSize } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (formType === "fleet" && (!company || !fleetSize)) {
      return NextResponse.json(
        { error: "Please provide company name and fleet size." },
        { status: 400 },
      );
    }

    const subject =
      formType === "fleet"
        ? `Fleet Quote Request from ${company}`
        : `Website Contact from ${name}`;

    const emailBody = [
      `Form: ${formType === "fleet" ? "Fleet Quote Request" : "Contact Form"}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      formType === "fleet" ? `Company: ${company}` : null,
      formType === "fleet" ? `Fleet Size: ${fleetSize}` : null,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(BUSINESS.contactEmail)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[Finish Line Website] ${subject}`,
          _template: "table",
          _captcha: "false",
          form_type: formType,
          name,
          email,
          phone,
          company: company ?? "",
          fleet_size: fleetSize ?? "",
          message: emailBody,
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Email delivery failed");
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "Unable to send message right now. Please call us at (734) 367-6457.",
      },
      { status: 500 },
    );
  }
}
