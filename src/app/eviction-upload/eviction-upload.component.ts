import {
  ChangeDetectionStrategy, Output, EventEmitter, Component, OnDestroy, OnInit, ViewChild
} from '@angular/core';
import {FileUploader} from 'ng2-file-upload/ng2-file-upload';
import * as XLSX from 'xlsx';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import {EvictionService} from '../eviction.service';
import {Eviction} from '../eviction.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface UploadResult {
  result: 'failure' | 'success';
  payload: any;
}
const URL = 'https://foo.bar.com';

@Component({
  selector: 'app-eviction-upload',
  templateUrl: './eviction-upload.component.html',
  styleUrls: ['./eviction-upload.component.css'],
  providers: [EvictionService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvictionUploadComponent implements OnInit, OnDestroy {
  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;
  private subscription: Subscription;
  private filesSubject: Subject<File>;
  private _uploadedXls: Observable<{ result: string, payload: any }>;
  dataSource = new MatTableDataSource();
  hasResult = false;
  evictionSource: Eviction[] = null;
  displayedColumns = ['ev_added_date', 'combinedDefendantName', 'recordType',
    'combinedDefAddress', 'defendantZip', 'plaintiffName', 'dispositionDate'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Output()
  public uploadedXls: EventEmitter<UploadResult> = new EventEmitter();

  constructor(private evictionService: EvictionService) {
    this.filesSubject = new Subject();
    this._uploadedXls = this.filesSubject.asObservable()
      .switchMap((file: File) => {
        return new Observable<any>((observer) => {
          const reader: FileReader = new FileReader();
          reader.onload = (e) => {
            observer.next((e.target as any).result);
          };

          reader.readAsBinaryString(file);
          console.log('reader.readAsBinaryString(file');
          return () => {
            reader.abort();
          };
        })
          .map((value: string) => {
            return XLSX.read(value, {type: 'binary'});
          }).map((wb: XLSX.WorkBook) => {
            return wb.SheetNames.map((sheetName: string) => {
              console.log('sheetName: ' + sheetName);
              const sheet: XLSX.WorkSheet = wb.Sheets[sheetName];
              let returnData: Array<any>;
              try {
                returnData = XLSX.utils.sheet_to_json(sheet, {header: 1, raw: false});
                this.evictionService.uploadEvictions(returnData)
                  .subscribe(
                    (message: string) => {
                      // this.uploader.queue. = file.name + ' uploaded';
                      console.log('Evictions Uploaded, return message: ' + message);
                    }
                  );
              } catch (myError) {
                console.log('error parsing sheet to json: ' + myError)
              }
              // console.log('returnData: ' + JSON.stringify(returnData));
              return sheet;
            });
          }).map((results: Array<any>) => {
            // console.log("results: Array<any>")
            //  let returnData = utils.sheet_to_json(results, {header: 2})
            return {result: 'success', payload: results};
          })
          .catch(e => Observable.of({result: 'failure', payload: e}));
      });
  }

  listDebugRecords() {
    this.evictionService.listDebugRecords()
      .subscribe(
        (evictions: Eviction[]) => {
          this.dataSource.data =  evictions;
          console.log('Number of debug records: ' + evictions.length);
          if ( this.evictionSource && this.evictionSource.length > 0) {
            Observable.interval(100).subscribe(x => {
              this.dataSource.sort = this.sort;
              this.dataSource.paginator = this.paginator;
            });
          }
        }
      );
    this.hasResult = true;
  }

  deleteDebugRecords() {
    this.evictionService.deleteDebugRecords()
      .subscribe(
        (evictions: Eviction[]) => {
        }
      );
  }

  listMostRecentRecord() {
    this.evictionService.listMostRecentRecord()
      .subscribe(
        (evictions: Eviction[]) => {
          this.dataSource.data =  evictions;
        }
      );
    this.hasResult = true;
  }

  ngOnInit() {
    this.subscription = this._uploadedXls.subscribe(this.uploadedXls);

    this.uploader.onAfterAddingFile = f => {
     /* if (this.uploader.queue.length > 1) {
        this.uploader.removeFromQueue(this.uploader.queue[0]);
      }*/
      console.log('eviction-upload.component.ts, ngOnInit, onAfterAddingFile, file URL = ' + this.uploader.queue[0]._file.name);
    };

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  public fileDropped(files: FileList): void {
    for (let i = 0; i < files.length; i++) {
      this.filesSubject.next(files[i]);
    }
  }
}
