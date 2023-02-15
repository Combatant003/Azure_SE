/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  Companies: any = [
    {
      id: 1,
      name: 'Colgate-Palmolive',
      img: '../../assets/images/Colgate-Palmolive.png',
      description: '',
      result: '../../assets/documents/Colgate_Selects.xlsx',
      date: '2022-10-15',
      isPlacementDone: true,
    },
    {
      id: 2,
      name: 'Nomura',
      img: '../../assets/images/nomura.png',
      description: '../../assets/documents/Nomura.pdf',
      result: '../../assets/documents/Nomura_Selects.xlsx',
      isPlacementDone: false,
    },
    {
      id:3,
      name: 'General Mills',
      img: '../../assets/images/general-mills.png',
      description: '../../assets/documents/General-Mills.pdf',
      result: '../../assets/documents/General_Mills_Selects.xlsx',
      isPlacementDone: false,
    },
    {
      id: 4,
      name: 'Deloitte',
      img: '../../assets/images/deloitte.png',
      description: '../../assets/documents/Deloitte.pdf',
      result: '../../assets/documents/Deloitte_Selects.xlsx',
      isPlacementDone: true,
    },
    {
      id: 5,
      name: 'MSCI',
      img: '../../assets/images/MSCI.png',
      description: '../../assets/documents/MSCI.pdf',
      result: '../../assets/documents/MSCI_Selects.xlsx',
      isPlacementDone: true,
    },
    {
      id: 6,
      name: 'Quantiphi',
      img: '../../assets/images/quantiphi.png',
      description: '../../assets/documents/Quantiphi.pdf',
      result: '../../assets/documents/Quantiphi_Selects.xlsx',
      isPlacementDone: true,
    },
    {
      id: 7,
      name: 'Crisil',
      img: '../../assets/images/crisil.png',
      description: '../../assets/documents/Crisil.pdf',
      result: '../../assets/documents/Crisil_Selects.xlsx',
      isPlacementDone: true,
    },
    {
      id: 8,
      name: 'Versor',
      img: '../../assets/images/versor.png',
      description: '../../assets/documents/Versor.pdf',
      result: '../../assets/documents/Versor_Selects.xlsx',
      isPlacementDone: true,
    },
    {
      id: 9,
      name: 'enfusion',
      img: '../../assets/images/enfusion.png',
      description: '',
      result: '../../assets/documents/enfusion_Selects.xlsx',
      isPlacementDone: false,
    },
    {
      id: 10,
      name: 'Ganit',
      img: '../../assets/images/ganit.png',
      description: '../../assets/documents/Ganit.pdf',
      result: '../../assets/documents/Ganit_Selects.xlsx',
      isPlacementDone: false,
    }
  ];
  constructor() { }
}
