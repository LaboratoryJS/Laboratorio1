import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import { Global } from 'src/app/services/global';
import { ProjecService } from 'src/app/services/project.service'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjecService]
})
export class ProjectComponent implements OnInit {
  public projects:Project[];
  public url:string;

  constructor(
    private _projectService:ProjecService
  ) {
    this.projects = new Array<Project>();
    this.url = Global.url+'project/image/';
  }

  ngOnInit(): void {
    this.getProjects();
  }


  getProjects(){
    this._projectService.getProjects().subscribe(
      res=>{
        if(res){
          this.projects = res;
        }
      },
      error=>{
        console.log(error);
      });
  }
}
