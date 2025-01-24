export default defineAppConfig({
  routes: {
    user: [{
      label: 'Administation',
      icon: 'cog',
      submenus: [
        {
          label: 'Users',
          icon: 'users',
          path: '/users/list',
        },
        {
          label: 'New User',
          icon: 'user-plus',
          path: '/users/new',
        },
      ]
    }]
  }
});
