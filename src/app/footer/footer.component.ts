import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  onGoto(){
    let link=document.createElement('a');
    link.href='https://www.linkedin.com/in/raghavgarg2002';
    link.click();
  }

  onGithub(){
    let link=document.createElement('a');
    link.href='https://www.github.com/grraghav120';
    link.click();
  }

}
