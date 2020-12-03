import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service'


@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})
export class EstablishmentComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  
  ngOnInit(): void {
  }

  showPlace(){
    console.log("showplace")
    this.apiService.listPlace(1)
    .subscribe(
      data => {
        console.log(data);
        let table = document.querySelector("table");
        this.generateTableHead(table, data);
      },
      error => {
        console.log("error listing place")
      }
    )
  }

  generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key.name);
      let text2= document.createTextNode(" : ");
      let text3 = document.createTextNode(key.description);
      th.appendChild(text);
      th.appendChild(text2);
      th.appendChild(text3);
      row.appendChild(th);
    }
  }

}

/* TEST BD

SELECT * FROM projetpfe.establishment
SELECT * FROM projetpfe.web_user
SELECT * FROM projetpfe.place

INSERT INTO projetpfe.web_user (login, password, name, role) VALUES ('ipl', 'notre ecole woula','ipl','establishment')
INSERT INTO projetpfe.establishment (user_id, adress) VALUES (1,'rue chapel aux champs')
INSERT INTO projetpfe.place (name, description, id_establishment) VALUES ('La table de midi', 'On y est bien ',1)
*/