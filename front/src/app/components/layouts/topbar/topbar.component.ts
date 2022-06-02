import { Component, OnInit,EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  @Output() emitter:EventEmitter<boolean> = new EventEmitter<boolean>();

  status: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

emit(){
this.status = !this.status;  
this.emitter.emit(this.status);
}
}
