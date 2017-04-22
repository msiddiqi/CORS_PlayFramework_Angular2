import { Component } from '@angular/core';
import { EchoRequestService } from './services/EchoRequestService'
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EchoRequestService]
})
export class AppComponent {
  inputMessage: String;
  echoedMessage: Observable<String>;

  sendEchoRequest() {
    this.echoedMessage = this._echoRequestService.sendEchoRequest(this.inputMessage);
  }

  constructor(private _echoRequestService: EchoRequestService) {
  }
  

  title = 'app does not work!';
}
