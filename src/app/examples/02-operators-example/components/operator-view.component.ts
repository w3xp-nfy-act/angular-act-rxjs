import { Component, OnInit } from '@angular/core';
import {from} from "rxjs";
import {filter, map, scan} from "rxjs/operators";

@Component({
    selector: 'app-input',
    styleUrls: ['./operator-view.component.scss'],
    templateUrl: './operator-view.component.html'
})

export class OperatorComponent implements OnInit {
    ngOnInit() {
        //emit (1, 2, 3, 4, 5, 6)
        const source = from([1, 2, 3, 4, 5, 6]); // Observable creation methods

        const example = source.pipe(
            filter(x => x % 2 === 0), // 2, 4, 6
            map(x => x + x), // 4, 8, 12
            scan((acc, x) => acc + x, 0) // 4, 12, 24
        );
        // output: 4, 12, 24
        const subscribe = example.subscribe(val => console.log(val));
    }
}