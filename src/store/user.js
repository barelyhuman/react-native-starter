import create from 'zustand'

export const useUserStore = create(set => ({
  user: {
    id: null,
    name: '',
  },
  populate: async () => {
    const _user = {
      id: 1,
      name: 'Reaper',
    }
    set(state => ({ user: _user }))
  },
}))
