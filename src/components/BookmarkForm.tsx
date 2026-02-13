'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function BookmarkForm({
    userId,
    refresh,
    }: {
    userId: string
    refresh: () => void
    }) {

    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        if (!title || !url) return

        try {
        new URL(url)
        } catch {
        alert('Please enter a valid URL')
        return
        }

        setLoading(true)

      const { error } = await supabase.from('bookmarks').insert({
        title,
        url,
        user_id: userId,
        })
      if (error) {
        alert('Failed to add bookmark')
        } else {
        setTitle('')
        setUrl('')
        refresh()
        }
        setLoading(false)
    }
    

    return (
        <div className="space-y-4">
            <input
            type="text"
            placeholder="Bookmark Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
            />

            <input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
            />

            <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            >
            {loading ? 'Adding...' : 'Add Bookmark'}
            </button>
        </div>
        )

}
