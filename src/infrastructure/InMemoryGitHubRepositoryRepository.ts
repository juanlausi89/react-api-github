import { githubApiResponses } from "../github_api_responses";

/**
 * InMemory: se guarda en memoria
 * El bojeto que retorna es GitHubRepository
 * Repository: es un repositorio, aplicando el patron repositorio
 */
export class InMemoryGitHubRepositoryRepository {
	search(): typeof githubApiResponses {
		return githubApiResponses;
	}
}