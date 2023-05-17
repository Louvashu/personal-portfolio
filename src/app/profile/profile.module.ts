import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { SwiperModule } from 'swiper/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './header/header.component';
import { SwiperCubeComponent } from './swiper-cube/swiper-cube.component';
import { AboutComponent } from './about/about.component';
import { SplitPipe } from './split.pipe';
import { TypewriterComponent } from './typewriter/typewriter.component';
//import { ProfileService } from './profile.service';

@NgModule({
  declarations: [
    ProfileComponent,
    IntroComponent,
    HeaderComponent,
    SwiperCubeComponent,
    AboutComponent,
    SplitPipe,
    TypewriterComponent
    
    // HeaderComponent,
    // IntroComponent,
    // AboutComponent,
    // TypewriterComponent,
    // SwiperCubeComponent,
    // SplitPipe,
    // EducationComponent,
    // ExperienceComponent,
    // SkillsComponent,
    // ProjectsComponent,
    // ContactComponent,
    // FooterComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    NgxPaginationModule
  ],

  //custom
  //providers:[ProfileService],
  exports:[
    ProfileComponent
  ]
})
export class ProfileModule { }
