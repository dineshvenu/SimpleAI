import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { ChatbotRoutingModule } from './chatbot-routing.module';
import { ChatbotComponent } from './chatbot.component';
import { ChatbotpopupComponent } from './chatbotpopup/chatbotpopup.component';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatService } from './shared/chat.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ChatbotComponent, ChatbotpopupComponent],
  imports: [
    CommonModule,
    ChatbotRoutingModule,
    FormsModule,MatDialogModule,
    HttpClientModule,
    MatIconModule
        
  ],
  providers: [NgbActiveModal,ChatService]
})
export class ChatbotModule { }
