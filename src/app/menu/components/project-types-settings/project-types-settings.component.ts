import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-project-types-settings',
  templateUrl: './project-types-settings.component.html',
  styleUrls: ['./project-types-settings.component.scss']
})
export class ProjectTypesSettingsComponent {


  projectsCategories: any[] = []
  projectCategory: any
  projectCategoryForm!: FormGroup

  constructor(private _MenuService: MenuService, public fb: FormBuilder) { }

  ngOnInit(): void {

    this.projectCategoryForm = this.fb.group({
      Pro_cat_Id: [''],
      Pro_cat_Name: [''],
      Pro_cat_NameEn: [''],
      Pro_cat_Enabled: [false]
    })

    this.projectCategory = {
      Pro_cat_Id: 0,
      Pro_cat_Name: "",
      Pro_cat_NameEn: "",
      Pro_cat_Enabled: false
    }

    this.getData();
  }

  getData(): void {
    this._MenuService.getProjectsCategories().subscribe((response) => {
      this.projectsCategories = response.Data.data;
      console.log(this.projectsCategories);
    })
  }

  getProject(id: any) {
    this._MenuService.getProjectCategory(id).subscribe((response) => {
      this.projectCategoryForm.patchValue({
        Pro_cat_Id: response.Data.Pro_cat_Id,
        Pro_cat_Name: response.Data.Pro_cat_Name,
        Pro_cat_NameEn: response.Data.Pro_cat_NameEn,
        Pro_cat_Enabled: response.Data.Pro_cat_Enabled
      })
      console.log(response.Data);
    })
  }

  editProject(projectCategoryForm:FormGroup){
    this.projectCategory.Pro_cat_Id=projectCategoryForm.value.Pro_cat_Id;
    this.projectCategory.Pro_cat_Name=projectCategoryForm.value.Pro_cat_Name;
    this.projectCategory.Pro_cat_NameEn=projectCategoryForm.value.Pro_cat_NameEn;
    this.projectCategory.Pro_cat_Enabled=projectCategoryForm.value.Pro_cat_Enabled;
    console.log(this.projectCategory);
    this._MenuService.editProjectCategory(this.projectCategory).subscribe((response)=>{
      this.getData();
      console.log(response.Success)
    })
  }

  addProject(projectCategoryForm:FormGroup){
    this.projectCategory.Pro_cat_Name=projectCategoryForm.value.Pro_cat_Name;
    this.projectCategory.Pro_cat_NameEn="Category";//projectCategoryForm.value.Pro_cat_NameEn;
    this.projectCategory.Pro_cat_Enabled=projectCategoryForm.value.Pro_cat_Enabled;
    console.log(this.projectCategory);
    this._MenuService.addProjectCategory(this.projectCategory).subscribe((response)=>{
      this.getData();
      console.log(response.Success)
    })
    this.projectCategoryForm.reset();
  }

  enable(id:any){
    this._MenuService.enableProjectCategory(id).subscribe((response)=>{
      this.getData();
      console.log(response.Success);
    })
  }
  disable(id:any){
    this._MenuService.disableProjectCategory(id).subscribe((response)=>{
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
