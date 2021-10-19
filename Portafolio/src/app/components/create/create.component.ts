import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjecService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjecService,UploadService]
})
export class CreateComponent implements OnInit {
  public title:string;
  public project: Project;
  public status:boolean;
  public filesToUpload: Array<File>;

  constructor(
    private _projectService: ProjecService,
    private _uploadService:UploadService
  ) {
    this.title = "Crear Proyecto";
    this.project = new Project('','','','',0,'','');
    this.status = false;
    this.filesToUpload = new Array<File>();
  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    this._projectService.saveProject(this.project).subscribe(
      response=>{
        if(response){
          this._uploadService.makeFileRequest(`${Global.url}project/uploadImage/${response._id}`,[],this.filesToUpload,'image').then((result:any)=>{
            console.log(result);
            this.status = true;
            form.reset();
          });
        }
        else{
          this.status=false;
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
