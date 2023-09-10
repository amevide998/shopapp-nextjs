import Link from 'next/link'

const RegisterPage = () => {
  return (
    <div>
        <div>
            Register Page
        </div>
        <div>Sudah Punya akun ? Login <Link href="/auth/login">Disini</Link></div>

    </div>
  )
}

export default RegisterPage