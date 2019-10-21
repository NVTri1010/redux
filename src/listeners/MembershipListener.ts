import { Dispatch } from 'redux';
import { ObjectsActionPayload } from '../api/Objects';
import {
  UserMembershipUpdatedOnSpaceAction,
  UserAddedToSpaceAction,
  UserRemovedFromSpaceAction,
  MembershipListenerActions,
} from '../actions/Actions';
import { actionType } from '../actions/ActionType.enum';
import { PubNubObjectApiSuccess, ListenerEventData } from '../api/PubNubApi';

export const userMembershipUpdatedOnSpace = <T extends ListenerEventData>(
  payload: PubNubObjectApiSuccess<T>
): UserMembershipUpdatedOnSpaceAction<T> => ({
  type: actionType.OBJECTS_USER_MEMBERSHIP_UPDATED_ON_SPACE,
  payload,
});

export const userAddedToSpace = <T extends ListenerEventData>(
  payload: PubNubObjectApiSuccess<T>
): UserAddedToSpaceAction<T> => ({
  type: actionType.OBJECTS_USER_ADDED_TO_SPACE,
  payload,
});

export const userRemovedFromSpace = <T extends ListenerEventData>(
  payload: PubNubObjectApiSuccess<T>
): UserRemovedFromSpaceAction<T> => ({
  type: actionType.OBJECTS_USER_REMOVED_FROM_SPACE,
  payload,
});

export const createMembershipActionListener = <T extends ListenerEventData>(
  dispatch: Dispatch<MembershipListenerActions<T>>
) => ({
  membership: (payload: ObjectsActionPayload<T>) => {
    let result = {
      id: payload.data.userId + '_' + payload.data.spaceId,
      data: payload.data,
    };
    switch (payload.event) {
      case 'create':
        dispatch(userAddedToSpace(result));
        break;
      case 'update':
        dispatch(userMembershipUpdatedOnSpace(result));
        break;
      case 'delete':
        dispatch(userRemovedFromSpace(result));
        break;
      default:
        break;
    }
  },
});
