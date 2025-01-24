import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <LoginForm />
      </div>
    </div>
  );
}
