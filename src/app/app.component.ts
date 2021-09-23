import { Component, HostListener, OnInit } from '@angular/core';

declare const $: any;


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    staticVideoName: string     = "RESERVA ESPECIAL_V2.mp4";
    staticVideoNameWebm: string = "RESERVA ESPECIAL_V2.webm";

    title = 'Reserva Especial Yoreme';
    isPlaying: boolean = false;
    isShowCardVideo: boolean = true;
    isCompleteLoading: boolean = false;
    primaryIcon: string = 'play';
    volumenIcon: string = 'volume-up';

    constructor() {
        // setInterval(() => {
        //     this.isShowCardVideo = false;
        //     window.scrollTo(0, 0);
        // }, 3000);
    }

    ngOnInit(): void {
        // this.playVideo();
        let video: any = document.getElementById('yoreme--videos');
        
        video.oncanplaythrough = (event) => {
            this.isCompleteLoading = true;
            // console.log(event);
        };

        var $audioX = $('#yoreme--videos');
        var audioElement = $audioX[0];
        
        if (audioElement.readyState > 3) {
            this.isCompleteLoading = true;
        }
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

    muteVideo() {
        let v: any = document.getElementById('yoreme--videos');
        if (v.muted) {
            this.volumenIcon = 'volume-up';
        } else {
            this.volumenIcon = 'volume-mute';
        }
        v.muted = !v.muted;
    }

    onMouseEnter() {
        this.isShowCardVideo = true;
    }

    onMouseLave() {
        this.isShowCardVideo = false;
    }


    // Data
    dataCollections = [
        {
            "image": "assets/images/reserva-2016.png",
            "title": "Danza del venado",
            "edition": "Edición 2016",
            "autor": "Ricardo Escalante"
        },
        {
            "image": "assets/images/reserva-2018.png",
            "title": "Cabeza de ganado",
            "edition": "Edición 2018",
            "autor": "Ángel Luzanilla"
        },
        {
            "image": "assets/images/reserva-2021.png",
            "title": "Lo indispensable",
            "edition": "Edición 2021",
            "autor": "Ebeth Roldan"
        }
    ]
}
