export class friend{
    friendemail: string;
    constructor(friendemail){
        this.friendemail=friendemail;
    }
}

export class friendwithproperties{
    friendemail:string;
    subscription:boolean;
    block: boolean;
    constructor(friendemail,subscription,block){
            this.friendemail=friendemail;
            this.subscription= true;
            this.block = true;
    }
}

export class updates {
  friendemail: string;
  description: string;
  constructor(friendemail, description) {
      this.friendemail= friendemail;
      this.description= description;
  }
}
