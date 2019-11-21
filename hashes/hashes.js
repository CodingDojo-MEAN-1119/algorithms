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
      return null;
    }else{
      for( let k in this.table[testKey]){
        if(key == this.table[testKey][k][0]){

          return this.table[testKey][k];
        }
      }
    }

  }

  remove(key){
    const testKey = this.generateHashKey(key);
    let temp = 0;
    if(!this.table[testKey]){
      return null;
    }
    for( let i=0; i<this.table[testKey].length; i++){
      if( key == this.table[testKey][i][0] ){
        // console.log(this.table[testKey][i]);
         temp = this.table[testKey].splice(i, 1);
         this.entries-=1;
      }
    }
    return temp;
  }


  hashGrow(){
    return this.setSize(Math.floor(this.capacity*1.5));
  }


  addMap(map){
    if(!map.entries){
      return this;
    }
    for (const entry of map.table){
      if(entry){
        for(const [key, value] of entry){
          this.add(key, value);
        }
      }
    }
    return this;
  }

  loadFactor(){
    return (this.entries / this.capacity)*100;
  }

  setSize(newCap){
    // console.log(this.entries, newCap);
    if(newCap>0){
      let oldTable = this.table;
      this.table=[];
      this.entries = 0;
      this.capacity = newCap;
      for (const entry of oldTable){
        if(entry){
          for(const [key, value] of entry){
            this.add(key, value);
          }
        }
      }
      return this;
    }else {
      throw new Error("Please set the size to more than 0.");
    }
  }

  selectKeys(keys){

    let newTable =[];
    for(const key of keys){
      let testKey =  this.findKey(key);
      if(testKey){
        newTable.push(testKey);
      }
    }
    console.log(newTable);
    this.entries = 0;
    this.table=[];
    for(let [key,value] of newTable){
      this.add(key,value)
    }
    console.log(this.table)
    return this;
  }

}

// Create method selectKeys(keyArray) to accepts an array of keys. Reject those keys in the existing map that are NOT in that array. If your map contains {"cool":"Pariece", "smart":"Pariece", "tall":"Kareem"} , then map.selectKeys(["cool","smart"]) should change map to {"cool":"Pariece", "smart":"Pariece"} .



const map = new HashMap(15);
const map2 = new HashMap(50);

map.add("cat", "hat").add("test","mean").add("table","chair").add("cat","sunshine").add("cup","coffee").add("hot","cold")

map2.add("sun","glasses").add("snow","shoes").add("fall","leaves").add("spring","sprung")

map.addMap(map2);
// console.log(map.table);
// console.log(map.loadFactor())

// // map.setSize(-5);

// console.log(map.table,map.entries);

map.selectKeys(['cat','test','cup']);

// console.log(map.table, map.entries);


