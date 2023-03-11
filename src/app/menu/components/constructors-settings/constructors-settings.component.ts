import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


declare const $: any;

@Component({
  selector: 'app-constructors-settings',
  templateUrl: './constructors-settings.component.html',
  styleUrls: ['./constructors-settings.component.scss']
})
export class ConstructorsSettingsComponent {



  maqawls: any[] = []
  maqawl: any;
  maqawlForm!: FormGroup;


  constructor(private _MenuService: MenuService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.maqawlForm = this.fb.group({
      Maqawl_Id: [''],
      Maqawl_Name: [''],
      Maqawl_Password: [''],
      Maqawl_PasswordChanged: [false],
      Maqawl_Phone: [''],
      Maqawl_TaxRecord: [''],
      Maqawl_UserName: [''],
      Maqawl_CompanyId: [''],
      Maqawl_Enabled: [false],
      Company_Id: [''],
      Company_Name: [''],
      Company_Location: [''],
      Company_Phone: [''],
      Company_Email: [''],
      Company_Address: ['']
    });

    this.maqawl={
      Maqawl_Id: 0,
      Maqawl_Name: "",
      Maqawl_TaxRecord: "",
      Maqawl_Phone: "",
      Maqawl_UserName: "",
      Maqawl_Password: "",
      Maqawl_PasswordChanged: false,
      Maqawl_CompanyId: 0,
      Maqawl_Enabled: false,
      Company: {
        Company_Id: 0,
        Company_Name: "",
        Company_Location: "",
        Company_Phone: "",
        Company_Email: "",
        Company_Address: ""
      }
    }
    this.getData();
  }

  getData(): void {
    this._MenuService.getMaqawls().subscribe((response) => {
      this.maqawls = response.Data.data;
      console.log(this.maqawls);
    })
  }

  getMaqawl(id: any) {
    this._MenuService.getMaqawl(id).subscribe((response) => {
      if (response.Success) {
        this.maqawl = response.Data;
        this.maqawlForm.patchValue({
          Maqawl_Id: response.Data.Maqawl_Id,
          Maqawl_Name: response.Data.Maqawl_Name,
          Maqawl_Password: response.Data.Maqawl_Password,
          Maqawl_PasswordChanged: response.Data.Maqawl_PasswordChanged,
          Maqawl_Phone: response.Data.Maqawl_Phone,
          Maqawl_TaxRecord: response.Data.Maqawl_TaxRecord,
          Maqawl_UserName: response.Data.Maqawl_UserName,
          Maqawl_CompanyId: response.Data.Maqawl_CompanyId,
          Maqawl_Enabled: response.Data.Maqawl_Enabled,
          Company_Id: response.Data.Company.Company_Id,
          Company_Name:response.Data.Company.Company_Name,
          Company_Location:response.Data.Company.Company_Location,
          Company_Phone:response.Data.Company.Company_Phone,
          Company_Email:response.Data.Company.Company_Email,
          Company_Address:response.Data.Company.Company_Address
        })
        console.log(this.maqawl);
      }
    })
  }

  editMaqawl(maqawlForm:FormGroup) {
    this.maqawl.Maqawl_Id=maqawlForm.value.Maqawl_Id;
    this.maqawl.Maqawl_Name=maqawlForm.value.Maqawl_Name;
    this.maqawl.Maqawl_Password=maqawlForm.value.Maqawl_Password;
    this.maqawl.Maqawl_PasswordChanged=maqawlForm.value.Maqawl_PasswordChanged;
    this.maqawl.Maqawl_UserName=maqawlForm.value.Maqawl_UserName;
    this.maqawl.Maqawl_Phone=maqawlForm.value.Maqawl_Phone;
    this.maqawl.Maqawl_TaxRecord=maqawlForm.value.Maqawl_TaxRecord;
    this.maqawl.Maqawl_CompanyId=maqawlForm.value.Maqawl_CompanyId;
    this.maqawl.Maqawl_Enabled=maqawlForm.value.Maqawl_Enabled;
    this.maqawl.Company.Company_Id=maqawlForm.value.Company_Id;
    this.maqawl.Company.Company_Name=maqawlForm.value.Company_Name;
    this.maqawl.Company.Company_Location=maqawlForm.value.Company_Location;
    this.maqawl.Company.Company_Phone=maqawlForm.value.Company_Phone;
    this.maqawl.Company.Company_Email=maqawlForm.value.Company_Email;
    this.maqawl.Company.Company_Address=maqawlForm.value.Company_Address;

    this._MenuService.editMaqawl(this.maqawl).subscribe((response) => {
      this.getData();
      console.log(response.Success)
      console.log(this.maqawl)
    })
  }

  addMaqawl(maqawlForm:FormGroup) {
    this.maqawl.Maqawl_Name=maqawlForm.value.Maqawl_Name;
    this.maqawl.Maqawl_Password=maqawlForm.value.Maqawl_Password;
    this.maqawl.Maqawl_PasswordChanged=false;//maqawlForm.value.Maqawl_PasswordChanged;
    this.maqawl.Maqawl_Phone=maqawlForm.value.Maqawl_Phone;
    this.maqawl.Maqawl_UserName=maqawlForm.value.Maqawl_UserName;
    this.maqawl.Maqawl_TaxRecord=maqawlForm.value.Maqawl_TaxRecord;
    this.maqawl.Maqawl_Enabled=maqawlForm.value.Maqawl_Enabled;
    this.maqawl.Company.Company_Name=maqawlForm.value.Company_Name;
    this.maqawl.Company.Company_Location=maqawlForm.value.Company_Location;
    this.maqawl.Company.Company_Phone=maqawlForm.value.Company_Phone;
    this.maqawl.Company.Company_Email=maqawlForm.value.Company_Email;
    this.maqawl.Company.Company_Address=maqawlForm.value.Company_Address;
    console.log(this.maqawl);

    this._MenuService.addMaqawl(this.maqawl).subscribe((response) => {
      this.getData();
      console.log(response.Success)
    })
    this.maqawlForm.reset();

  }

  enable(id:any){
    this._MenuService.enableMaqawl(id).subscribe((response)=>{
      this.getData();
      console.log(response.Success);
    })
  }
  disable(id:any){
    this._MenuService.disableMaqawl(id).subscribe((response)=>{
      this.getData();
      console.log(response.Success);
    })
  }

  // pagination of list of projects
  changePage(eventInfo: any) {
    this.currentPage = eventInfo.target.innerHTML;
  }

  currentPage: number = 1;

  getNextPage() {
    this.currentPage++;
  }

  getPrviousPage() {
    if (this.currentPage == 1) {
      return;
    } else {
      this.currentPage--;
    }
  }
}
