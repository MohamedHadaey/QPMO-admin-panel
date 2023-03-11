import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {


  departments: any[] = []
  department: any
  departmentForm!: FormGroup

  constructor(private _MenuService: MenuService, public fb: FormBuilder) { }
  // pagination of list of projects
  changePage(eventInfo: any) {
    this.currentPage = eventInfo.target.innerHTML;
  }

  ngOnInit(): void {
    this.departmentForm = this.fb.group({
      Dep_ID: [''],
      Dep_Name: [''],
      Dep_Name_EN: [''],
      Dep_Enable: [false]
    })

    this.department = {
      Dep_ID: 0,
      Dep_Name: "",
      Dep_Name_EN: "",
      Dep_Enable: false
    }

    this.getData();
  }

  getData(): void {
    this._MenuService.getDepartments().subscribe((response) => {
      this.departments = response.Data.data;
      console.log(this.departments);
    })
  }

  getDept(id: any) {
    this._MenuService.getDepartment(id).subscribe((response) => {
      this.departmentForm.patchValue({
        Dep_ID: response.Data.Dep_ID,
        Dep_Name: response.Data.Dep_Name,
        Dep_Name_EN: response.Data.Dep_Name_EN,
        Dep_Enable: response.Data.Dep_Enable
      });
    })
  }

  editDept(departmentForm:FormGroup){
    this.department.Dep_ID=departmentForm.value.Dep_ID;
    this.department.Dep_Name=departmentForm.value.Dep_Name;
    this.department.Dep_Name_EN=departmentForm.value.Dep_Name_EN;
    this.department.Dep_Enable=departmentForm.value.Dep_Enable;
    console.log(this.department);
    this._MenuService.editDepartment(this.department).subscribe((response)=>{
      this.getData();
      console.log(response.Success)
    })
  }

  addDept(departmentForm:FormGroup){
    this.department.Dep_Name=departmentForm.value.Dep_Name;
    this.department.Dep_Name_EN="department";//departmentForm.value.Dep_Name_EN;
    this.department.Dep_Enable=departmentForm.value.Dep_Enable;
    console.log(this.department);
    this._MenuService.addDepartment(this.department).subscribe((response)=>{
      this.getData();
      console.log(response.Success)
    })
    this.departmentForm.reset();
  }
  
  enable(id:any){
    this._MenuService.enableDepartment(id).subscribe((response)=>{
      this.getData();
      console.log(response.Success);
    })
  }
  disable(id:any){
    this._MenuService.disableDepartment(id).subscribe((response)=>{
      this.getData();
      console.log(response.Success);
    })
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
