const app = new Vue({
  el: '#app',
  data: {
    notifications: [
      {
        title: 'Gem version out of date',
        content: 'Gemfile v1.23 is an expired dependency and should be updated to the latest stable version',
        date: '8/13/2020 @ 9:30am',
        by: 'Joe Harris'
      },
      {
        title: 'Security vulnerability',
        content: 'Gemfile v1.23 is an expired dependency and should be updated to the latest stable version',
        date: '8/13/2020 @ 9:30am',
        by: 'Joe Harris'
      },
      {
        title: 'I found a possible bug',
        content: 'When fixing bug-1234, I noticed this database may contain a bug',
        date: '8/13/2020 @ 9:30am',
        by: 'Joe Harris'
      },
      {
        title: 'Duplicated dependency',
        content: 'There are two instances of this plugin being called',
        date: '8/13/2020 @ 9:30am',
        by: 'Joe Harris'
      },
      {
        title: 'Incorrect syntax for something',
        content: 'There are two instances of this plugin being called',
        date: '8/13/2020 @ 9:30am',
        by: 'Joe Harris'
      },
      {
        title: 'Another interesting thing I found in the component',
        content: 'Gemfile v1.23 is an expired dependency and should be updated to the latest stable version',
        date: '8/13/2020 @ 9:30am',
        by: 'Joe Harris'
      },
      {
        title: 'Incorrect Version',
        content: 'Expireddependency and should be updated to the latest stable version',
        date: '8/13/2020 @ 9:30am',
        by: 'Joe Harris'
      },
      {
        title: 'Security vulnerability',
        content: 'Gemfile v1.23 is an expired dependency and should be updated to the latest stable version',
        date: '8/13/2020 @ 9:30am',
        by: 'Joe Harris'
      },
      {
        title: 'Gem version out of date',
        content: 'Gemfile v1.23 is an expired dependency and should be updated to the latest stable version',
        date: '8/13/2020 @ 9:30am',
        by: 'Joe Harris'
      }
    ],
    isNotificationOpen: false,
    selectedItem: null,
  },

  computed: {
  },

  methods: {
    toggleNotification() {
      this.isNotificationOpen = !this.isNotificationOpen;
    },

    onSelectItem(key) {
      console.log('onSelectItem', key);
      this.selectedItem = key;
    },

    onRemoveItem(event) {
      event.stopPropagation();
      
      this.notifications = this.notifications.filter((item, key) => key !== this.selectedItem);
      this.selectedItem = null;
    }
  },
});
