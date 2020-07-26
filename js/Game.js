class Game{
  constructor(){
  }
  update(itemName){
    database.ref('item').update({
      item: itemName
    });
  }

  update1(Time){
    database.ref('time').update({
      time: Time
    });
  }
    
  update2(Place){
    database.ref('place').update({
      place: Place
    });
  }

  update3(Number){
    database.ref('itemNumber').update({
      itemNumber: Number
    });
  }

  static getItemInfo(){
    var itemInfoRef = database.ref('item');
    itemInfoRef.on("value",(data)=>{
      item = data.val();
    })
  }
}