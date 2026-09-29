import nodemailer from "nodemailer";
export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    if (!body || typeof body !== "object")
      return Response.json({ success: false }, { status: 400 });
    const { name, email, subject, message } = body as Record<string, unknown>;
    if (
      typeof name !== "string" ||
      !name.trim() ||
      name.length > 100 ||
      typeof email !== "string" ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof subject !== "string" ||
      !subject.trim() ||
      subject.length > 160 ||
      /[\r\n]/.test(subject) ||
      typeof message !== "string" ||
      message.trim().length < 10 ||
      message.length > 5000
    )
      return Response.json({ success: false }, { status: 400 });
    if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASS)
      return Response.json({ success: false }, { status: 503 });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.SMTP_EMAIL, pass: process.env.SMTP_PASS },
      connectionTimeout: 10000,
      socketTimeout: 15000,
    });
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      replyTo: email,
      to: process.env.SMTP_EMAIL,
      subject: subject.trim(),
      text: `Nom : ${name.trim()}\nEmail : ${email}\n\n${message.trim()}`,
    });
    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false }, { status: 500 });
  }
}
