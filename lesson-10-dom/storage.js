function HashStorage() {
  this.hash = {};

  this.Reset = function () {
    hash = {};
  };

  this.addValue = function(key,value) {
    this.hash[key] = value;
  };

  this.getValue = function(key) {
    return this.hash[key];
  };

  this.deleteValue = function(key) {
    return delete this.hash[key];
  };

  this.getKeys = function(){
    return Object.keys(hash);
  }
}