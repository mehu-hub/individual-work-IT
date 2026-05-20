"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TrainFront, Eye, EyeOff, UserPlus, AlertCircle, CheckCircle2 } from "lucide-react";

export default function SignupPage() {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });

  function set(field: string) {
    return (e: React.ChangeEvent<HTMLInputElement>) => setForm(f => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) { setError("Please fill in all required fields."); return; }
    if (form.password !== form.confirm) { setError("Passwords do not match."); return; }
    if (form.password.length < 8) { setError("Password must be at least 8 characters."); return; }
    setError("");
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 1400);
  }

  if (done) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 px-4 py-12">
        <Card className="w-full max-w-md shadow-xl text-center p-8">
          <div className="flex justify-center mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-[#1E3A5F] mb-2">Account created!</h2>
          <p className="text-slate-500 text-sm mb-6">Welcome to Vilnius Train System. You can now sign in.</p>
          <Link href="/login">
            <Button className="w-full bg-[#2563EB] hover:bg-blue-600">Go to Login</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1E3A5F] shadow-lg">
            <TrainFront className="h-7 w-7 text-white" />
          </div>
          <div>
            <p className="text-xl font-bold text-[#1E3A5F]">Vilnius Train System</p>
            <p className="text-sm text-slate-500">Create your free account</p>
          </div>
        </div>

        <Card className="shadow-xl border-slate-200">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg text-[#1E3A5F]">Sign up</CardTitle>
            <CardDescription>Fill in the details below to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <form id="signup-form" onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700">
                  <AlertCircle className="h-4 w-4 shrink-0" />{error}
                </div>
              )}

              <div className="space-y-1.5">
                <Label htmlFor="signup-name">Full name <span className="text-red-500">*</span></Label>
                <Input id="signup-name" type="text" placeholder="Jonas Jonaitis" value={form.name} onChange={set("name")} required />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="signup-email">Email address <span className="text-red-500">*</span></Label>
                <Input id="signup-email" type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} required />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="signup-password">Password <span className="text-red-500">*</span></Label>
                <div className="relative">
                  <Input
                    id="signup-password"
                    type={showPass ? "text" : "password"}
                    placeholder="Min. 8 characters"
                    value={form.password}
                    onChange={set("password")}
                    required
                    className="pr-10"
                  />
                  <button type="button" onClick={() => setShowPass(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600" aria-label="Toggle password">
                    {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {form.password && (
                  <div className="flex gap-1 pt-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${
                        form.password.length > i * 3
                          ? form.password.length < 6 ? "bg-red-400"
                          : form.password.length < 10 ? "bg-amber-400"
                          : "bg-emerald-500"
                          : "bg-slate-200"
                      }`} />
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="signup-confirm">Confirm password <span className="text-red-500">*</span></Label>
                <Input id="signup-confirm" type="password" placeholder="Repeat your password" value={form.confirm} onChange={set("confirm")} required />
              </div>

              <Button id="signup-submit-btn" type="submit" className="w-full bg-[#2563EB] hover:bg-blue-600 gap-2 mt-2" disabled={loading}>
                {loading
                  ? <><span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />Creating account…</>
                  : <><UserPlus className="h-4 w-4" />Create Account</>}
              </Button>
            </form>

            <div className="my-5 flex items-center gap-3">
              <Separator className="flex-1" />
              <span className="text-xs text-slate-400">or sign up with</span>
              <Separator className="flex-1" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button id="signup-google-btn" variant="outline" type="button" className="gap-2 text-sm">
                <svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Google
              </Button>
              <Button id="signup-ms-btn" variant="outline" type="button" className="gap-2 text-sm">
                <svg viewBox="0 0 24 24" className="h-4 w-4"><rect x="1" y="1" width="10" height="10" fill="#F25022"/><rect x="13" y="1" width="10" height="10" fill="#7FBA00"/><rect x="1" y="13" width="10" height="10" fill="#00A4EF"/><rect x="13" y="13" width="10" height="10" fill="#FFB900"/></svg>
                Microsoft
              </Button>
            </div>

            <p className="mt-4 text-center text-xs text-slate-400">
              By signing up you agree to our{" "}
              <Link href="#" className="text-[#2563EB] hover:underline">Terms of Service</Link>
              {" "}and{" "}
              <Link href="#" className="text-[#2563EB] hover:underline">Privacy Policy</Link>.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-4">
            <p className="text-sm text-slate-500">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-[#2563EB] hover:underline">Sign in</Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
