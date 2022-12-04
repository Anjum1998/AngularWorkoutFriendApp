import { Component } from '@angular/core';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {

  name=""
  friendName=""
  DescribeYourFriend=""
  friendNickName=""

  readValue=()=>
  {
    let data:any={"name":this.name,"friendname":this.friendName,"describe":this.DescribeYourFriend,"nickname":this.friendNickName}
    console.log(data)
  }
}
