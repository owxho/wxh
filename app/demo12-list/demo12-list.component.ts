import {Output,EventEmitter, Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-demo12-list',
  templateUrl: './demo12-list.component.html',
  styleUrls: ['./demo12-list.component.css']
})
export class Demo12ListComponent implements OnInit {
 @Input() mylist1=[]
 @Output() logoutEvent=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  handleclick(index){
    this.logoutEvent.emit(index)
  }
}
