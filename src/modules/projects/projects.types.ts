export interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
  repoLink: string;
}

export interface ProjectsDetails extends Project{
  readMe: string
}

export interface GetProjectsResponse {
    projects: Project[]
}

export interface GetProjectDetailsResponse{
  projectData: ProjectsDetails
}