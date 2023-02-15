/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import { CompaniesService } from '../services/companies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  isModalOpen = false;
  pid: number;
  Companies = this.companiesService.Companies;


  constructor(private companiesService: CompaniesService) {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  getId(id: number) {
    this.pid = id;
  }


}
