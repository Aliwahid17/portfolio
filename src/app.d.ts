// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

interface Blog {
	[x: string];
	postTitle: string;
	focusKeyphrase: string;
	datePublished: string;
	lastUpdated: string;
	seoMetaDescription: string;
	featuredImage: string;
	featuredImageAlt: string;
	categories: string;
	tags: string;
	author: string;
	slug: string;
	readingTime: string;
}

interface Github {
	[x: string],
	id: number;
	node_id: string;
	name: string;
	full_name: string;
	private: boolean;
	owner: Owner;
	html_url: string;
	description: null | string;
	fork: boolean;
	url: string;
	forks_url: string;
	keys_url: string;
	collaborators_url: string;
	teams_url: string;
	hooks_url: string;
	issue_events_url: string;
	events_url: string;
	assignees_url: string;
	branches_url: string;
	tags_url: string;
	blobs_url: string;
	git_tags_url: string;
	git_refs_url: string;
	trees_url: string;
	statuses_url: string;
	languages_url: string;
	stargazers_url: string;
	contributors_url: string;
	subscribers_url: string;
	subscription_url: string;
	commits_url: string;
	git_commits_url: string;
	comments_url: string;
	issue_comment_url: string;
	contents_url: string;
	compare_url: string;
	merges_url: string;
	archive_url: string;
	downloads_url: string;
	issues_url: string;
	pulls_url: string;
	milestones_url: string;
	notifications_url: string;
	labels_url: string;
	releases_url: string;
	deployments_url: string;
	created_at: string;
	updated_at: string;
	pushed_at: string;
	git_url: string;
	ssh_url: string;
	clone_url: string;
	svn_url: string;
	homepage: null | string;
	size: number;
	stargazers_count: number;
	watchers_count: number;
	language: null | string;
	has_issues: boolean;
	has_projects: boolean;
	has_downloads: boolean;
	has_wiki: boolean;
	has_pages: boolean;
	has_discussions: boolean;
	forks_count: number;
	mirror_url: null;
	archived: boolean;
	disabled: boolean;
	open_issues_count: number;
	license: License | null;
	allow_forking: boolean;
	is_template: boolean;
	web_commit_signoff_required: boolean;
	topics: string[];
	visibility: Visibility;
	forks: number;
	open_issues: number;
	watchers: number;
	default_branch: DefaultBranch;
}

export enum DefaultBranch {
	Main = "main",
	Master = "master",
}

export interface License {
	key: string;
	name: string;
	spdx_id: string;
	url: string;
	node_id: string;
}

export interface Owner {
	login: Login;
	id: number;
	node_id: NodeID;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: FollowingURL;
	gists_url: GistsURL;
	starred_url: StarredURL;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: EventsURL;
	received_events_url: string;
	type: Type;
	site_admin: boolean;
}

export enum EventsURL {
	HTTPSAPIGithubCOMUsersAliwahid17EventsPrivacy = "https://api.github.com/users/Aliwahid17/events{/privacy}",
}

export enum FollowingURL {
	HTTPSAPIGithubCOMUsersAliwahid17FollowingOtherUser = "https://api.github.com/users/Aliwahid17/following{/other_user}",
}

export enum GistsURL {
	HTTPSAPIGithubCOMUsersAliwahid17GistsGistID = "https://api.github.com/users/Aliwahid17/gists{/gist_id}",
}

export enum Login {
	Aliwahid17 = "Aliwahid17",
}

export enum NodeID {
	MDQ6VXNlcjg4MjYzNTc1 = "MDQ6VXNlcjg4MjYzNTc1",
}

export enum StarredURL {
	HTTPSAPIGithubCOMUsersAliwahid17StarredOwnerRepo = "https://api.github.com/users/Aliwahid17/starred{/owner}{/repo}",
}

export enum Type {
	User = "User",
}

export enum Visibility {
	Public = "public",
}

export {Blog , Github}