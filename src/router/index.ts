import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PlaylistPage from '../views/PlaylistPage.vue'
import PlaylistsPage from '@/views/PlaylistsPage.vue'
import AddSongsPage from '../views/AddSongsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/playlist/:id',
    name: 'playlist',
    component: PlaylistPage,
  },
  {
    path: '/playlists',
    name: 'playlists',
    component: PlaylistsPage,
  },
  // {
  //   path: '/playlists/add',
  //   name: 'playlists',
  //   component: PlaylistsPage,
  // },
  {
    path: '/songs/add',
    name: 'add-playlists',
    component: AddSongsPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
