import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

export async function onFacebookButtonPress() {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);
  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }
  // Once signed in, get the users AccessToken
  const data = await AccessToken.getCurrentAccessToken();
  if (!data) {
    throw 'Something went wrong obtaining access token';
  }
  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );
  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}

export async function onGoogleButtonPress() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();
  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

export function getCurrentUser() {
  return firebase.auth().currentUser;
}

export function createUserDocument(user, successCallback) {
  const {name, email, picture} = user.additionalUserInfo.profile;

  firestore()
    .collection('Users')
    .doc(user.user.uid)
    .set({
      name,
      email,
      picture: picture.url ? picture.url : picture,
    })
    .then(() => {
      console.log('User added!');
      successCallback();
    })
    .catch(err => console.log('An error occured when creating user'));
}

export async function signOutUser() {
  return auth().signOut();
}
