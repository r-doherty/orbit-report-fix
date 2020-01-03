import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  rowHeadings: string[] = ["Space Debris", "Communication", "Probe", "Positioning", "Space Station", "Telescope"];


  @Input() satellites: Satellite[];
 
  constructor() { }

  ngOnInit() {
  }

  count(term: string): number {
    let typeCount = 0;
    for(let i=0; i < this.satellites.length; i++) {
       if (this.satellites[i].type.toLowerCase().includes(term.toLowerCase())) {
          typeCount++;
       }
    }
    return typeCount;
  }

}
