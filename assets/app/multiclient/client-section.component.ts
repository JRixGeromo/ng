import { Component, Input } from '@angular/core';


@Component({
  selector: 'client-section',
  templateUrl: './client-section.component.html'
})
export class ClientSectionComponent{
  @Input() public desc: any;
}
