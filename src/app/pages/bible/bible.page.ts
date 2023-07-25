import { Component, OnInit } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.page.html',
  styleUrls: ['./bible.page.scss'],
})
export class BiblePage implements OnInit {

  verses: any[] = [];
  constructor(private http : HTTP) {}

  ngOnInit() {

    this.http.get('https://bible-api.com/john+3:1-36', {}, {})
    .then(data => {

      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);

      data.data = JSON.parse(data.data);

      let versesText: string = data.data.text;

      console.log("verses: "+versesText);

      for(let i = 2; i <= 36; i++){
        console.log(i);
        let str: string[] = versesText.split("("+i+")");

        let value: string = str[0].replace(/^\(\d+\)\s*/, '');

        this.verses.push(value);


        if(i == 36) {
          let value: string = str[1].replace(/^\(\d+\)\s*/, '');
          this.verses.push(value);
        }

        versesText =  str[1];
      }

      console.log(this.verses[0]+" "+this.verses[1]);

    })
    .catch(error => {

      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

    });
  }
  
}
