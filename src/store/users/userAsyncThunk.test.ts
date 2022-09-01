import { getUsers } from "./userSlice";


describe('userThunk', () => {
  it('should reject', async () => {
    const dispatch = jest.fn();
    const thunk = getUsers();

    // await thunk(dispatch);

    const {calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;
    expect(start[0].type).toBe('users/getUsers/pending');
    expect(end[0].type).toBe('users/getUsers/fulfilled');
  });
});