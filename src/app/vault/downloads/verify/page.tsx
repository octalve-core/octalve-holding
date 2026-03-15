type VerifyPageProps = {
  searchParams: Promise<{
    grant?: string;
    token?: string;
    error?: string;
    resent?: string;
  }>;
};

export default async function VaultDownloadsVerifyPage({
  searchParams,
}: VerifyPageProps) {
  const params = await searchParams;
  const grant = params.grant ?? "";
  const token = params.token ?? "";
  const error = params.error ?? "";
  const resent = params.resent === "1";

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-[760px] rounded-[32px] border border-slate-200 bg-white p-8 md:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-blue-600">
          Vault Downloads
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
          Verify your email access
        </h1>

        <p className="mt-4 text-base leading-8 text-slate-600">
          Use the magic link from your email or enter the OTP code that was sent
          to your payment email.
        </p>

        {error && (
          <p className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            Verification failed. Please try again.
          </p>
        )}

        {resent && (
          <p className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            A fresh OTP and magic link have been sent.
          </p>
        )}

        {grant && token && (
          <form
            action="/api/vault/downloads/verify-link"
            method="POST"
            className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6"
          >
            <input type="hidden" name="grantId" value={grant} />
            <input type="hidden" name="token" value={token} />

            <h2 className="text-lg font-semibold text-slate-950">
              Magic-link verification
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Continue with the secure link that was sent to your email.
            </p>

            <button
              type="submit"
              className="mt-4 inline-flex rounded-full bg-[#0A84FF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#006FE0]"
            >
              Verify with magic link
            </button>
          </form>
        )}

        {grant && (
          <>
            <form
              action="/api/vault/downloads/verify-otp"
              method="POST"
              className="mt-8 rounded-3xl border border-slate-200 bg-white p-6"
            >
              <input type="hidden" name="grantId" value={grant} />

              <h2 className="text-lg font-semibold text-slate-950">
                OTP verification
              </h2>

              <label className="mt-4 block text-sm font-medium text-slate-700">
                Payment email
              </label>
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0A84FF]"
              />

              <label className="mt-4 block text-sm font-medium text-slate-700">
                OTP code
              </label>
              <input
                name="otp"
                type="text"
                inputMode="numeric"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#0A84FF]"
              />

              <button
                type="submit"
                className="mt-4 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Verify OTP
              </button>
            </form>

            <form
              action="/api/vault/downloads/resend"
              method="POST"
              className="mt-4"
            >
              <input type="hidden" name="grantId" value={grant} />
              <button
                type="submit"
                className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
              >
                Resend verification email
              </button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
