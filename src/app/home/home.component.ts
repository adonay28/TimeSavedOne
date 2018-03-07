import { Component, OnInit, EventEmitter } from '@angular/core';
import { IOption } from 'ng-select';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private notifications: any[] = [];
  private workers_locations: any[] = [];
  private assigned_jobs: any[] = [];
  myOptions: Array<IOption> = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ];
  public scrollbarOptions = { axis: 'y', theme: 'dark-2' };
  items:Array<{name:string,count:number,color:string}>=[
    {name:'Orange',count:20,color:'#29abe2'},
    {name:'Apple',count:50,color:'#f4f7fa'}
  ];
 private _total:number =0;
 constructor() {
  if(this.items.length>0)
  {
    this._total = this.items.map(a=>a.count).reduce((x,y)=>x+y);
  }

}
getPerimeter(radius:number):number
{
  return Math.PI*2*radius;
}

getColor(index:number):string
{
  return this.items[index].color;
}

getOffset(radius:number,index:number):number
{   
  var percent=0;
  for(var i=0;i<index;i++)
  {
    percent+=((this.items[i].count)/this._total);
  }
  var perimeter = Math.PI*2*radius;
  return perimeter*percent;
}

  ngOnInit() {

    this.notifications = [
      {
        title: "Nannie Bowman",
        date: "Today, 12:55pm",
        description: "messaged you",
        message: "Yes i am! how long is the job?",
        notification_type: "Message"
      },
      {
        title: "3 People",
        date: "Today, 11:10am",
        description: "installed the app",
        notification_type: "App-Install-Notification"
      },
      {
        title: "10 People",
        date: "Today, 09:30am",
        description: "added new skills",
        notification_type: "Added-Skills-Notification"
      },
      {
        title: "Karl Trent",
        date: "Today, 09:10am",
        description: "Accepted Warehouse Job",
        notification_type: "Job-notification"
      },
      {
        title: "Peter Paul",
        date: "Today, 12:55pm",
        description: "messaged you",
        message: "Yes i am! how long is the job?",
        notification_type: "Message"
      }
    ];
    this.workers_locations = [
      {
        name: "Sally Salazar",
        picture: "https://secure.gravatar.com/avatar/ad11fc5c89084707c4cb3941e8051c90?s=64&d=https://app.zeplin.io/img/emotars/emotarFourLeafClover.png",
        labour: "General Labour",
        location: "Enroute: On Time",
        timeone: "9:00 am",
        timetwo: "8:45 am",
        status: "Available"
      },
      {
        name: "Sally Salazar",
        picture: "https://secure.gravatar.com/avatar/ad11fc5c89084707c4cb3941e8051c90?s=64&d=https://app.zeplin.io/img/emotars/emotarFourLeafClover.png",
        labour: "General Labour",
        location: "Enroute: On Time",
        timeone: "9:00 am",
        timetwo: "8:45 am",
        status: "Available"
      },
      {
        name: "Sally Salazar",
        picture: "https://secure.gravatar.com/avatar/ad11fc5c89084707c4cb3941e8051c90?s=64&d=https://app.zeplin.io/img/emotars/emotarFourLeafClover.png",
        labour: "General Labour",
        location: "Enroute: On Time",
        timeone: "9:00 am",
        timetwo: "8:45 am",
        status: "Not available"
      },
      {
        name: "Sally Salazar",
        picture: "https://secure.gravatar.com/avatar/ad11fc5c89084707c4cb3941e8051c90?s=64&d=https://app.zeplin.io/img/emotars/emotarFourLeafClover.png",
        labour: "General Labour",
        location: "Enroute: On Time",
        timeone: "9:00 am",
        timetwo: "8:45 am",
        status: "Busy"
      }
    ];
    this.assigned_jobs = [
      {
        name: "Apple Inc",
        picture: "https://secure.gravatar.com/avatar/ad11fc5c89084707c4cb3941e8051c90?s=64&d=https://app.zeplin.io/img/emotars/emotarFourLeafClover.png",
        labour: "General Labour",
        from_date: "10/22/2017",
        to_date: "12/20/2017",
        status: "Open",
        filled: true,
        filled_value: "3/3"
      },
      {
        name: "Apple Inc",
        picture: "https://secure.gravatar.com/avatar/ad11fc5c89084707c4cb3941e8051c90?s=64&d=https://app.zeplin.io/img/emotars/emotarFourLeafClover.png",
        labour: "General Labour",
        from_date: "10/22/2017",
        to_date: "12/20/2017",
        status: "Open",
        filled: false,
        filled_value: "3/3"
      },
      {
        name: "Apple Inc",
        picture: "https://secure.gravatar.com/avatar/ad11fc5c89084707c4cb3941e8051c90?s=64&d=https://app.zeplin.io/img/emotars/emotarFourLeafClover.png",
        labour: "General Labour",
        from_date: "10/22/2017",
        to_date: "12/20/2017",
        status: "Open",
        filled: true,
        filled_value: "3/3"
      },
      {
        name: "Apple Inc",
        picture: "https://secure.gravatar.com/avatar/ad11fc5c89084707c4cb3941e8051c90?s=64&d=https://app.zeplin.io/img/emotars/emotarFourLeafClover.png",
        labour: "General Labour",
        from_date: "10/22/2017",
        to_date: "12/20/2017",
        status: "Open",
        filled: true,
        filled_value: "3/3"
      }
    ];
  }

}
