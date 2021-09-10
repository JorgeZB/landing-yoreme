import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'landingY1';
    isPlaying: boolean = false;
    masterPause: boolean = false;
    primaryIcon: string = 'pause';
    volumenIcon: string = 'volume-up';


    ngOnInit(): void {
        this.playVideo();
    }

    @HostListener("window:scroll")
    onWindowScroll(): void {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("yoreme--navbar").style.top = "0";
        } else {
            document.getElementById("yoreme--navbar").style.top = "-100px";
            if (!this.masterPause) {
                if (!this.isPlaying) {
                    this.playVideo();
                }
            }
        }

        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            if (this.isPlaying) {
                this.playVideo();
            }
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
        if (v.muted) {
            this.volumenIcon = 'volume-up';
        } else {
            this.volumenIcon = 'volume-mute';
        }
        v.muted = !v.muted;
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

    dataRate = [
        {
            "name": "Isai Aleman",
            "occupation": "Restaurantero",
            "title": "¡La calidad es incomparable!",
            "opinion": "Tempor nisi exercitation laborum voluptate laborum do qui qui incididunt nulla consequat. Nostrud eiusmod sint fugiat nostrud cillum consequat elit anim nisi commodo adipisicing dolore deserunt aute. Fugiat esse nulla sunt sint duis sit aute enim minim labore cupidatat et incididunt dolore."
        },
        {
            "name": "Andrea López",
            "occupation": "Gerente",
            "title": "¡El servicio es fascinante!",
            "opinion": "Tempor nisi exercitation laborum voluptate laborum do qui qui incididunt nulla consequat. Nostrud eiusmod sint fugiat nostrud cillum consequat elit anim nisi commodo adipisicing dolore deserunt aute. Fugiat esse nulla sunt sint duis sit aute enim minim labore cupidatat et incididunt dolore."
        },
        {
            "name": "Jorge Zaragoza",
            "occupation": "Consumidor",
            "title": "¡Los cortes son muy finos!",
            "opinion": "Tempor nisi exercitation laborum voluptate laborum do qui qui incididunt nulla consequat. Nostrud eiusmod sint fugiat nostrud cillum consequat elit anim nisi commodo adipisicing dolore deserunt aute. Fugiat esse nulla sunt sint duis sit aute enim minim labore cupidatat et incididunt dolore."
        },
    ]
}
