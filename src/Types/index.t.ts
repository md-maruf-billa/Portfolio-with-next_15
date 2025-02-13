export type TProject = {
  _id: string
  projectImage: string
  projectName: string
  description: string
  slogun: string
  technologies: string[]
  features: string[]
  frontEndGitRepo: string
  backEndGitRepo: string
  liveLink: string
  serverLiveLink?: string
}

export type TBlog = {
  _id: string
  title: string
  content: string
  blogTags: string[]
  blogImage: string
  isPublished?: boolean
  isDeleted?: boolean
  createdAt: string
updatedAt: string

}
export interface Tag {
  id: string
  className: string
  [key: string]: string
}

export type TUser = {
  user?: {
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

export type TMessage = {
  _id: string
  messageTitle: string
  messageBody: string
  user: { email: string; name: string; photo: string }
  updatedAt: string
  createdAt: string
}

