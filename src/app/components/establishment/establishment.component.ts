import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service'
import { IPlace } from 'src/app/models/place'
import { CookieService } from 'ngx-cookie-service';
import { Router, RouterLink } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


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
    if (this.cookieService.get("web_user_role") != 'establishment') {
      this.router.navigate(['/**'])
    }
  }

  showPlace() {
    this.showTable = true;
    this.apiService.listPlace(this.cookieService.get("web_user_id"))
      .subscribe(
        data => {
          this.places = data
        },
        error => {
          console.log("error listing place")
        }
      )

  }

  genereateQrCode(id, name, description): void {
    this.generateCode = true;
    console.log(id, name, description);
    this.qrdata = "statut: 'place', id:'" + id + "', name:'" + name + "', description:'" + description + "'";
  }

  generatePdf(placeName, placeDescription) {
    const documentDefinition = {
      pageSize: 'A5',
      pageOrientation: 'landscape',
      info: {
        title: 'QRCode ' + placeName,
        author: 'Groupe 2 - IPL',
        creationDate: new Date()
      },
      content: [
        {
          image: 'data:image/png;base64,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',
          width: 249,
          height: 78,
        },
        { text: 'Local: ' + placeName, style: 'data' },
        { text: 'Description: ' + placeDescription, style: 'data' },
        { text: ' ' },
        { qr: this.qrdata, fit: '175', eccLevel: 'Q', alignment: 'center' }
      ],
      footer: [
        { text: '© Groupe 2 - IPL', style: 'footer' }
      ],
      styles: {
        data: {
          fontSize: 16,
          color: '#C2666E'
        },
        footer: {
          alignment: 'center',
          fontSize: 11,
          color: '#A6A9A5'
        }
      }
    };
    pdfMake.createPdf(documentDefinition).open();
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