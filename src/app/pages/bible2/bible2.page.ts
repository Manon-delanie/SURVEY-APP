
import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-bible2',
  templateUrl: 'bible2.page.html',
  styleUrls: ['bible2.page.scss'],
})
export class Bible2Page {
  verses: any[] = [];

  constructor() {
    this.getVerses();
  }

  getVerses() {
    const apiURL = 'https://bible-api.com/john%203?verse_numbers=true';

    axios.get(apiURL)
      .then(response => {
        this.verses = response.data.verses;
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des versets:', error);
      });
  }
}
