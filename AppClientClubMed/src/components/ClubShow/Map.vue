<template>
    <div>
        <div id="map" style="height: 400px; width: 60vw; margin-left: 20vw;"></div>
    </div>
</template>
  
<script>
export default {
    props: {
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        },
    },
    mounted() {
        this.loadScript().then(() => {
            this.initMap();
        });
    },
    methods: {
        loadScript() {
            return new Promise((resolve) => {
                const script = document.createElement("script");
                script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCPvHqlM8XEDOak-FeEa9h2IC7KY1anypE`;
                script.async = true;
                script.onload = resolve;
                document.head.appendChild(script);
            });
        },
        initMap() {
            let lat = this.latitude;
            let lon = this.longitude;

            const map = new google.maps.Map(document.getElementById("map"), {
                center: new google.maps.LatLng(lat, lon),
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: true,
                scrollwheel: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                },
                navigationControl: true,
                navigationControlOptions: {
                    style: google.maps.NavigationControlStyle.ZOOM_PAN,
                },
            });

            const marker = new google.maps.Marker({
                position: {
                    lat: lat,
                    lng: lon,
                },
                map: map,
            });
        },
    },
};
</script>