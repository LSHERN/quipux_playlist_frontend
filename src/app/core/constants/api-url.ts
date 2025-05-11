import { environment } from "../../../environment/environment";


export function backendUrl(endpoint: string) {
  return environment.url_back_end.concat(endpoint);
}
