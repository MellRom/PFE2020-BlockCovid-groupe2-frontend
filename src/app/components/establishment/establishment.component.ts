import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service'
import { IPlace } from 'src/app/models/place'


@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})
export class EstablishmentComponent implements OnInit {
  table = null;
  places: IPlace[];
  qrdata: string = null;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  showPlace() {
    this.apiService.listPlace(1)
      .subscribe(
        data => {
          console.log(data);
          this.places = data
          console.log(this.places);
        },
        error => {
          console.log("error listing place")
        }
      )

  }

  genereateQrCode(id, name, description): void {
    this.qrdata = "id:" + id + ", name:" + name + ", description:" + description;
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