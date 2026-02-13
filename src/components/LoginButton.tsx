'use client'

import { supabase } from '../lib/supabaseClient'


export default function LoginButton() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  return (
    <button
      onClick={handleLogin}
      className="bg-black text-white px-4 py-2 rounded"
    >
      Sign in with Google
    </button>
  )
}
