export interface GitHubRepo {
  name: string;
  html_url: string;
  stargazers_count: number;
  fork: boolean;
}

export async function fetchPublicRepos(user: string): Promise<GitHubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${user}/repos?per_page=100&sort=updated`
  );

  if (!response.ok) {
    throw new Error(`GitHub API ${response.status}`);
  }

  const data: GitHubRepo[] = await response.json();
  return data.filter((repo) => !repo.fork);
}

export function totalStars(repos: GitHubRepo[]): number {
  return repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
}
