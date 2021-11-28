import {NgModule, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterComponent} from './components/template/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {HomeComponent} from './components/view/home/home.component';
import {CarCrudComponent} from './components/view/car-crud/car-crud.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {CarReadComponent} from './components/car/car-read/car-read.component';
import {CarCreateComponent} from './components/car/car-create/car-create.component';
import {CarUpdateComponent} from './components/car/car-update/car-update.component';
import {CarDeleteComponent} from './components/car/car-delete/car-delete.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {registerLocaleData} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import {MatIconModule} from '@angular/material/icon';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatExpansionModule} from '@angular/material/expansion';



registerLocaleData(localePt);


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        CarCrudComponent,
        CarReadComponent,
        CarCreateComponent,
        CarUpdateComponent,
        CarDeleteComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatSnackBarModule,
        HttpClientModule,
        FormsModule,
        MatIconModule,
        ReactiveFormsModule,
        ScrollingModule,
        MatExpansionModule

    ],
    providers: [{
        provide: LOCALE_ID,
        useValue: 'pt-BR'
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
