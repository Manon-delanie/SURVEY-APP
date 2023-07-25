import { Component, OnInit } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.page.html',
  styleUrls: ['./bible.page.scss'],
})
export class BiblePage implements OnInit {

  //verses: any[] = ["Now there was a man of the Pharisees named Nicodemus, a ruler of the Jews.\n","The same came to him by night, and said to him, “Rabbi, we know that you are a teacher come from God, for no one can do these signs that you do, unless God is with him.”\n","Jesus answered him,\n“Most certainly, I tell you, unless one is born anew,\n\nhe can’t see God’s Kingdom.”\n","Nicodemus said to him, “How can a man be born when he is old? Can he enter a second time into his mother’s womb, and be born?”\n","Jesus answered,\n“Most certainly I tell you, unless one is born of water and spirit, he can’t enter into God’s Kingdom.\n","\nThat which is born of the flesh is flesh. That which is born of the Spirit is spirit.\n\n","\nDon’t marvel that I said to you, ‘You must be born anew.’\n\n","\nThe wind\nblows where it wants to, and you hear its sound, but don’t know where it comes from and where it is going. So is everyone who is born of the Spirit.”\n","Nicodemus answered him, “How can these things be?”\n","Jesus answered him,\n“Are you the teacher of Israel, and don’t understand these things?\n\n","\nMost certainly I tell you, we speak that which we know, and testify of that which we have seen, and you don’t receive our witness.\n\n"];
  verses: any[] =[];
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

        //Comment the line below to make use of the prefilled array above
        this.verses.push(value);


        if(i == 36) {
          let value: string = str[1].replace(/^\(\d+\)\s*/, '');
          //Comment the line below to make use of the prefilled array above
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
