import UserActionTypes from "./user.types";
import { googleSignInStart, setCurrentUser, emailSignInStart, signInSuccess, signInFailure, signOutFailure, signUpFailure, checkUserSession, signOutStart, signOutSuccess, signUpStart, signUpSuccess } from './user.actions';


describe('setCurrentUser action', () => {
    it('should create the setCurrentUser action', () => {
        const mockUser={
            id:1,
            displayName:"Nikhil",
        };
        const action=setCurrentUser(mockUser);

        expect(action.type).toEqual(UserActionTypes.SET_CURRENT_USER)
        expect(action.payload).toEqual(mockUser)
    });   
});

describe("googleSignInStart action", () => {
  it("should create the googleSignInStart action", () => {
    expect(googleSignInStart().type).toEqual(
      UserActionTypes.GOOGLE_SIGN_IN_START
    );
  });
});


describe("emailSignInStart action", () => {
  it("should create the emailSignInStart action", () => {
    const mockEmailAndPassword = {
      email:"test@gmail.com",
      password:test
    };
    const action = emailSignInStart(mockEmailAndPassword);

    expect(action.type).toEqual(UserActionTypes.EMAIL_SIGN_IN_START);
    expect(action.payload).toEqual(mockEmailAndPassword);
  });
});

describe("signInSuccess action", () => {
  it("should create the signInSuccess action", () => {
     const mockUser = {
       id: 1,
       displayName: "Nikhil",
     };
    const action = signInSuccess(mockUser);

    expect(action.type).toEqual(UserActionTypes.SIGN_IN_SUCCESS);
    expect(action.payload).toEqual(mockUser);
  });
});

describe("signInFailure action", () => {
  it("should create the signInFailure action", () => {
     const mockError = {
       error:"error"
     };
    const action = signInFailure(mockError);

    expect(action.type).toEqual(UserActionTypes.SIGN_IN_FAILURE);
    expect(action.payload).toEqual(mockError);
  });
});

describe("signOutFailure action", () => {
  it("should create the signOutFailure action", () => {
     const mockError = {
       error:"error"
     };
    const action = signOutFailure(mockError);

    expect(action.type).toEqual(UserActionTypes.SIGN_OUT_FAILURE);
    expect(action.payload).toEqual(mockError);
  });
});

describe("signUpFailure action", () => {
  it("should create the signUpFailure action", () => {
     const mockError = {
       error:"error"
     };
    const action = signUpFailure(mockError);

    expect(action.type).toEqual(UserActionTypes.SIGN_UP_FAILURE);
    expect(action.payload).toEqual(mockError);
  });
});

describe("checkUserSession action", () => {
  it("should create the checkUserSession action", () => {
    expect(checkUserSession().type).toEqual(UserActionTypes.CHECK_USER_SESSION);
  });
});

describe("signOutStart action", () => {
  it("should create the signOutStart action", () => {
    expect(signOutStart().type).toEqual(UserActionTypes.SIGN_OUT_START);
  });
});

describe("signOutSuccess action", () => {
  it("should create the signOutSuccess action", () => {
    expect(signOutSuccess().type).toEqual(UserActionTypes.SIGN_OUT_SUCCESS);
  });
});

describe("signUpStart action", () => {
  it("should create the signUpStart action", () => {
    const mockUserCredentials = {
      email: "test@gmail.com",
      password: test,
    };
    const action = signUpStart(mockUserCredentials);

    expect(action.type).toEqual(UserActionTypes.SIGN_UP_START);
    expect(action.payload).toEqual(mockUserCredentials);
  });
});

describe("signUpSuccess action", () => {
  it("should create the signUpSuccess action", () => {
    const mockUser = {
      id: 1,
      displayName: "Nikhil",
    };
    const mockAdditionalData = {
      email: "test@gmail.com",
      password: test,
    };
    const action = signUpSuccess(mockUser,mockAdditionalData);

    expect(action.type).toEqual(UserActionTypes.SIGN_UP_SUCCESS);
    // console.log(action.payload);
    // expect(action.payload).toEqual(mockUser, mockAdditionalData);
  });
});
