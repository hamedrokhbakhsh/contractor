import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FilterData} from '../../models/filter-data';
import {AppService} from '../../services/app.service';
import {ToastService} from '../../services/toast.service';
import {DetailsData} from '../../models/details-data';
import {ResponseModel} from '../../models/response-model';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-detail-reception',
  templateUrl: './detail-reception.page.html',
  styleUrls: ['./detail-reception.page.scss'],
})
export class DetailReceptionPage implements OnInit {
  filter = false;
  response: ResponseModel ;

  receiveData: DetailsData[] = [
    {
      title: 'خالی',
      total: '0'
    }
  ] ;
  getTodayDate = new Date();
  data: FilterData = {
    from: this.getTodayDate.getFullYear() + '/' + (this.getTodayDate.getMonth() + 1) + '/' + this.getTodayDate.getDate(),
    until: this.getTodayDate.getFullYear() + '/' + (this.getTodayDate.getMonth() + 1) + '/' + this.getTodayDate.getDate()
  };
  loading = false;

  constructor(private router: Router, private service: AppService, private toast: ToastService) { }

  ngOnInit() {
    this.getData(this.data);
  }






  getData(data: FilterData){
    this.loading = true;
    this.service.single(data).subscribe(
        res => {
          this.response = res ;
          // console.log(this.response)
          if (this.response.status){

            this.receiveData = this.response.data ;

            this.loading = false;
            if (this.receiveData.length === 0){
              this.toast.presentToast('اطلاعاتی وجود ندارد').then();
            }

          }else {
            this.toast.presentToast('عدم ارتباط با سرور').then();
            this.loading = false;

          }

        }
    );
  }







  back() {
    this.router.navigate(['/home']).then();
  }

  getDataFromFilter(data: FilterData) {
    this.filter = !this.filter;
    this.getData(data);
  }

  filterButton() {
    this.filter = !this.filter ;
  }
}
