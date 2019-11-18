class HashMap {

  constructor(capacity){

    this.capacity = capacity;
    this.table = [];
  }

  generateHashKey(key, size = this.capacity) {
    let hash = 0;

    if (key.length == 0) {
      return hash;
    }

    for (let i = 0; i < key.length; i++) {
      const char = key.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;  //Zero fill left shift 	Shifts left by pushing zeros in from the right and let the leftmost bits fall off

      hash &= hash; // Convert to 32bit int
    }

    return (hash % size + size) % size;
  }

  add(key, value){
    if (!key){
      return this;
    }
    const newKey = this.generateHashKey(key);
    // console.log(newKey);
    this.table[newKey] = [key,value];
    // console.log(this.table[newKey]);
    return this;
  }
  contains(key) {
    const testKey = this.generateHashKey(key);
    if(this.table[testKey]){
      return true;
    }
    return false;
  }

  isEmpty(){
    if(this.table.length==0){
      return true;
    }
    return false;
  }
  findKey(key){
    if(!this.contains(key)){
      return false;
    }
    const i = this.generateHashKey(key);
    return this.table[i];
  }

}


const map = new HashMap(15);
const map2 = new HashMap(50);

map.add("cat", "hat").add("test","mean").add("table","chair");

// console.log(map.contains('frank'));
// console.log(map2.isEmpty());

console.log(map.findKey('mess'));
