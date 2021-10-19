export class Project{
  /**
   "_id": "616dd85637f697076ec522c7",
        "name": "Portafolio",
        "description": "proyecto de portafolios para desarrolladores",
        "category": "web",
        "year": 2020,
        "langs": "NodeJs, MongoDb, Angular",
        "image": "UyGC3TadxV2R8YwhQGdNHYMm.png",
        "__v": 0
   */
  constructor(
    public _id:string,
    public name:string,
    public description:string,
    public category:string,
    public year:number,
    public langs:string,
    public image:string
  ) {}


}
