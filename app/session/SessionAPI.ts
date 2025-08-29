import { AuthenticationResponse } from "./AuthenticationResponse";
import SessionInfo from "./SessionInfo";

export const doLogin = (credentials: SessionInfo): Promise<{ data: AuthenticationResponse }> =>
  new Promise<{ data: AuthenticationResponse }>(resolve =>
    setTimeout(() => {
      // ios, android, use local-storage. For web, use http-cookie
      const response = { statusCode: 200, authenticated: true, jwt: 'x0x' };
      resolve(
        {
          data: new AuthenticationResponse(response.authenticated,
            new SessionInfo(credentials.getUsername(), credentials.getPassword(), response.jwt))
        })
    }, 500)
  );

  export const doValidateSession = (credentials: SessionInfo): Promise<{ data: AuthenticationResponse }> =>
  new Promise<{ data: AuthenticationResponse }>(resolve =>
    setTimeout(() => {
      // ios, android, use local-storage. For web, use http-cookie
      const response = { statusCode: 200, authenticated: true, jwt: 'x0x' };
      resolve(
        {
          data: new AuthenticationResponse(response.authenticated,
            new SessionInfo(credentials.getUsername(), credentials.getPassword(), response.jwt))
        })
    }, 500)
  );