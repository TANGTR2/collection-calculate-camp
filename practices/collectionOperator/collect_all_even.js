'use strict';

function collect_all_even(collection) {
  let collectionEven = [];
  for(let i in collection){
    if( i%2 === 0 ){
      if(i!=0)
        collectionEven.push(i);
    }
  }
  console.log(collectionEven);
  return collectionEven;
}

module.exports = collect_all_even;
