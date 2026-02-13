export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";    

const schema = z.object({
  nama: z.string().min(1, "Nama wajib diisi.").max(80),
  email: z.string().email("Format email tidak valid.").max(120),
  catatan: z.string().min(1, "Catatan wajib diisi.").max(2000),
  hp: z.string().optional(), 
});

function env(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      const msg = parsed.error.issues[0]?.message ?? "Data tidak valid.";
      return NextResponse.json({ ok: false, message: msg }, { status: 400 });
    }

    const { nama, email, catatan, hp } = parsed.data;

    if (hp && hp.trim() !== "") return NextResponse.json({ ok: true });

    const host = env("SMTP_HOST");
    const port = Number(env("SMTP_PORT"));
    const secure = env("SMTP_SECURE") === "true";
    const user = env("SMTP_USER");
    const pass = env("SMTP_PASS");
    const to = process.env.ASPIRASI_TO || user;

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
    });

    await transporter.sendMail({
        from: `"Aspirasi HIMSI" <${user}>`,
        to,
        subject: `[Aspirasi HIMSI] ${nama}`,
        replyTo: email,
        text:
            `Nama: ${nama}\n` +
            `Email: ${email}\n\n` +
            `Catatan:\n${catatan}\n\n` +
            `Waktu: ${new Date().toISOString()}\n`,
    });

    return NextResponse.json({ ok: true });
    } catch (err: any) {
        return NextResponse.json(
            { ok: false, message: err?.message ?? "Gagal mengirim." },
            { status: 500 }
        );
    }
}
