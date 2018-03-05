var obj = {
  my_name: 'xugaoyang',
  a:console.log('a'),

  get name() {
    console.log('get');
    console.log(this.my_name);
    b:console.log('b');
    return this.my_name;
    c:console.log('c');
  },

  set name(val) {
    console.log('set');
    this.my_name = val;
  }
}
/* obj.name; */
console.log(obj.name);