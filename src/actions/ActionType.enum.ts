export enum actionType {
  MESSAGE = 'pubnub/MESSAGE',
  JOIN = 'pubnub/JOIN',
  LEAVE = 'pubnub/LEAVE',
  TIMEOUT = 'pubnub/TIMEOUT',
  STATE_CHANGE = 'pubnub/STATE_CHANGE',
  NETWORK_UP = 'pubnub/NETWORK_UP',
  NETWORK_DOWN = 'pubnub/NETWORK_DOWN',
  NETWORK_ISSUES = 'pubnub/NETWORK_ISSUES',
  RECONNECTED = 'pubnub/RECONNECTED',
  CONNECTED = 'pubnub/CONNECTED',
  ACCESS_DENIED = 'pubnub/ACCESS_DENIED',
  MALFORMED_RESPONSE = 'pubnub/MALFORMED_RESPONSE',
  BAD_REQUEST = 'pubnub/BAD_REQUEST',
  DECRYPTION_ERROR = 'pubnub/DECRYPTION_ERROR',
  TIMEOUT_CONNECTION = 'pubnub/TIMEOUT_CONNECTION',
  REQUEST_MESSAGE_COUNT_EXCEED = 'pubnub/REQUEST_MESSAGE_COUNT_EXCEED',
  UNKNOWN = 'pubnub/UNKNOWN',
  OBJECTS_UPDATE_USER_BEGIN = 'pubnub/OBJECTS_UPDATE_USER_BEGIN',
  OBJECTS_UPDATE_USER = 'pubnub/OBJECTS_UPDATE_USER',
  OBJECTS_UPDATE_USER_ERROR = 'pubnub/OBJECTS_UPDATE_USER_ERROR',
  OBJECTS_DELETE_USER_BEGIN = 'pubnub/OBJECTS_DELETE_USER_BEGIN',
  OBJECTS_DELETE_USER = 'pubnub/OBJECTS_DELETE_USER',
  OBJECTS_DELETE_USER_ERROR = 'pubnub/OBJECTS_DELETE_USER_ERROR',
  OBJECTS_CREATE_USER_BEGIN = 'pubnub/OBJECTS_CREATE_USER_BEGIN',
  OBJECTS_CREATE_USER = 'pubnub/OBJECTS_CREATE_USER',
  OBJECTS_CREATE_USER_ERROR = 'pubnub/OBJECTS_CREATE_USER_ERROR',
  OBJECTS_FETCH_USERS_BEGIN = 'pubnub/OBJECTS_FETCH_USERS_BEGIN',
  OBJECTS_FETCH_USERS = 'pubnub/OBJECTS_FETCH_USERS',
  OBJECTS_FETCH_USERS_ERROR = 'pubnub/OBJECTS_FETCH_USERS_ERROR',
  OBJECTS_FETCH_USER_BY_ID_BEGIN = 'pubnub/OBJECTS_FETCH_USER_BY_ID_BEGIN',
  OBJECTS_FETCH_USER_BY_ID = 'pubnub/OBJECTS_FETCH_USER_BY_ID',
  OBJECTS_FETCH_USER_BY_ID_ERROR = 'pubnub/OBJECTS_FETCH_USER_BY_ID_ERROR',
  OBJECTS_CREATE_SPACE = 'pubnub/OBJECTS_CREATE_SPACE',
  OBJECTS_CREATE_SPACE_BEGIN = 'pubnub/OBJECTS_CREATE_SPACE_BEGIN',
  OBJECTS_CREATE_SPACE_ERROR = 'pubnub/OBJECTS_CREATE_SPACE_ERROR',
  OBJECTS_UPDATE_SPACE = 'pubnub/OBJECTS_UPDATE_SPACE',
  OBJECTS_UPDATE_SPACE_BEGIN = 'pubnub/OBJECTS_UPDATE_SPACE_BEGIN',
  OBJECTS_UPDATE_SPACE_ERROR = 'pubnub/OBJECTS_UPDATE_SPACE_ERROR',
  OBJECTS_DELETE_SPACE = 'pubnub/OBJECTS_DELETE_SPACE',
  OBJECTS_DELETE_SPACE_BEGIN = 'pubnub/OBJECTS_DELETE_SPACE_BEGIN',
  OBJECTS_DELETE_SPACE_ERROR = 'pubnub/OBJECTS_DELETE_SPACE_ERROR',
  OBJECTS_FETCH_SPACES = 'pubnub/OBJECTS_FETCH_SPACES',
  OBJECTS_FETCH_SPACES_BEGIN = 'pubnub/OBJECTS_FETCH_SPACES_BEGIN',
  OBJECTS_FETCH_SPACES_ERROR = 'pubnub/OBJECTS_FETCH_SPACES_ERROR',
  OBJECTS_FETCH_SPACE_BY_ID = 'pubnub/OBJECTS_FETCH_SPACE_BY_ID',
  OBJECTS_FETCH_SPACE_BY_ID_BEGIN = 'pubnub/OBJECTS_FETCH_SPACE_BY_ID_BEGIN',
  OBJECTS_FETCH_SPACE_BY_ID_ERROR = 'pubnub/OBJECTS_FETCH_SPACE_BY_ID_ERROR',
  OBJECTS_USER_ADDED_TO_SPACE = 'pubnub/OBJECTS_USER_ADDED_TO_SPACE',
  OBJECTS_USER_REMOVED_FROM_SPACE = 'pubnub/OBJECTS_USER_REMOVED_FROM_SPACE',
  OBJECTS_USER_MEMBERSHIP_UPDATED_ON_SPACE = 'pubnub/OBJECTS_USER_MEMBERSHIP_UPDATED_ON_SPACE',
  OBJECTS_FETCH_MEMBERS_BEGIN = 'pubnub/OBJECTS_FETCH_MEMBERS_BEGIN',
  OBJECTS_FETCH_MEMBERS = 'pubnub/OBJECTS_FETCH_MEMBERS',
  OBJECTS_FETCH_MEMBERS_ERROR = 'pubnub/OBJECTS_FETCH_MEMBERS_ERROR',
  OBJECTS_UPDATE_MEMBERS_BEGIN = 'pubnub/OBJECTS_UPDATE_MEMBERS_BEGIN',
  OBJECTS_UPDATE_MEMBERS = 'pubnub/OBJECTS_UPDATE_MEMBERS',
  OBJECTS_UPDATE_MEMBERS_ERROR = 'pubnub/OBJECTS_UPDATE_MEMBERS_ERROR',
  OBJECTS_ADD_MEMBERS_BEGIN = 'pubnub/OBJECTS_ADD_MEMBERS_BEGIN',
  OBJECTS_MEMBERS_ADDED = 'pubnub/OBJECTS_MEMBERS_ADDED',
  OBJECTS_ADD_MEMBERS_ERROR = 'pubnub/OBJECTS_ADD_MEMBERS_ERROR',
  OBJECTS_REMOVE_MEMBERS_BEGIN = 'pubnub/OBJECTS_REMOVE_MEMBERS_BEGIN',
  OBJECTS_MEMBERS_REMOVED = 'pubnub/OBJECTS_MEMBERS_REMOVED',
  OBJECTS_REMOVE_MEMBERS_ERROR = 'pubnub/OBJECTS_REMOVE_MEMBERS_ERROR',
  OBJECTS_FETCH_MEMBERSHIPS_BEGIN = 'pubnub/OBJECTS_FETCH_MEMBERSHIPS_BEGIN',
  OBJECTS_FETCH_MEMBERSHIPS = 'pubnub/OBJECTS_FETCH_MEMBERSHIPS',
  OBJECTS_FETCH_MEMBERSHIPS_ERROR = 'pubnub/OBJECTS_FETCH_MEMBERSHIPS_ERROR',
  OBJECTS_UPDATE_MEMBERSHIP_BEGIN = 'pubnub/OBJECTS_UPDATE_MEMBERSHIP_BEGIN',
  OBJECTS_UPDATE_MEMBERSHIP = 'pubnub/OBJECTS_UPDATE_MEMBERSHIP',
  OBJECTS_UPDATE_MEMBERSHIP_ERROR = 'pubnub/OBJECTS_UPDATE_MEMBERSHIP_ERROR',
  OBJECTS_JOIN_SPACES_BEGIN = 'pubnub/OBJECTS_JOIN_SPACES_BEGIN',
  OBJECTS_SPACES_JOINED = 'pubnub/OBJECTS_SPACES_JOINED',
  OBJECTS_JOIN_SPACES_ERROR = 'pubnub/OBJECTS_JOIN_SPACES_ERROR',
  OBJECTS_LEAVE_SPACES_BEGIN = 'pubnub/OBJECTS_LEAVE_SPACES_BEGIN',
  OBJECTS_SPACES_LEFT = 'pubnub/OBJECTS_SPACES_LEFT',
  OBJECTS_LEAVE_SPACES_ERROR = 'pubnub/OBJECTS_LEAVE_SPACES_ERROR',
  SIGNAL = 'pubnub/SIGNAL',
}
