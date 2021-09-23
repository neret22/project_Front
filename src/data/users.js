
const usersArray = JSON.parse(localStorage.getItem('users'))
export default usersArray || []

export const setUsersToStorage = users => localStorage.setItem('users', JSON.stringify(users))

export const activeUserID = localStorage.getItem('activeUser')
export const setActiveUserIdToStorage = id => localStorage.setItem('activeUser', id)