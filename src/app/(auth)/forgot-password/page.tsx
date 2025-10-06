"use client";

import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-cloud">
      <div className="max-w-md w-full space-y-8 p-8 bg-neutral-pale rounded-lg border border-neutral-light">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-lead">Reset Password</h2>
          <p className="mt-2 text-neutral-slate">Enter your email to reset your password</p>
        </div>

        <div className="space-y-4">
          <div className="text-center text-neutral-mid">
            Password reset functionality - Ready for integration
          </div>

          <div className="text-center">
            <span className="text-neutral-slate">Remember your password? </span>
            <Link href="/login" className="text-brand-primary hover:text-brand-vivid font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
