class HashMap {

  constructor(capacity){

    this.capacity = capacity;
    this.table = [];
    this.entries =0;
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
    if(this.table[newKey]){
      for (let i=0; i<this.table[newKey].length; i++){
        if(key == this.table[newKey][i][0]){
          this.table[newKey][i][1]=value;
          return this;
        }
      }
      this.table[newKey].push([key,value]);
    }else{
      this.table[newKey] = [[key,value]];
    }
  this.entries+=1;
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
    return this.entries === 0;
  }
  findKey(key){
    const testKey = this.generateHashKey(key)
    if(!this.table[testKey]){
      return false;
    }

    return this.table[testKey];
  }

  remove(key){
    const testKey = this.generateHashKey(key);
    let temp = 0;
    if(!this.table[testKey]){
      return null;
    }
    for( let i=0; i<this.table[testKey].length; i++){
      if( key == this.table[testKey][i][0] ){
        console.log(this.table[testKey][i]);
         temp = this.table[testKey].splice(i, 1);
         this.entries-=1;
      }
    }
    return temp;
  }


  hashGrow(){
    this.capacity = Math.floor(this.capacity * 1.5);
    let oldTable = this.table;
    this.table=[];
    this.entries = 0;
    for (const entry of oldTable){
      if(entry){
        for(const [key, value] of entry){
          this.add(key, value);
        }

      }
    }
    return this;
  }
}


const map = new HashMap(15);
const map2 = new HashMap(50);

map.add("cat", "hat").add("test","mean").add("table","chair").add("cat","sunshine")

// console.log(map.contains('frank'));
// console.log(map2.isEmpty());

// console.log(map.findKey('test'));

// console.log("Table length is: "+map.table.length +", and the table contents are: "+ map.table);

// console.log(map.table)
console.log(map.table);
console.log(map.entries);
console.log(map.capacity);
map.hashGrow();
console.log(map.capacity);


console.log(map.table);
