export type TelemetrySource = 'api' | 'app' | 'site' | 'github';
export type TelemetryCategory = 'oss' | // users that self-host the application
                                'map3'; // map3 hosted service

type SiteAction = 'waitinglist';
type ApiAction = 'start' | 'db_download';
type AppAction = 'signup' | 'api_key_generated';
type GithubAction = 'stats' | 'db_download_count' | 'stargazers_count' | 'forks_count' | 'watchers_count';

export type TelemetryAction = ApiAction | AppAction | SiteAction | GithubAction; 