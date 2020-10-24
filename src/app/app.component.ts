import { Component } from '@angular/core';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import * as $ from "jquery";
import { ChatbotpopupComponent } from './chatbot/chatbotpopup/chatbotpopup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  animal: string;
  name: string;
  sendButton:boolean;
  constructor(public dialog: MatDialog) {}
  ngOnInit(){
    $("#close").hover(
      function () {
        $("#chatdone").show();
      }, 
      function () {
        $("#chatdone").hide();
      }
    );
  }
  openDialog(): void {
    const dialogPosition: DialogPosition = {     
      right:  '0'
    };
    let dialogRef = this.dialog.open(ChatbotpopupComponent, {
      width: '450px',
      // height:'200px',
      hasBackdrop: false,
      disableClose: false,
      
      data: { name: this.name, animal: this.animal },
      position: dialogPosition
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
