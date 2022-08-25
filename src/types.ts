export type TelemetrySource = 'api' | 'app' | 'site' | 'github';
export type TelemetryCategory = 'oss' | // users that self-host the application
                                'map3'; // map3 hosted service

type SiteAction = 'waiting_list_signup';
type ApiAction = 'start' | 'db_download';
type AppAction = 'signup' | 'api_key_generated' | 'star_block_showed';
type GithubAction = 'db_download_count' | 'star_count';

export type TelemetryAction = ApiAction | AppAction | SiteAction | GithubAction; 