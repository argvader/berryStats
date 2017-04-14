// @flow
export default function createReducer(initialState: ?{}, handlers: {}) {
  return function reducer(state: ?{} = initialState, action: {type: string}) {
    return Object.prototype.hasOwnProperty.call(handlers, action.type) ? handlers[action.type](state, action) : state;
  };
}
