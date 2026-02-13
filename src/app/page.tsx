'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import LoginButton from '../components/LoginButton'
import BookmarkForm from '../components/BookmarkForm'
import BookmarkList from '../components/BookmarkList'

export default function Home() {
  const [session, setSession] = useState<any>(null)
  const [bookmarks, setBookmarks] = useState<any[]>([])

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
    })

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
      }
    )

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  const fetchBookmarks = async () => {
    const { data } = await supabase
      .from('bookmarks')
      .select('*')
      .order('created_at', { ascending: false })

    setBookmarks(data || [])
  }

  useEffect(() => {
    if (session) {
      fetchBookmarks()
    }
  }, [session])

  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoginButton />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-16 px-4">
        <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">
            Welcome {session.user.email}
            </h1>

            <button
            onClick={() => supabase.auth.signOut()}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-lg shadow hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            >
            Logout
            </button>
        </div>

        {/* Form */}
        <BookmarkForm userId={session.user.id} refresh={fetchBookmarks} />

        {/* List */}
        <BookmarkList
            userId={session.user.id}
            bookmarks={bookmarks}
            refresh={fetchBookmarks}
        />

        </div>
    </div>
    )

}
