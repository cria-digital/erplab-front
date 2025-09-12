'use client'
import { Login } from '@/helpers'
import { PasswordCheck, Sms } from 'iconsax-reactjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { useAuth } from '@/contexts/auth'

import { Outfit400 } from '@/fonts'

export default function Page() {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocusedEmail, setIsFocusedEmail] = useState(false)
  const [isFocusedPassword, setIsFocusedPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const { login, defineUser } = useAuth()

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const handleLogin = async () => {
    const responseLogin = await Login({
      email,
      password,
    })

    if (responseLogin.success) {
      login(responseLogin.data.access_token)
      defineUser(responseLogin.data.user)
      router.push('/atendimento/pacientes')
    } else {
      alert('login falhou')
    }
    setLoading(false)
  }

  return (
    <div className="flex h-screen w-screen flex-row justify-center bg-[#F7F7F2]">
      <form className="flex h-[580px] w-[762px] flex-col items-center justify-center self-center bg-[#FFF]">
        <div className="">
          <label className={`text-[14px] text-[#383838]`}>
            E-mail<strong className="text-red-500">*</strong>
          </label>
          <div
            className={`flex h-[40px] w-[362px] flex-row items-center rounded-[8px] border-[1px] px-3 ${
              isFocusedEmail ? 'border-[#00A59D]' : 'border-[#ABABAB]'
            }`}
          >
            <Sms size="24" color={isFocusedEmail ? '#383838' : '#ABABAB'} />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className={`${Outfit400.className} ml-3 w-auto text-[16px] outline-none`}
              placeholder="Digite..."
              onFocus={() => setIsFocusedEmail(true)}
              onBlur={() => setIsFocusedEmail(false)}
              disabled={loading}
            />
          </div>
        </div>
        <div className="pt-[24px]">
          <label className={`text-[14px] text-[#383838]`}>
            Senha<strong className="text-red-500">*</strong>
          </label>
          <div
            className={`flex h-[40px] w-[362px] flex-row items-center justify-between rounded-[8px] border-[1px] px-3 ${
              isFocusedPassword ? 'border-[#00A59D]' : 'border-[#ABABAB]'
            }`}
          >
            <div className="flex">
              <PasswordCheck
                size="24"
                color={isFocusedPassword ? '#383838' : '#ABABAB'}
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className={`${Outfit400.className} ml-3 w-auto text-[16px] outline-none`}
                placeholder="Digite..."
                onFocus={() => setIsFocusedPassword(true)}
                onBlur={() => setIsFocusedPassword(false)}
                disabled={loading}
              />
            </div>
            <button
              type="button"
              className={`text-[14px] text-[#f4c330] ${Outfit400.className}`}
              onClick={togglePasswordVisibility}
              disabled={loading}
            >
              {showPassword ? 'Ocultar senha' : 'Mostrar senha'}
            </button>
          </div>
        </div>
        <button
          className={`mt-[24px] h-[48] w-[362] rounded-[8px] bg-gradient-to-l from-[#f4c330] to-[#E99616]`}
          disabled={loading}
          type="button"
          onClick={() => handleLogin()}
        >
          <p className={`text-[16px] ${Outfit400.className} text-white`}>
            {loading ? 'Acessando...' : 'Acessar'}
          </p>
        </button>
      </form>
    </div>
  )
}
