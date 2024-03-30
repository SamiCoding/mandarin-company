<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    map: null,
    latitude: 35.153380795584056,
    longitude: 126.84073626995087,
  }),

  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.loadMap()
    }
    else {
      this.loadScript()
    }
  },

  methods: {
    loadMap() {
      const container = document.getElementById('map')
      const options = {
        center: new window.kakao.maps.LatLng(this.latitude, this.longitude),
        level: 4,
      }
      this.map = new window.kakao.maps.Map(container, options)
      this.loadMarker()
    },
    loadScript() {
      const script = document.createElement('script')
      script.async = true
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.VUE_APP_KAKAO_API_KEY}&autoload=false`
      script.onload = () => window.kakao.maps.load(this.loadMap)
      document.head.appendChild(script)
    },
    loadMarker() {
      const markerPosition = new window.kakao.maps.LatLng(this.latitude, this.longitude)
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      })
      marker.setMap(this.map)

      const content =
        '<div class="custom-overlay">' +
        '  <a href="https://kko.to/affFYbyx4d" target="_blank">' +
        '    <span class="custom-overlay__title">귤컴퍼니</span>' +
        '  </a>' +
        '</div>'

      const position = new window.kakao.maps.LatLng(this.latitude, this.longitude)
      const customOverlay = new window.kakao.maps.CustomOverlay({
          map: this.map,
          position: position,
          content: content,
          yAnchor: 1 
      })
      customOverlay.setMap(this.map)
    },
  },
}
</script>

<style>
  #map {
    width: 100%;
    height: 400px;
    border: 1px solid black;
  }

  .custom-overlay {
    float:left;
    position: relative;
    bottom: 50px;
    border: 1px solid rgb(204, 204, 204);
    border-radius:6px;
    border-bottom:2px solid rgb(221, 221, 221);
  }

  .custom-overlay:nth-of-type(n) {
    border:0;
    box-shadow:0px 1px 2px rgb(136, 136, 136);
  }

  .custom-overlay a {
    display:block;
    overflow:hidden;
    border-radius:6px;
    background: sandybrown url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 14px center;
    text-align:center;
    text-decoration:none;
    color:rgb(0, 0, 0);
    font-size:14px;
    font-weight:bold;
  }

  .custom-overlay .custom-overlay__title {
    display:block;
    margin-right:35px;
    padding:10px 15px;
    background-color:rgb(255, 255, 255);
    text-align:center;
    font-size:14px;
    font-weight:bold;
  }
</style>