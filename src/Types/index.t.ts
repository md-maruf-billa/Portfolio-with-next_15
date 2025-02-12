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
