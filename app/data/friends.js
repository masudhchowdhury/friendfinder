var friends = {
  friendsArray:[
    {
      "name":"Masud",
      "photo":""
      "scores":[
         5,
         1,
         4,
         4,
         5,
         1,
         2,
         5,
         4,
         1
          ]
    }
  ],
  addFriend: function(friend){
    this.friendsArray.push(friend);
  }
}



module.exports = friends;