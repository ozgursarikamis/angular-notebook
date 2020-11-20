import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateModule, TranslateParser } from '@ngx-translate/core';


@NgModule({
	imports: [
		BrowserModule,
		// TranslateModule.forChild({
        //     loader: {provide: TranslateLoader, useClass: CustomLoader},
        //     compiler: {provide: TranslateCompiler, useClass: CustomCompiler},
        //     parser: {provide: TranslateParser, useClass: CustomParser},
        //     missingTranslationHandler: {provide: MissingTranslationHandler, useClass: CustomHandler},
        //     isolate: true
        // })
	],
	declarations: [],
	bootstrap: [],
})
export class LazyLoadedModule { }
