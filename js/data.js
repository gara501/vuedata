new Vue({
  el:'#app',
  data: {
    title: 'Soy Vue',
    soul4fit: 'http://www.soul4fit.net',
    finishedLink: '<a href="http://www.google.com">Google</a>',
    counter: 0,
    secondCounter:0,
    x: 0,
    y: 0,
    name: 'Pedro',
    attachRed: false,
    color: 'yellow',
    show: true,
    persons: [
      {name: 'pedro', age: 30, color: 'red'},
      {name: 'juan', age: 33, color: 'blue'},
    ]
  },
  computed: {
    output: function() {
      return this.counter > 5 ? 'over 5': 'under 5';
    },
    divCls: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    },
    myStyle: function() {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  },
  watch: {
    counter: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 2000);
    }
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function() {
      console.log('ALERT');
    },
    result: function() {
     return this.counter > 5 ? 'over 5': 'under 5';
    }
  }
})