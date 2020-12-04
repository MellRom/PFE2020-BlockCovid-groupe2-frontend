import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service'
import { IPlace } from 'src/app/models/place'
import { CookieService } from 'ngx-cookie-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})
export class EstablishmentComponent implements OnInit {
  table = null;
  places: IPlace[];
  qrdata: string = null;
  showTable = false;
  generateCode = false;
  qrCode: string = null;

  constructor(private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router) {
    this.showPlace()
   }

  ngOnInit(): void {
    if(this.cookieService.get("web_user_role")!='establishment'){
      this.router.navigate(['/**'])
    }
  }

  showPlace() {
    this.showTable = true;
    this.apiService.listPlace(this.cookieService.get("web_user_id"))
      .subscribe(
        data => {
          console.log(this.cookieService.get("web_user_id"));
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
    this.generateCode = true;
    console.log(id, name, description);
    this.qrdata = "id:'"+id + "', name:'" + name + "', description:'" + description + "'";
  }
}

/* TEST BD

SELECT * FROM projetpfe.establishment
SELECT * FROM projetpfe.web_user
SELECT * FROM projetpfe.place

INSERT INTO projetpfe.web_user (login, password, name, role) VALUES ('ipl', 'ipl','Institut Paul-Lambin','establishment')
INSERT INTO projetpfe.establishment (user_id, address) VALUES (1,'Rue chapelle aux champs')
INSERT INTO projetpfe.place (name, description, id_establishment) VALUES ('A019', 'Salle Machine ',1)
*/