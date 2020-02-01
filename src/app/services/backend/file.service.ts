import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private fileUrl: string;

  constructor(private http: HttpClient) {
    this.fileUrl = 'http://localhost:8080/file';
  }

  public openFile(filePath: string) {
    // var x = document.getElementById("myFile").value;
    console.log('opening file');
    let url = this.fileUrl + '/open';
    const params = new HttpParams()
      .set('path', filePath);
    this.http.get(url, {params}).subscribe();
    //this.readFile();


  }

  public openFileaa(filePath: string) {
    console.log('opening file');
    let url = this.fileUrl + '/open';
    const params = new HttpParams()
      .set('path', filePath);

    this.http.get(url, {params}).subscribe();

  }

  public readFile() {
    console.log('readFile() works');
    let url = this.fileUrl + '/read';
    this.http.get(url).subscribe();
  }
}
