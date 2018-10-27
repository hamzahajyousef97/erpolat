import { Routes, CanActivate } from '@angular/router';


import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MainComponent } from "../main/main.component";
import { BanklarComponent } from "../banklar/banklar.component";
import { BizeUlasinComponent } from "../bize-ulasin/bize-ulasin.component";
import { HakkimizdaComponent } from "../hakkimizda/hakkimizda.component";
import { KitaplikComponent } from "../kitaplik/kitaplik.component";
import { MasaComponent } from "../masa/masa.component";
import { SaksiliklarComponent } from "../saksiliklar/saksiliklar.component";
import { SalincaklarComponent } from "../salincaklar/salincaklar.component";
import { SandalyeComponent } from "../sandalye/sandalye.component";
import { TasarimYollaComponent } from '../tasarim-yolla/tasarim-yolla.component';
import { TVunitesiComponent } from '../tvunitesi/tvunitesi.component';
import { UrunComponent } from '../urun/urun.component';


export const routes: Routes = [ 
    {path : "header" , component : HeaderComponent },
    {path : "anasayfa" , component : MainComponent},
    {path : "banklar" , component : BanklarComponent},
    {path : "bize_ulasin" , component : BizeUlasinComponent},
    {path : "hakkimizda" , component : HakkimizdaComponent},
    {path : "kitaplik" , component : KitaplikComponent},
    {path : "masa" , component : MasaComponent},
    {path : "saksiliklar" , component : SaksiliklarComponent},
    {path : "salincaklar" , component : SalincaklarComponent},
    {path : "sandalye" , component : SandalyeComponent},
    {path : "tasarim_yolla" , component : TasarimYollaComponent},
    {path : "tvunitesi" , component : TVunitesiComponent},
    {path : "urun" , component : UrunComponent},

    {path : "" ,redirectTo: "/anasayfa" , pathMatch:"full"}
];