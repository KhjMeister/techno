import { Injectable } from '@angular/core';
declare let alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message:string,okCallback:()=>any){
    alertify.confirm('تایید برای ادامه', message, 
    function(){
      okCallback();
      
      },function(){
       alertify.error('لغو شد');
      }).set('labels', {ok:'بله', cancel:'نه!'});
  }
  success(message:string){
    alertify.success(message);
  }
  error(message:string){
    alertify.error(message);
  }
  warning(message:string){
    alertify.warning(message);
  }
  message(message:string){
    alertify.message(message);
  }
}