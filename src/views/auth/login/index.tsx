import Link from "next/link";
import { useRouter } from "next/router";

const LoginView = () => {
    const {push} = useRouter()

    const handlerLogin = () => {
        push('/product')
    }
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>LoginPage</div>
      <button onClick={() => handlerLogin()}> Login </button>
      <div>
        Belum Punya Akun ? Klik <Link href="/auth/register">Disini</Link>
      </div>
    </div>
  );
};

export default LoginView
