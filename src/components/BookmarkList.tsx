'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

interface Bookmark {
  id: string
  title: string
  url: string
}

export default function BookmarkList({
  userId,
  bookmarks,
  refresh,
}: {
  userId: string
  bookmarks: Bookmark[]
  refresh: () => void
}) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) return

    const channel = supabase
      .channel('bookmarks-' + userId)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'bookmarks',
          filter: `user_id=eq.${userId}`,
        },
        () => {
          setLoading(true)
          refresh()
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [userId, refresh])

  useEffect(() => {
    setLoading(false)
  }, [bookmarks])

  const handleDelete = async (id: string) => {
    setLoading(true)
    const { error } = await supabase.from('bookmarks').delete().eq('id', id)

    if (error) {
      console.error('Delete error:', error)
    }

    refresh()
  }

  return (
    <div className="mt-8 space-y-4">
      {loading && (
        <p className="text-gray-500 text-sm">Loading bookmarks...</p>
      )}

      {!loading && bookmarks.length === 0 && (
        <p className="text-gray-500">No bookmarks yet.</p>
      )}

      {bookmarks.map((bookmark) => (
        <div
        key={bookmark.id}
        className="border border-gray-200 bg-white p-4 rounded-xl flex justify-between items-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
        >

          <div>
            <a
            href={bookmark.url}
            target="_blank"
            className="font-semibold text-blue-600 hover:underline"
            >

              {bookmark.title}
            </a>
            <p className="text-sm text-gray-500">{bookmark.url}</p>
          </div>

          <button
            onClick={() => handleDelete(bookmark.id)}
            className="bg-red-500 text-white px-4 py-1.5 rounded-lg shadow hover:bg-red-600 hover:shadow-md transition-all duration-200 active:scale-95"

          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}
