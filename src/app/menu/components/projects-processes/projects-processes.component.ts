import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-projects-processes',
  templateUrl: './projects-processes.component.html',
  styleUrls: ['./projects-processes.component.scss']
})
export class ProjectsProcessesComponent {
  checkDir: boolean = true;
  currentLanguage: any = localStorage.getItem('currentLanguage');
  display: any;

  actions: any[] = []
  action: any
  actionForm!: FormGroup;

  constructor(private _MenuService: MenuService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.actionForm = this.fb.group({
      Project_action_Id: [''],
      Project_action_Name: [''],
      Project_action_Name_EN: [''],
      Project_action_Desc: [''],
      Project_action_DescEn:[''],
      Project_action_CheckUserDefault: [false],
      Project_action_CheckMaqawlDefault: [false],
      Project_action_IsMainFunction: [false],
      Project_action_Enabled: [false]
    });

    this.action={
      Project_action_Id: 0,
      Project_action_Name: "",
      Project_action_Name_EN: "",
      Project_action_Desc: "",
      Project_action_DescEn: "",
      Project_action_CheckUserDefault: false,
      Project_action_CheckMaqawlDefault: false,
      Project_action_IsMainFunction: false,
      Project_action_Enabled: false
    }
    this.getData();
  }

  getData(): void {
    this._MenuService.getActions().subscribe((response) => {
      this.actions = response.Data.data;
      console.log(this.actions);
    })
  }

  getAction(id: any) {
    this._MenuService.getAction(id).subscribe((response) => {
      this.actionForm.patchValue({
        Project_action_Id: response.Data.Project_action_Id,
        Project_action_Name: response.Data.Project_action_Name,
        Project_action_Name_EN: response.Data.Project_action_Name_EN,
        Project_action_Desc: response.Data.Project_action_Desc,
        Project_action_DescEn: response.Data.Project_action_DescEn,
        Project_action_CheckUserDefault: response.Data.Project_action_CheckUserDefault,
        Project_action_CheckMaqawlDefault: response.Data.Project_action_CheckMaqawlDefault,
        Project_action_IsMainFunction: response.Data.Project_action_IsMainFunction,
        Project_action_Enabled: response.Data.Project_action_Enabled
      })
    })
  }

  editAction(actionForm:FormGroup){
    this.action.Project_action_Id=actionForm.value.Project_action_Id;
    this.action.Project_action_Name=actionForm.value.Project_action_Name;
    this.action.Project_action_Name_EN=actionForm.value.Project_action_Name_EN;
    this.action.Project_action_DescEn=actionForm.value.Project_action_DescEn;
    this.action.Project_action_Desc=actionForm.value.Project_action_Desc;
    this.action.Project_action_CheckUserDefault=actionForm.value.Project_action_CheckUserDefault;
    this.action.Project_action_CheckMaqawlDefault=actionForm.value.Project_action_CheckMaqawlDefault;
    this.action.Project_action_IsMainFunction=actionForm.value.Project_action_IsMainFunction;
    this.action.Project_action_Enabled=actionForm.value.Project_action_Enabled;
    console.log(this.action)
    this._MenuService.editAction(this.action).subscribe((response) => {
      console.log(response.Success)
      this.getData();
    })
  }

  addAction(actionForm:FormGroup){
    this.action.Project_action_Name=actionForm.value.Project_action_Name;
    this.action.Project_action_Name_EN="name in English";//actionForm.value.Project_action_Name_EN;
    this.action.Project_action_DescEn="actionDescription";//actionForm.value.Project_action_DescEn;
    this.action.Project_action_Desc="الوصف بالعربية";//actionForm.value.Project_action_Desc;
    this.action.Project_action_CheckUserDefault=actionForm.value.Project_action_CheckUserDefault;
    this.action.Project_action_CheckMaqawlDefault=actionForm.value.Project_action_CheckMaqawlDefault;
    this.action.Project_action_Enabled=actionForm.value.Project_action_Enabled;
    console.log(this.action)
    this._MenuService.addAction(this.action).subscribe((response) => {
      console.log(response.Success)
      this.getData();
    })
    this.actionForm.reset();
  }

  enable(id:any){
    this._MenuService.enableAction(id).subscribe((response)=>{
      console.log(response.Success);
      this.getData();
    })
    
  }
  disable(id:any){
    this._MenuService.disableAction(id).subscribe((response)=>{
      console.log(response.Success);
      this.getData();
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
