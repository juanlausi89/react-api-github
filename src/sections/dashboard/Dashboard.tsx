import { githubApiResponses } from "../../github_api_responses";
import { Brand } from "./Brand";
import { Check } from "./Check";
import styles from "./Dashboard.module.scss";
import { Error } from "./Error";
import { IssueOpened } from "./IssueOpened";
import { Lock } from "./Lock";
import { PullRequests } from "./PullRequests";
import { Start } from "./Start";
import { Unlock } from "./Unlock";
import { Watchers } from "./Watchers";

const isoToReadableDate = (lastUpdate: string): string => {
	const lastUpdateDate = new Date(lastUpdate);
	const currentDate = new Date();
	const diffDays = currentDate.getDate() - lastUpdateDate.getDate();

	if (diffDays === 0) {
		return "today";
	}

	if (diffDays > 30) {
		return "more than a month ago";
	}

	return `${diffDays} days ago`;
};

export function Dashboard() {
	const title = "DevDash";

	return (
		<>
			<header className={styles.header}>
				<section className={styles.header__container}>
					<Brand />
					<h1 className={styles.app__brand}>DevDash_</h1>
				</section>
			</header>
			<section className={styles.container}>
				{githubApiResponses.map((widget) => (
					<article className={styles.widget} key={widget.repositoryData.id}>
						<header className={styles.widget__header}>
							<a
								className={styles.widget__title}
								href={widget.repositoryData.html_url}
								target="_blank"
								title={`${widget.repositoryData.organization.login}/${widget.repositoryData.name}`}
								rel="noreferrer"
							>
								{widget.repositoryData.organization.login}/{widget.repositoryData.name}
							</a>
							{widget.repositoryData.private ? <Lock /> : <Unlock />}
						</header>
						<div className={styles.widget__body}>
							<div className={styles.widget__status}>
								<p>Last update {isoToReadableDate(widget.repositoryData.updated_at)}</p>
								{widget.CiStatus.workflow_runs.length > 0 && (
									<div>
										{widget.CiStatus.workflow_runs[0].status === "completed" ? (
											<Check />
										) : (
											<Error />
										)}
									</div>
								)}
							</div>
							<p className={styles.widget__description}>{widget.repositoryData.description}</p>
						</div>
						<footer className={styles.widget__footer}>
							<div className={styles.widget__stat}>
								<Start />
								<span>{widget.repositoryData.stargazers_count}</span>
							</div>
							<div className={styles.widget__stat}>
								<Watchers />
								<span>{widget.repositoryData.watchers_count}</span>
							</div>
							{/* <div className={styles.widget__stat}>
								<Forks />
								<span>{widget.repositoryData.forks_count}</span>
							</div> */}
							<div className={styles.widget__stat}>
								<IssueOpened />
								<span>{widget.repositoryData.open_issues_count}</span>
							</div>
							<div className={styles.widget__stat}>
								<PullRequests />
								<span>{widget.pullRequest.length}</span>
							</div>
						</footer>
					</article>
				))}
			</section>
		</>
	);
}
