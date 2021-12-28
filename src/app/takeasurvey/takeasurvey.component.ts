import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-takeasurvey',
  templateUrl: './takeasurvey.component.html',
  styleUrls: ['./takeasurvey.component.css']
})
export class TakeasurveyComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  check() {
    let count: number = 0;
    var msg;
    let c = 0;
    var ele = document.getElementsByTagName('input');
    for(let i = 0;i < ele.length;i++){
        if(ele[i].checked){
            if(ele[i].type = "radio"){
                if(ele[i].value == "a"){
                    count = count + 1;
                }
                else if(ele[i].value == "b"){
                    count = count + 2;
                }
                else if(ele[i].value == "c"){
                    count = count + 3;
                }
                else if(ele[i].value == "d"){
                    count = count + 4;
                }
            }
        }
        else{
            c = c + 1;
        }
    }
    if (count >= 10 && count <= 16 && c == 30) {
        msg = 'in Depression. Go for a walk or dance to your favorite music. ';
        alert(' It says you are ' + msg);
    }else if (count >= 17 && count <= 24 && c == 30) {
        msg = 'in anxiety. Speak to a health professional.'
        alert(' It says you are ' + msg);
    } else if (count >= 25 && count <= 32 && c == 30) {
        msg = 'anti-social. Go out! Meet new people. Remove your barriers.';
        alert(' It says you are ' + msg);
    }else if (count >= 33 && count <= 40 && c == 30) {
        msg = 'Disorder free. Hope you stay the same and spread positivity.';
        alert(' It says you are ' + msg);
    }
    else{
        alert('Please answer all the questions.');
    }
  }
}
