
import { initializeApp } from "https://esm.sh/firebase@10.7.1/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  getIdTokenResult,
  User
} from "https://esm.sh/firebase@10.7.1/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  appId: process.env.FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

/**
 * Checks if the current user has the 'admin' custom claim.
 * Custom claims must be set via Firebase Admin SDK on a server/cloud function.
 */
export const checkAdminClaim = async (user: User): Promise<boolean> => {
  try {
    const tokenResult = await getIdTokenResult(user, true);
    return !!tokenResult.claims.admin;
  } catch (e) {
    console.error("Error checking admin claims:", e);
    return false;
  }
};

export { signInWithEmailAndPassword, signOut, onAuthStateChanged };
