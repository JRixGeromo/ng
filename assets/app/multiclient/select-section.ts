import { Component } from '@angular/core';

const selectDesc: any = {
  multiple: {
    heading: 'Clients'
  }
};

@Component({
  selector: 'select-section',
  template: `

   
        <client-section [desc]="selectDesc.multiple"><multiple-client></multiple-client></client-section>
     

  `
})
export class SelectSectionComponent {
  public selectDesc: any = selectDesc;
}
