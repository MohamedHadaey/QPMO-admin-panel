import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-file-type-settings',
  templateUrl: './file-type-settings.component.html',
  styleUrls: ['./file-type-settings.component.scss']
})
export class FileTypeSettingsComponent {

  filesCategories: any[] = []
  fileCategory: any
  fileCategoryForm!: FormGroup

  constructor(private _MenuService: MenuService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.fileCategoryForm = this.fb.group({
      File_cat_Id: [''],
      File_cat_Name: [''],
      File_cat_NameEn: [''],
      File_cat_Enabled: [false]
    })

    this.fileCategory = {
      File_cat_Id: 0,
      File_cat_Name: "",
      File_cat_NameEn: "",
      File_cat_Enabled: false
    }

    this.getData();
  }

  getData(): void {
    this._MenuService.getFilesCategories().subscribe((response) => {
      this.filesCategories = response.Data.data;
      console.log(this.filesCategories);
    })
  }

  getFile(id: any) {
    this._MenuService.getFileCategory(id).subscribe((response) => {
      this.fileCategoryForm.patchValue({
        File_cat_Id: response.Data.File_cat_Id,
        File_cat_Name: response.Data.File_cat_Name,
        File_cat_NameEn: response.Data.File_cat_NameEn,
        File_cat_Enabled: response.Data.File_cat_Enabled
      })
      console.log(response.Data);
    })
  }

  editFile(fileCategoryForm:FormGroup){
    this.fileCategory.File_cat_Id=fileCategoryForm.value.File_cat_Id;
    this.fileCategory.File_cat_Name=fileCategoryForm.value.File_cat_Name;
    this.fileCategory.File_cat_NameEn=fileCategoryForm.value.File_cat_NameEn;
    this.fileCategory.File_cat_Enabled=fileCategoryForm.value.File_cat_Enabled;
    console.log(this.fileCategory);
    this._MenuService.editFileCategory(this.fileCategory).subscribe((response)=>{
      console.log(response.Success)
      this.getData();
    })
  }

  addFile(fileCategoryForm:FormGroup){
    this.fileCategory.File_cat_Name=fileCategoryForm.value.File_cat_Name;
    this.fileCategory.File_cat_NameEn="File";//fileCategoryForm.value.File_cat_NameEn;
    this.fileCategory.File_cat_Enabled=fileCategoryForm.value.File_cat_Enabled;
    console.log(this.fileCategory);
    this._MenuService.addFileCategory(this.fileCategory).subscribe((response)=>{
      console.log(response.Success)
      this.getData();
    })
    this.fileCategoryForm.reset();
  }

  enable(id:any){
    this._MenuService.enableFileCategory(id).subscribe((response)=>{
      console.log(response.Success);
      this.getData();
    })
  }
  disable(id:any){
    this._MenuService.disableFileCategory(id).subscribe((response)=>{
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
