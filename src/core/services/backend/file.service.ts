import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {HttpService} from '../../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private fileUrl: string;

  constructor(private httpService: HttpService) {
    this.fileUrl = 'http://localhost:8080/file';
  }

  public getFilePath(filePath: string ) {
    // var x = document.getElementById("myFile").value;
      this.openFile(filePath);
      this.readFile();


  }

  public openFile(filePath: string) {
    console.log("openFile() works");
    let url = this.fileUrl + "/open";
    const params = new HttpParams()
      .set('path', filePath);

    this.httpService.http.get(url,{params}).subscribe();

  }

  public readFile() {
    console.log("readFile() works");
    let url = this.fileUrl+"/read";
    this.httpService.http.get(url).subscribe();
  }
}
