import { Dispatch } from 'redux';
import {
  UpdatingMembershipAction,
  MembershipRequest,
  MembershipUpdatedAction,
  MembershipSuccess,
  ErrorUpdatingMembershipAction,
  MembershipError,
  MembershipResponse,
  Membership,
} from '../MembershipActions';
import { MembershipActionType } from '../MembershipActionType.enum';
import { Space } from '../../../features/space/SpaceActions';
import { PubNubApiStatus } from '../../../foundations/PubNubApi';
import { PubnubThunkContext } from '../../../foundations/ThunkTypes';
import { ObjectsCustom } from '../../../foundations/ObjectsCustom';
import { ActionMeta, AnyMeta } from '../../../foundations/ActionMeta';

// tag::RDX-function-memberships-update[]
export const updatingMemberships = <
  MembershipType extends Membership<ObjectsCustom, Space<ObjectsCustom>>,
  Meta extends ActionMeta
>(
  payload: MembershipRequest<MembershipType>,
  meta?: Meta
): UpdatingMembershipAction<MembershipType, Meta> => ({
  type: MembershipActionType.UPDATING_MEMBERSHIP,
  payload,
  meta,
});
// end::RDX-function-memberships-update[]

// tag::RDX-function-memberships-update-success[]
export const membershipUpdated = <
  MembershipType extends Membership<ObjectsCustom, Space<ObjectsCustom>>,
  Meta extends ActionMeta
>(
  payload: MembershipSuccess<MembershipType>,
  meta?: Meta
): MembershipUpdatedAction<MembershipType, Meta> => ({
  type: MembershipActionType.MEMBERSHIP_UPDATED,
  payload,
  meta,
});
// end::RDX-function-memberships-update-success[]

// tag::RDX-function-memberships-update-error[]
export const errorUpdatingMembership = <
  MembershipType extends Membership<ObjectsCustom, Space<ObjectsCustom>>,
  Meta extends ActionMeta
>(
  payload: MembershipError<MembershipType>,
  meta?: Meta
): ErrorUpdatingMembershipAction<MembershipType, Meta> => ({
  type: MembershipActionType.ERROR_UPDATING_MEMBERSHIP,
  payload,
  meta,
  error: true,
});
// end::RDX-function-memberships-update-error[]

// tag::RDX-command-memberships-update[]
export const updateMembership = <
  MembershipType extends Membership<ObjectsCustom, Space<ObjectsCustom>>,
  Meta extends ActionMeta = AnyMeta
>(
  request: MembershipRequest<MembershipType>,
  meta?: Meta
) => {
  const thunkFunction = (
    dispatch: Dispatch,
    _getState: any,
    { pubnub }: PubnubThunkContext
  ) =>
    new Promise<void>((resolve, reject) => {
      dispatch(updatingMemberships<MembershipType, Meta>(request, meta));

      pubnub.api.updateMembership(
        {
          ...request,
        },
        (
          status: PubNubApiStatus,
          response: MembershipResponse<MembershipType>
        ) => {
          if (status.error) {
            let payload: MembershipError<MembershipType> = {
              request,
              status,
            };

            dispatch(
              errorUpdatingMembership<MembershipType, Meta>(payload, meta)
            );
            reject(payload);
          } else {
            let payload: MembershipSuccess<MembershipType> = {
              request,
              response,
              status,
            };

            dispatch(membershipUpdated<MembershipType, Meta>(payload, meta));
            resolve();
          }
        }
      );
    });

  thunkFunction.type = MembershipActionType.UPDATE_MEMBERSHIP_COMMAND;

  return thunkFunction;
};
// end::RDX-command-memberships-update[]
