'use server'

import { TBlog } from '@/Types/index.t'

// post
export const createProject = async (payload: any) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/project/create-project`,
    {
      method: 'POST',
      body: payload
    }
  )
  return response.json()
}

export const updateBlogs = async (payload: any, id: string) => {
  console.log('payload', payload)
  console.log('id', id)
  const response = await fetch(`${process.env.SERVER_URL}/blogs/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify(payload)
  })
  return response.json()
}

// get
export const getAllBlogs = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/blogs`, {
    cache: 'no-store'
  })
  const data = await res.json()
  console.log('inServer', data)
  return data?.data
}
