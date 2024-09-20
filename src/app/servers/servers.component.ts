import { Component,OnInit } from '@angular/core';

@Component({
  // selector:'[app-servers]' //by custom attribute
  // selector:'.app-servers'  // by class
  selector: 'app-servers',   // by unique selector
  // standalone: true,
  // imports: [],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
allowNewServer=false;
serverCreationStatus='No server is created';
serverName='Testserver';

  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }
  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreationStatus='server is created';
  }
  onUpdatedServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
