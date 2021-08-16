import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Gap from '../component/atoms/GapComponent/Gap'
import GlobalButton from '../component/atoms/GlobalButton/GlobalButton'
import GlobalInput from '../component/atoms/GlobalInput/GlobalInput'


function LoginPage()
{
    const [email, setEmail] = useState('');
    const [emailVal, setEmailVal] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVal, setPasswordVal] = useState('');

    const submitLogin = () =>
    {
        email === "" ? setEmailVal("Email Tidak boleh kosong") : setEmailVal("")
        password === "" ? setPasswordVal("Password Tidak boleh kosong") : setPasswordVal("")

        if(email !== '' && password !== '') alert("validasi berhasil login sukses");
    }

    return (
        <div className="container mt-5 w-50">
            <GlobalInput title="Email" onChange={(e) => setEmail(e.currentTarget.value)} val={emailVal} />
            <GlobalInput title="Password" type="password" onChange={(e) => setPassword(e.currentTarget.value)} val={passwordVal} />
            <Gap height={30} />
            <div style={{ padding: '0 0 0 0' }}>
                <GlobalButton variant="info" type="outline" onClick={submitLogin} >Masuk</GlobalButton>
            </div>
            <div className="text-center my-3">
                <span> Tidak Punya Akun?    <Link to="/register">Buat Akun</Link>
                </span>
            </div>
        </div>
    )
}

export default LoginPage
