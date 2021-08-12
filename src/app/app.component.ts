import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'landingY1';
    isPlaying: boolean = false;
    primaryIcon: string = 'pause';
    volumenIcon: string = 'volume-up';


    ngOnInit(): void {
        // window.scrollTo(0, 0); // values are x,y-offset
        this.playVideo();

    }

    @HostListener("window:scroll")
    onWindowScroll(): void {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("yoreme--navbar").style.top = "0";
        } else {
            document.getElementById("yoreme--navbar").style.top = "-100px";
        }
    }

    playVideo() {
        let v: any = document.getElementById('yoreme--videos');
        if (this.isPlaying) {
            v.pause();
            this.primaryIcon = 'play';
        } else {
            v.play();
            this.primaryIcon = 'pause';
        }

        this.isPlaying = !this.isPlaying;
    }

    // pauseVideo(){
    //     let v: any = document.getElementById('yoreme--videos');
    //     v.pause(); 
    // }


    muteVideo() {
        let v: any = document.getElementById('yoreme--videos');
        if(v.muted){
            this.volumenIcon = 'volume-up';
        }else{
            this.volumenIcon = 'volume-mute';
        }
        v.muted = !v.muted;
    }

}
