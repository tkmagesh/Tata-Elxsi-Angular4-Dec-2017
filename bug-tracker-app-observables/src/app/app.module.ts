import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';
import { BugStatsComponent } from './bug-tracker/views/bugStats.compnent';
import { BugEditComponent } from './bug-tracker/views/bugEdit.component';

import { BugOperationsService } from './bug-tracker/services/bugOperations.service';
import { BugStorageService } from './bug-tracker/services/bugStorage.service';
import { BugServerService } from './bug-tracker/services/bugServer.service';

import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugEditComponent,
    BugStatsComponent,
    ClosedCountPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule,
    HttpModule
  ],
  providers: [
    BugOperationsService,
    BugStorageService,
    BugServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
