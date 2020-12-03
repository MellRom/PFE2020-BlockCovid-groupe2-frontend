import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/login/api.service'


@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})
export class EstablishmentComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  @ViewChild('input') private input;
  showPlace(){
    console.log("showplace")
    this.apiService.listPlace(5)
    .subscribe(
      data => {
        console.log(data);
        console.log(data[0].name);
        this.input.nativeElement.focus();
        let startPos = this.input.nativeElement.selectionStart;
        let value = this.input.nativeElement.value;
        this.input.nativeElement.value=value.substring(0, startPos) + data[0].name + value.substring(startPos, value.length)
      },
      error => {
        console.log("error listing place")
      }
    )
  }

}

/* TEST BD

SELECT * FROM projetpfe.establishment
SELECT * FROM projetpfe.web_user
SELECT * FROM projetpfe.place
INSERT INTO projetpfe.establishment (user_id) VALUES (5)
INSERT INTO projetpfe.place (name, description, id_establishment) VALUES ('La table de midi', 'On y est bien ',5)

*/