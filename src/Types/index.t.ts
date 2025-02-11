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
