export default defineAppConfig({
  routes: {
    core: [{
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
