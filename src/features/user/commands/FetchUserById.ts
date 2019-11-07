import { UserActionType } from '../UserActionType.enum';
import {
  ErrorFetchingUserByIdAction,
  UserRetrievedAction,
  FetchingUserByIdAction,
  FetchUserByIdRequest,
  FetchUserByIdError,
  UserResponse,
  User,
  FetchUserByIdSuccess,
} from '../UserActions';
import { PubNubApiStatus } from '../../../foundations/PubNubApi';
import { Dispatch, PubnubThunkContext } from '../../../foundations/ThunkTypes';

export const fetchingUserById = <MetaType>(
  payload: FetchUserByIdRequest,
  meta?: MetaType,
): FetchingUserByIdAction<MetaType> => ({
  type: UserActionType.FETCHING_USER_BY_ID,
  payload,
  meta,
});

export const userRetrieved = <UserType extends User, CustomType, MetaType>(
  payload: FetchUserByIdSuccess<UserType, CustomType>,
  meta?: MetaType
): UserRetrievedAction<UserType, CustomType, MetaType> => ({
  type: UserActionType.USER_RETRIEVED,
  payload,
  meta,
});

export const errorFetchingUserById = <MetaType>(
  payload: FetchUserByIdError,
  meta?: MetaType
): ErrorFetchingUserByIdAction<MetaType> => ({
  type: UserActionType.ERROR_FETCHING_USER_BY_ID,
  payload,
  meta,
  error: true,
});

export const fetchUserById = <UserType extends User, CustomType, MetaType>(
  request: FetchUserByIdRequest,
  meta?: MetaType
) => {
  const thunkFunction = (dispatch: Dispatch, _getState: any, { pubnub }: PubnubThunkContext) =>
    new Promise<void>((resolve, reject) => {
      dispatch(fetchingUserById<MetaType>({
        ...request,
      }, meta));

      pubnub.api.getUser(
        {
          ...request,
        },
        (status: PubNubApiStatus, response: UserResponse<UserType, CustomType>) => {
          if (status.error) {
            let payload: FetchUserByIdError = {
              request,
              status,
            };

            dispatch(errorFetchingUserById<MetaType>(payload, meta));
            reject(payload);
          } else {
            let payload: FetchUserByIdSuccess<UserType, CustomType> = {
              request,
              response,
              status,
            };

            dispatch(userRetrieved<UserType, CustomType, MetaType>(payload, meta));
            resolve();
          }
        }
      );
    });

  thunkFunction.type = UserActionType.FETCH_USER_BY_ID_COMMAND;

  return thunkFunction;
};