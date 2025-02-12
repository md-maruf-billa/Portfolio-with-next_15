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

export const updateProject = async (id: string, payload: any) => {
  const update = await fetch(`http://localhost:5000/api/project/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  const res = update.json()
  return res
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

export const getAllProjects = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/project/all-project`)
  const data = await res.json()
  return data.data
}

export const deleteProject = async (id: string) => {
  const update = await fetch(`${process.env.SERVER_URL}/project/${id}`, {
    method: 'DELETE'
  })
  const res = update.json()
  return res
}
