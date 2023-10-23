import { Component, OnDestroy, OnInit } from '@angular/core';
import { GridService } from '../grid.service';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  private refreshInterval: any;
  initialize = false;
  timer: Date = new Date();
  inputChar = new FormControl('', [Validators.pattern('[A-Za-z]')]);
  digitCode: number = 0;
  gridData: string[][] = [];
  constructor(private gridService: GridService) {
    setInterval(() => {
      this.timer = new Date();
    }, 1000);
  }

  ngOnInit() {
    this.gridService.sharedData$.subscribe((data) => {
      this.gridData = data?.grid;
      this.digitCode = data?.code;
    });
  }

  disableInput() {
    this.inputChar.disable();
    setTimeout(() => {
      this.inputChar.enable();
    }, 4000);
  }

  generateGrid() {
    clearInterval(this.refreshInterval);

    if (this.inputChar.valid && this.inputChar.value != '') {
      this.disableInput();

      this.startRefresh(this.inputChar.value);
    } else {
      this.startRefresh('');
    }
  }

  startRefresh(data: any) {
    this.getGridData(data);
    this.refreshInterval = setInterval(() => {
      this.getGridData(data);
    }, 2000);
  }

  getGridData(character: string | null) {
    this.gridService.getGridData(character).subscribe((data: any) => {
      this.gridData = data.matrix;
      this.digitCode = data.count;

      this.gridService.updateSharedData({
        grid: this.gridData,
        code: this.digitCode,
      });
    });
  }
}
