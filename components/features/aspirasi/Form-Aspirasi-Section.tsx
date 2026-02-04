"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function FormAspirasiSection() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [catatan, setCatatan] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    nama?: string;
    email?: string;
    catatan?: string;
  }>({});

  function validate() {
    const e: typeof errors = {};
    const n = nama.trim();
    const em = email.trim();
    const c = catatan.trim();

    if (!n) e.nama = "Nama wajib diisi.";
    if (!em) e.email = "Email wajib diisi.";
    else if (!/^\S+@\S+\.\S+$/.test(em)) e.email = "Format email tidak valid.";
    if (!c) e.catatan = "Catatan wajib diisi.";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 500));

    setSubmitting(false);
    setNama("");
    setEmail("");
    setCatatan("");
    setErrors({});
  }

  return (
    <section className="relative py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_600px_at_50%_20%,rgba(211,163,45,0.14),transparent_60%)]" />
      {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_600px_at_50%_80%,rgba(211,163,45,0.10),transparent_60%)]" /> */}

      <div className="mx-auto max-w-2xl px-5 sm:px-7">
        <div className="text-center">
          <div className="mx-auto mb-3 h-1 w-16 rounded-full bg-[var(--himsi-gold)]/80" />
          <h2 className="text-4xl font-extrabold tracking-tight">
            <span className="text-[var(--himsi-gold)]">Form</span> Aspirasi
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Bagikan aspirasi, saran, dan ide Anda untuk membantu kami tumbuh dan berkembang. Pendapat Anda sangat berarti bagi kemajuan bersama.
          </p>
        </div>

        <Card className="mt-10 border-border/60 shadow-sm">
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-10"> 
              <div className="space-y-2">
                <Label htmlFor="nama">Nama</Label>
                <Input
                  id="nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Nama lengkap"
                  className={
                    errors.nama ? "border-destructive focus-visible:ring-destructive/20" : ""
                  }
                />
                {errors.nama && <p className="text-xs text-destructive">{errors.nama}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className={
                    errors.email ? "border-destructive focus-visible:ring-destructive/20" : ""
                  }
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="catatan">Catatan</Label>
                <Textarea
                  id="catatan"
                  value={catatan}
                  onChange={(e) => setCatatan(e.target.value)}
                  placeholder="Tulis aspirasi/catatan kamu..."
                  rows={6}
                  className={
                    errors.catatan ? "border-destructive focus-visible:ring-destructive/20" : ""
                  }
                />
                {errors.catatan && (
                  <p className="text-xs text-destructive">{errors.catatan}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full font-semibold bg-[#0A3763] dark:bg-[#2464A8]"
              >
                {submitting ? "Mengirim..." : "Kirim"}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Terima kasih sudah membantu HIMSI menjadi lebih baik.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
