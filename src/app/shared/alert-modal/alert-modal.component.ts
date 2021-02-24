import { BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { Component, OnInit, ɵViewFlags, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {
  @ViewChild('infoModal') public infoModal: ModalDirective;

  @Input() msg = String;
  @Input() type = 'sucess';


  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
