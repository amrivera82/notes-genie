import SessionInfo from "./SessionInfo";

export class AuthenticationResponse {
    private authenticated:  boolean;
    private sessionInfo: SessionInfo;

    public constructor(authenticated:boolean, sessionInfo: SessionInfo) {
        this.authenticated = authenticated;
        this.sessionInfo = sessionInfo;
    }
    
    public getAuthenticated(): boolean {
        return this.authenticated;
    }

    public getSessionInfo(): SessionInfo {
        return this.sessionInfo;
    }
};