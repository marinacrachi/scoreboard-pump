import { Component, OnInit } from '@angular/core';
import { PlanilhaService } from 'src/app/services/planilha.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sheet = '19JPfFqFUslDaua5UaSpu0Et89qJF_XTnMfGn_JGz-z8'
  dadosDaPlanilha;
  dadosTab;
  planilhas = []

  constructor(private planilhaService: PlanilhaService) { }

  ngOnInit() {
    this.planilhaService.getAllFromSheet(this.sheet).subscribe((res) => {
      this.dadosDaPlanilha = res
      console.log('this.dadosDaPlanilha')
      console.log(this.dadosDaPlanilha)
      this.buscaTabs(res)
    })
    setTimeout(() => {
      console.log(this.planilhas)
      this.buscaDadoPorTab(this.planilhas[0])
    }, 3000)

  }

  buscaTabs(worksheet) {
    worksheet.feed.entry.forEach((tab) => {
      this.planilhas.push(tab.id.$t.split('/')[8])
    })
  }

  buscaDadoPorTab(tab) {
    this.planilhaService.getAllFromTab(tab).subscribe((res => {
      console.log('res')
      console.log(res)
      this.dadosTab = res["feed"]["entry"]
      console.log(this.dadosTab)
    }))
  }

}
