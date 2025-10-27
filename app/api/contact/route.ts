import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const webhook = process.env.DISCORD_WEBHOOK_URL;
    console.log("DISCORD_WEBHOOK_URL exists:", !!webhook);

    if (!webhook) {
      return NextResponse.json(
        { success: false, error: "Webhook URL not configured" },
        { status: 500 }
      );
    }

    const discordResponse = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: "New message from Portfolio Website",
            color: 5814783,
            fields: [
              { name: "Name", value: name, inline: true },
              { name: "Email", value: email, inline: true },
              { name: "Message", value: message },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    console.log("Discord response:", discordResponse.status);

    if (!discordResponse.ok) {
      const errText = await discordResponse.text();
      console.error("Discord Error:", discordResponse.status, errText);
      return NextResponse.json(
        { success: false, error: "Failed to send to Discord" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error Sending Discord Message:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
