import {Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  public getHostURL(): string {
    return environment.hostUrl;
  }
}