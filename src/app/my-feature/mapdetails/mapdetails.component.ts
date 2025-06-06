import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/API/api';

@Component({
  selector: 'app-mapdetails',
  templateUrl: './mapdetails.component.html',
  styleUrls: ['./mapdetails.component.scss']
})
export class MapdetailsComponent implements OnInit {
  map: any;
  mapOptions = {
    center: { lat: 8.2334, lng: 123.0114 },
    zoom: 9
  };

  constructor(
    private http: HttpClient,
    public api: Api
  ) { }

  ngOnInit(): void {
    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, this.mapOptions);
    this.LoadMap();
  }
  LoadMap() {
    const userId = sessionStorage.getItem('userId');

    this.http.get<any[]>(`${this.api.getApi.mapview}?ownerid=${userId}`)
      .subscribe(locations => {

        locations.forEach(location => {
          const marker = new google.maps.Marker({
            position: { lat: parseFloat(location.latitude), lng: parseFloat(location.longitude) },
            map: this.map,
            title: location.housename
          });
          const infoWindow = new google.maps.InfoWindow({
            content: `
          <div style="text-align: center;">
            <img src="https://localhost/bhml/uploads/${location.picture}" 
                 alt=" House Image" 
                 class="img-fluid" 
                 width="200px" height="100px" 
                 style="border-radius: 10px; object-fit: cover;">
            <h3 style="margin-top: 10px;">${location.housename}</h3>
            <p>${location.amenities || 'No description available'}</p>
          </div>
        `
          });

          marker.addListener("click", () => {
            infoWindow.open(this.map, marker);
          });
        });

        if (locations.length > 0) {
          this.map.setCenter({ lat: parseFloat(locations[0].latitude), lng: parseFloat(locations[0].longitude) });
        }
      }, error => {
        console.error("Error fetching locations:", error);
      });

  }

}
