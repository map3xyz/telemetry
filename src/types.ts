export type TelemetrySource = 'api' | 'app' | 'site' | 'github';
export type TelemetryCategory = 'oss' | // users that self-host the application
                                'map3'; // map3 hosted service

type SiteAction = 'waitinglist';
type ApiAction = 'start';
type AppAction = 'signup';
type GithubAction = 'stats';

export type TelemetryAction = ApiAction | AppAction | SiteAction | GithubAction; 