import Axios from 'axios';
import { createContext, use, type PropsWithChildren } from 'react';
import { useStorageState } from '../useStorageState';
import SessionInfo from './session/SessionInfo';

const AuthContext = createContext<{
    signIn: (sessionInfo: SessionInfo) => void;
    signOut: () => void;
    validateSession: (sessionInfo: SessionInfo) => void;
    session?: string | null;
    isLoading: boolean;
}>({
    signIn: () => null,
    signOut: () => null,
    validateSession: () => null,
    session: null,
    isLoading: false
});

// This hook can be used to access the user info.
export function useSession() {
    const value = use(AuthContext);
    if (!value) {
        throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
    return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
    let [[isLoading, session], setSession] = useStorageState('session');

    return (
        <AuthContext
            value={{
                signIn: (signInInfo) => {
                    // Perform sign-in logic here
                    Axios.post('http://localhost:8082/note-genie/session/login', signInInfo)
                        .then(resolve => {
                            setSession(signInInfo.getJwt());
                        }).catch(reject => {
                        }).finally(() => {
                            setSession(signInInfo.getJwt());
                            isLoading = false;
                        });
                },
                signOut: () => {
                    Axios.post('http://localhost:8082/note-genie/session/logout', session)
                        .then(resolve => {
                            console.debug('logout result: ', resolve)
                            setSession(null);
                        }).catch(reject => {
                            alert('logout: rejected');
                        }).finally(() => {
                            isLoading = false;
                            setSession(null);
                        });                
                },
                validateSession: (sessionInfo) => {
                    Axios.post('http://localhost:8082/note-genie/session/validate', sessionInfo)
                        .then(resolve => {
                            setSession(sessionInfo.getJwt());
                        }).catch(reject => {
                            console.log('validate session - rejected', reject);
                        }).finally(() => {
                            isLoading = false;
                            setSession(null);
                        });
                },
                session,
                isLoading
            }}>
            {children}
        </AuthContext>
    );
}
