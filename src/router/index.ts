import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PlaylistPage from '../views/PlaylistPage.vue'
import PlaylistsPage from '@/views/PlaylistsPage.vue'
import AddSongsPage from '../views/AddSongsPage.vue'
import AddPlaylist from '@/views/AddPlaylist.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/playlist/:id',
    name: 'playlist',
    component: PlaylistPage,
  },
  {
    path: '/', // playlists
    name: 'playlists',
    component: PlaylistsPage,
  },
  {
    path: '/playlists/add',
    name: 'add-playlists',
    component: AddPlaylist,
  },
  {
    path: '/songs/add',
    name: 'add-songs',
    component: AddSongsPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
