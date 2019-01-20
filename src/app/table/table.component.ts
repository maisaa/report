import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { Table } from './Table';
import { Table2 } from './Table';
const x = [
  {
    "SubjectName": "Software Analysis and Design",
    "CreditHours": "3",
    "CourseNo": "1302384",
    "Prerequisite":"1302382+1301305",
    "ConcurrentCourse":""
  }];
  const y = [
    {
      "CoordinatorName": "Dr.Hazem Qattous",
      "Lectuers": "Dr.Hazem Qattous - Dr.Yousra Odeh",
      "RoomNo": "1G06 - 1B01",
      "Email":"hqattous@asu.edu.jo - y_odeh@asu.edu.jo",
      "CourseWebsite":"http://bio.asu.edu.jo/bio/index.jsp",
      "OfficeHours":"Posted on office door"
    }];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  characters: Table[] = x;
  c1 : Table2[]= y;
 
  // add this config
  settings = {
    hideSubHeader: true,
    actions: {
      add:false,
      edit:false,
      delete:false
    },
    columns:{
      SubjectName:{
        title:'Subject Name'
      },
      CreditHours:{
        title:'Credit Hours'
      },
      CourseNo:{
        title:'Course No'
      },
      Prerequisite:{
        title:'Prerequisite'
      },
      ConcurrentCourse:{
        title:'Concurrent course'
      }
    },
    attr: {
      class: 'table table-bordered'
    },
  };
  settings1 = {
    hideSubHeader: true,
    actions: {
      add:false,
      edit:false,
      delete:false
    },
    columns:{
      CoordinatorName:{
        title:'Coordinator Name'
      },
      Lectuers:{
        title:'Lectuer/s'
      },
      RoomNo:{
        title:'Room No'
      },
      Email:{
        title:'E-mail'
      },
      CourseWebsite:{
        title:'Course website'
      },
      OfficeHours:{
        title:'Office Hours'
      }
    },
    attr: {
      class: 'table table-bordered'
    },
  };
  constructor(private tservice: TableService) { }

  ngOnInit() {
    // this
    // .tservice
    // .getCharacters()
    // .subscribe((data: Table[]) =>{
    //   this.characters = data;
    // });
  }

}
