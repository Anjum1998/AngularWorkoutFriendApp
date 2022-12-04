import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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

  constructor(private api:ApiService){}

  readValue=()=>
  {
    let data:any={"name":this.name,"friendname":this.friendName,"describe":this.DescribeYourFriend,"nickname":this.friendNickName}
    console.log(data)
    this.api.addFriend(data).subscribe(
      (response)=>
      {
        console.log(response)
        if (response=="success") {
          alert("successfully added")
        } else {
          alert("something went wrong")
        }
      }
    )
  }
}
