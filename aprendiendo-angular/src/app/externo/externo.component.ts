import { Component, OnInit } from '@angular/core';
import { ConfigServices } from '../config/config.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers:[ConfigServices]
})
export class ExternoComponent implements OnInit {

  public user:any;
  public userId:any;
  public new_user:any;

  constructor(
    private _configServices:ConfigServices
    ){
      this.userId=1;
      this.new_user={
        "name":"",
        "job":""
          };
    }

  ngOnInit(): void {
    this.getUser();
  }

  async getUser(){
      (await this._configServices.getUser(this.userId)).subscribe((data)=>
      {
        this.user = data.data;
      });
  }

  async OnSubmit(newUser:any){
    (await this._configServices.AddUser(this.new_user)).subscribe((data)=>{
      console.log(data);
    });
  }
}
