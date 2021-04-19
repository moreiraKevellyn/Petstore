import { Component, Input, OnInit } from '@angular/core';
import { Parameters } from 'src/app/interfaces/parameters';
import { ParametersService } from 'src/app/services/parameters.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() parameters: Parameters;

  facebook = "https://imobzi.storage.googleapis.com/image/redes-sociais/facebook_gray.svg"
  linkedin = "https://imobzi.storage.googleapis.com/image/redes-sociais/linkedin_gray.svg"
  youtube = "https://imobzi.storage.googleapis.com/image/redes-sociais/youtube_gray.svg"
  instagram = "https://imobzi.storage.googleapis.com/image/redes-sociais/instagram_gray.svg"
  whatsApp = "https://imobzi.storage.googleapis.com/image/redes-sociais/whatsapp_gray.svg"

  Instagram = "https://instagram.com/"
  Youtube = "https://youtube.com/"
  Facebook = "https://facebook.com/"
  LinkedIn = "https://br.linkedin.com/"

  constructor(private parametersService: ParametersService) { }

  ngOnInit(): void {
    this.getParameters();
  }

  getParameters(): void {
    this.parametersService.getParameters()
      .subscribe(response => {
        this.parameters = response;
        console.log(this.parameters.address);
      });
  }

}
