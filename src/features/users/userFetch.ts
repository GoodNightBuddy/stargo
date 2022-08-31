export const customFetch = async (URI: string, method: string = 'GET') => {
  const response = await fetch(`http://opn-interview-service.nn.r.appspot.com/${URI}`, {
    method: method,
    headers: {
      "Authorization": `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`
    },
  });

  const result = await response.json()
  return result
};

export const fetchIdList = () => customFetch('/list');
export const fetchUserById = (id: string) => customFetch(`/get/${id}`);
export const fetchUsers = (idList: string[]) => {
  return Promise.allSettled(idList.map(url => fetchUserById(url)))
}

