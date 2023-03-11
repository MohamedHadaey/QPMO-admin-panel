import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  baseUrl: any = 'https://localhost:44371';
  version: any = 1;
  currentLanguage: any = localStorage.getItem('currentLanguage');

  constructor(private _http: HttpClient, private _auth: AuthService) { }


  addAction(action: any): Observable<any> {
    //https://localhost:44371/api/v1/Operations/addNewOperation?culture=en-sa
    return this._http.post(`${this.baseUrl}/api/v${this.version}/Operations/addNewOperation?culture=${this.currentLanguage}-sa`, action)
  }

  getActions(): Observable<any> {
    //`https://localhost:44371/api/v${this.version}/_Auth/Login?uname=${Username}&pass=${pass}&culture=${this.currentLanguage}`, null
    return this._http.post(`${this.baseUrl}/api/v${this.version}/Operations/getData?culture=${this.currentLanguage}-sa`,
      {
        "pageSize": 10,
        "skip": 0,
        "searchValue": "string",
        "searchColumn": "string",
        "sortColumn": "string",
        "sortColumnDirection": "string"
      })
  }

  getAction(id: any): Observable<any> {
    //https://localhost:44371/api/v1/Operations/EditOperation?id=1&culture=en-sa
    return this._http.get(`${this.baseUrl}/api/v${this.version}/Operations/getOperation?id=${id}&culture=${this.currentLanguage}-sa`)
  }

  editAction(action: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/api/v${this.version}/Operations/EditOperation?culture=${this.currentLanguage}-sa`, action)
  }

  enableAction(id: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/api/v${this.version}/Operations/Active?id=${id}&culture=${this.currentLanguage}-sa`, null)
  }

  disableAction(id: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/api/v${this.version}/Operations/deActive?id=${id}&culture=${this.currentLanguage}-sa`, null)
  }





  addDepartment(Department: any): Observable<any> {
    //https://localhost:44371/api/v1/Departments/addNewDepartment?culture=en-sa
    return this._http.post(`${this.baseUrl}/api/v${this.version}/Departments/addNewDepartment?culture=${this.currentLanguage}-sa`, Department)
  }

  getDepartments(): Observable<any> {
    //`https://localhost:44371/api/v${this.version}/_Auth/Login?uname=${Username}&pass=${pass}&culture=${this.currentLanguage}`, null
    return this._http.post(`${this.baseUrl}/api/v${this.version}/Departments/getData?culture=${this.currentLanguage}-sa`,
      {
        "pageSize": 10,
        "skip": 0,
        "searchValue": "string",
        "searchColumn": "string",
        "sortColumn": "string",
        "sortColumnDirection": "string"
      })
  }

  getDepartment(id: any): Observable<any> {
    //https://localhost:44371/api/v1/Operations/EditOperation?id=1&culture=en-sa
    return this._http.get(`${this.baseUrl}/api/v${this.version}/Departments/GetDepartment?id=${id}&culture=${this.currentLanguage}-sa`)
  }

  editDepartment(department: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/api/v${this.version}/Departments/EditDepartment?culture=${this.currentLanguage}-sa`, department)
  }

  enableDepartment(id: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/api/v${this.version}/Departments/Active?id=${id}&culture=${this.currentLanguage}-sa`, null)
  }

  disableDepartment(id: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/api/v${this.version}/Departments/deActive?id=${id}&culture=${this.currentLanguage}-sa`, null)
  }





  addFileCategory(fileCategory: any): Observable<any> {
    //https://localhost:44371/api/v1/FilesSettings/addNewCategory?culture=en-sa
    return this._http.post(`${this.baseUrl}/api/v${this.version}/FilesSettings/addNewCategory?culture=${this.currentLanguage}-sa`, fileCategory)
  }

  getFilesCategories(): Observable<any> {
    //`https://localhost:44371/api/v${this.version}/_Auth/Login?uname=${Username}&pass=${pass}&culture=${this.currentLanguage}`, null
    return this._http.post(`${this.baseUrl}/api/v${this.version}/FilesSettings/getData?culture=${this.currentLanguage}-sa`,
      {
        "pageSize": 10,
        "skip": 0,
        "searchValue": "string",
        "searchColumn": "string",
        "sortColumn": "string",
        "sortColumnDirection": "string"
      })
  }

  getFileCategory(id: any): Observable<any> {
    //https://localhost:44371/api/v1/Operations/EditOperation?id=1&culture=en-sa
    return this._http.get(`${this.baseUrl}/api/v${this.version}/FilesSettings/FileCategory?id=${id}&culture=${this.currentLanguage}-sa`)
  }

  editFileCategory(fileCategory: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/api/v${this.version}/FilesSettings/EditFileCategory?culture=${this.currentLanguage}-sa`, fileCategory)
  }

  enableFileCategory(id: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/api/v${this.version}/FilesSettings/Active?id=${id}&culture=${this.currentLanguage}-sa`, null)
  }

  disableFileCategory(id: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/api/v${this.version}/FilesSettings/deActive?id=${id}&culture=${this.currentLanguage}-sa`, null)
  }





  addProjectCategory(projectCategory: any): Observable<any> {
    //https://localhost:44371/api/v1/FilesSettings/addNewCategory?culture=en-sa
    return this._http.post(`${this.baseUrl}/api/v${this.version}/ProjectCategory/addNewCategory?culture=${this.currentLanguage}-sa`, projectCategory)
  }

  getProjectsCategories(): Observable<any> {
    //`https://localhost:44371/api/v${this.version}/_Auth/Login?uname=${Username}&pass=${pass}&culture=${this.currentLanguage}`, null
    return this._http.post(`${this.baseUrl}/api/v${this.version}/ProjectCategory/getData?culture=${this.currentLanguage}-sa`,
      {
        "pageSize": 10,
        "skip": 0,
        "searchValue": "string",
        "searchColumn": "string",
        "sortColumn": "string",
        "sortColumnDirection": "string"
      })
  }

  editProjectCategory(projectCategory: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/api/v${this.version}/ProjectCategory/EditProjectCategory?culture=${this.currentLanguage}-sa`, projectCategory)
  }

  getProjectCategory(id: any): Observable<any> {
    //https://localhost:44371/api/v1/Operations/EditOperation?id=1&culture=en-sa
    return this._http.get(`${this.baseUrl}/api/v${this.version}/ProjectCategory/GetProjectCategory?id=${id}&culture=${this.currentLanguage}-sa`)
  }

  enableProjectCategory(id: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/api/v${this.version}/ProjectCategory/Active?id=${id}&culture=${this.currentLanguage}-sa`, null)
  }

  disableProjectCategory(id: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/api/v${this.version}/ProjectCategory/deActive?id=${id}&culture=${this.currentLanguage}-sa`, null)
  }




  addMaqawl(maqawl: any): Observable<any> {
    //https://localhost:44371/api/v1/FilesSettings/addNewCategory?culture=en-sa
    return this._http.post(`${this.baseUrl}/api/v${this.version}/MqawlSettings/addNewMqawl?culture=${this.currentLanguage}-sa`, maqawl)
  }

  getMaqawls(): Observable<any> {
    //`https://localhost:44371/api/v${this.version}/_Auth/Login?uname=${Username}&pass=${pass}&culture=${this.currentLanguage}`, null
    return this._http.post(`${this.baseUrl}/api/v${this.version}/MqawlSettings/getData?culture=${this.currentLanguage}-sa`,
      {
        "pageSize": 10,
        "skip": 0,
        "searchValue": "string",
        "searchColumn": "string",
        "sortColumn": "string",
        "sortColumnDirection": "string"
      })
  }

  getMaqawl(id: any): Observable<any> {
    //https://localhost:44371/api/v1/Operations/EditOperation?id=1&culture=en-sa
    return this._http.get(`${this.baseUrl}/api/v${this.version}/MqawlSettings/GetMqawl?id=${id}&culture=${this.currentLanguage}-sa`)
  }

  editMaqawl(maqawl: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/api/v${this.version}/MqawlSettings/EditMqawl?culture=${this.currentLanguage}-sa`, maqawl)
  }

  enableMaqawl(id: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/api/v${this.version}/MqawlSettings/Active?id=${id}&culture=${this.currentLanguage}-sa`, null)
  }

  disableMaqawl(id: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/api/v${this.version}/MqawlSettings/deActive?id=${id}&culture=${this.currentLanguage}-sa`, null)
  }



}
