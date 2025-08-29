
/**
 * @author Adrian Rivera
 * @version 2025_08_28
 */
class SessionInfo {
    private username: string;
    private password: string;
    private jwt: string;

    constructor(username: string, password: string, jwt: string) {
        this.username = username;
        this.password = password;
        this.jwt = jwt;
    }

    public getUsername(): string {
        return this.username;
    }

    public getPassword(): string {
        return this.password;
    }

    public getJwt(): string {
        return this.jwt;
    }

}

export default SessionInfo;